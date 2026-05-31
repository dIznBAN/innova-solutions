import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ScrollView, Image, ActivityIndicator, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import ApiService from '../services/api';
import { theme } from '../theme';

const uploadToImgBB = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  const body = new URLSearchParams();
  body.append('key', '06e7312be7cd16b207344fba43e96449');
  body.append('image', base64);
  const res = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body });
  const data = await res.json();
  if (!data.success) throw new Error('Falha ao fazer upload da imagem');
  return data.data.url;
};

const formatPhone = (v) => {
  const n = v.replace(/\D/g, '');
  if (n.length <= 2) return `(${n}`;
  if (n.length <= 6) return `(${n.slice(0, 2)}) ${n.slice(2)}`;
  if (n.length <= 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`;
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7, 11)}`;
};

const formatCNPJ = (v) => {
  const n = v.replace(/\D/g, '');
  if (n.length <= 2) return n;
  if (n.length <= 5) return `${n.slice(0, 2)}.${n.slice(2)}`;
  if (n.length <= 8) return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5)}`;
  if (n.length <= 12) return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5, 8)}/${n.slice(8)}`;
  return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5, 8)}/${n.slice(8, 12)}-${n.slice(12, 14)}`;
};

export default function PartnerRegisterScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    companyName: '', cnpj: '', ownerName: '', email: '',
    phone: '', website: '', couponTitle: '', discount: '',
    validUntil: '', description: '',
  });

  const set = (key, raw) => {
    let val = raw;
    if (key === 'phone') val = formatPhone(raw);
    if (key === 'cnpj') val = formatCNPJ(raw);
    setForm(prev => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') { Alert.alert('Permissão necessária'); return; }
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const validate = () => {
    const e = {};
    if (!form.companyName.trim()) e.companyName = 'Obrigatório';
    if (!form.cnpj.trim()) e.cnpj = 'Obrigatório';
    else if (form.cnpj.replace(/\D/g, '').length !== 14) e.cnpj = 'CNPJ deve ter 14 dígitos';
    if (!form.ownerName.trim()) e.ownerName = 'Obrigatório';
    if (!form.email.trim()) e.email = 'Obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido';
    if (!form.phone.trim()) e.phone = 'Obrigatório';
    if (!form.couponTitle.trim()) e.couponTitle = 'Obrigatório';
    if (!form.discount) e.discount = 'Obrigatório';
    if (!form.validUntil) e.validUntil = 'Obrigatório';
    else if (new Date(form.validUntil) <= new Date()) e.validUntil = 'Data deve ser futura';
    return e;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    try {
      let imageUrl = '';
      if (imageUri) imageUrl = await uploadToImgBB(imageUri);
      await ApiService.registerPartner({ ...form, imageUrl, firebaseUid: user?.uid });
      setSubmitted(true);
    } catch (err) {
      Alert.alert('Erro', err.message || 'Erro ao enviar cadastro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <View style={styles.successPage}>
        <Ionicons name="checkmark-circle" size={72} color={theme.colors.primary} />
        <Text style={styles.successTitle}>Cadastro enviado!</Text>
        <Text style={styles.successText}>
          Recebemos sua solicitação de parceria. Nossa equipe irá analisar e entrar em contato em até 2 dias úteis.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Início')}>
          <Text style={styles.btnText}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const Field = ({ label, fieldKey, placeholder, keyboardType, maxLength, multiline }) => (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.textInput, multiline && styles.textArea, errors[fieldKey] && styles.inputError]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
        value={form[fieldKey]}
        onChangeText={v => set(fieldKey, v)}
      />
      {errors[fieldKey] ? <Text style={styles.errorText}>{errors[fieldKey]}</Text> : null}
    </View>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* Benefits header */}
        <View style={styles.hero}>
          <Ionicons name="business" size={36} color={theme.colors.white} />
          <Text style={styles.heroTitle}>Seja nosso Parceiro</Text>
          <Text style={styles.heroDesc}>Alcance milhares de clientes e gerencie seus cupons com facilidade</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="business-outline" size={16} /> Dados da Empresa
          </Text>

          <Field label="Nome da empresa *" fieldKey="companyName" placeholder="Ex: Bella Acessórios" />
          <Field label="CNPJ *" fieldKey="cnpj" placeholder="00.000.000/0000-00" keyboardType="numeric" maxLength={18} />
          <Field label="Nome do responsável *" fieldKey="ownerName" placeholder="Nome completo" />
          <Field label="E-mail corporativo *" fieldKey="email" placeholder="contato@empresa.com" keyboardType="email-address" />
          <Field label="Telefone *" fieldKey="phone" placeholder="(00) 00000-0000" keyboardType="phone-pad" maxLength={15} />

          {/* Image picker */}
          <View style={styles.field}>
            <Text style={styles.label}>Logo / Imagem (opcional)</Text>
            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.imagePreview} />
              ) : (
                <View style={styles.imagePlaceholder}>
                  <Ionicons name="image-outline" size={28} color={theme.colors.primary} />
                  <Text style={styles.imagePickerText}>Escolher imagem</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <Field label="Website" fieldKey="website" placeholder="https://www.suaempresa.com.br" keyboardType="url" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="pricetag-outline" size={16} /> Primeiro Cupom
          </Text>

          <Field label="Título do cupom *" fieldKey="couponTitle" placeholder="Ex: 20% OFF em toda a coleção" />

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Desconto (%) *</Text>
              <TextInput
                style={[styles.textInput, errors.discount && styles.inputError]}
                placeholder="Ex: 20"
                placeholderTextColor={theme.colors.gray}
                keyboardType="numeric"
                value={String(form.discount)}
                onChangeText={v => set('discount', v)}
              />
              {errors.discount ? <Text style={styles.errorText}>{errors.discount}</Text> : null}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Válido até *</Text>
              <TextInput
                style={[styles.textInput, errors.validUntil && styles.inputError]}
                placeholder="AAAA-MM-DD"
                placeholderTextColor={theme.colors.gray}
                value={form.validUntil}
                onChangeText={v => set('validUntil', v)}
              />
              {errors.validUntil ? <Text style={styles.errorText}>{errors.validUntil}</Text> : null}
            </View>
          </View>

          <Field label="Descrição (opcional)" fieldKey="description" placeholder="Detalhes do cupom..." multiline />
        </View>

        <TouchableOpacity style={[styles.btn, styles.submitBtn]} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator color={theme.colors.white} />
          ) : (
            <>
              <Ionicons name="send-outline" size={16} color={theme.colors.white} />
              <Text style={styles.btnText}>Enviar solicitação de parceria</Text>
            </>
          )}
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  hero: {
    backgroundColor: theme.colors.primary, alignItems: 'center',
    paddingTop: 32, paddingBottom: 32, paddingHorizontal: 24,
  },
  heroTitle: { fontSize: 22, fontWeight: '800', color: theme.colors.white, marginTop: 12, marginBottom: 8 },
  heroDesc: { fontSize: 13, color: 'rgba(255,255,255,0.85)', textAlign: 'center', lineHeight: 18 },
  section: { margin: 16, backgroundColor: theme.colors.white, borderRadius: theme.radius.lg, padding: theme.spacing.md, ...theme.shadow.sm },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: theme.colors.primary, marginBottom: 16 },
  field: { marginBottom: 14 },
  label: { fontSize: 13, fontWeight: '600', color: theme.colors.text, marginBottom: 6 },
  textInput: {
    borderWidth: 1.5, borderColor: theme.colors.border,
    borderRadius: theme.radius.md, paddingHorizontal: 14, height: 48,
    fontSize: 14, color: theme.colors.text, backgroundColor: theme.colors.lightGray,
  },
  textArea: { height: 80, textAlignVertical: 'top', paddingTop: 12 },
  inputError: { borderColor: theme.colors.error },
  errorText: { color: theme.colors.error, fontSize: 11, marginTop: 3 },
  row: { flexDirection: 'row', gap: 12 },
  imagePicker: { borderWidth: 1.5, borderColor: theme.colors.border, borderRadius: theme.radius.md, overflow: 'hidden' },
  imagePreview: { width: '100%', height: 140 },
  imagePlaceholder: {
    height: 100, justifyContent: 'center', alignItems: 'center', gap: 8,
    backgroundColor: theme.colors.lightGray,
  },
  imagePickerText: { fontSize: 13, color: theme.colors.primary, fontWeight: '600' },
  btn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md, height: 52,
  },
  submitBtn: { marginHorizontal: 16, marginBottom: 16 },
  btnText: { color: theme.colors.white, fontWeight: '700', fontSize: 15 },
  successPage: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32, gap: 16, backgroundColor: theme.colors.background },
  successTitle: { fontSize: 24, fontWeight: '800', color: theme.colors.text },
  successText: { fontSize: 14, color: theme.colors.textSecondary, textAlign: 'center', lineHeight: 20 },
});
