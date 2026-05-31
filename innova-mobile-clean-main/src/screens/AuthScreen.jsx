import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ScrollView, ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform,
} from 'react-native';
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  updateProfile, sendEmailVerification,
} from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebase';
import api from '../services/api';
import { useAuth } from '../hooks/useAuth';
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

export default function AuthScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('login');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  if (user) {
    return (
      <View style={styles.loggedIn}>
        <Ionicons name="checkmark-circle" size={64} color={theme.colors.primary} />
        <Text style={styles.loggedInText}>Você já está logado!</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const set = (key, val) => {
    setForm(prev => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const pickPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') { Alert.alert('Permissão necessária', 'Precisamos acessar sua galeria'); return; }
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
    if (!result.canceled) setProfilePhoto(result.assets[0].uri);
  };

  const validate = () => {
    const e = {};
    if (!form.email) e.email = 'E-mail é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'E-mail inválido';
    if (!form.password) e.password = 'Senha é obrigatória';
    if (activeTab === 'register') {
      if (!form.name) e.name = 'Nome é obrigatório';
      if (form.password && form.password.length < 8) e.password = 'Mínimo 8 caracteres';
      if (!form.confirmPassword) e.confirmPassword = 'Confirme sua senha';
      else if (form.password !== form.confirmPassword) e.confirmPassword = 'Senhas não coincidem';
    }
    return e;
  };

  const handleSubmit = async () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true); setErrors({}); setSuccessMsg('');
    try {
      if (activeTab === 'login') {
        const result = await signInWithEmailAndPassword(auth, form.email, form.password);
        if (!result.user.emailVerified) {
          await auth.signOut();
          setErrors({ general: 'Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada.' });
          return;
        }
        navigation.goBack();
      } else {
        const { user: newUser } = await createUserWithEmailAndPassword(auth, form.email, form.password);
        let photoURL = null;
        if (profilePhoto) photoURL = await uploadToImgBB(profilePhoto);
        await updateProfile(newUser, { displayName: form.name, photoURL });
        const token = await newUser.getIdToken();
        await api.createUserWithToken(token, newUser.uid, form.name, form.email, photoURL).catch((err) => {
          if (!err.message?.includes('já cadastrado')) throw err;
        });
        await sendEmailVerification(newUser);
        await auth.signOut();
        setSuccessMsg('Conta criada! Verifique seu e-mail para confirmar antes de entrar.');
        setActiveTab('login');
        setForm({ name: '', email: '', password: '', confirmPassword: '' });
        setProfilePhoto(null);
      }
    } catch (error) {
      const msgs = {
        'auth/user-not-found': 'Usuário não encontrado',
        'auth/wrong-password': 'Senha incorreta',
        'auth/email-already-in-use': 'E-mail já cadastrado',
        'auth/invalid-credential': 'E-mail ou senha incorretos',
        'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde',
      };
      setErrors({ general: msgs[error.code] || error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View style={styles.logoArea}>
          <Text style={styles.logo}>Innova Solutions</Text>
        </View>

        <View style={styles.card}>
          {/* Tabs */}
          <View style={styles.tabs}>
            {['login', 'register'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => { setActiveTab(tab); setErrors({}); setSuccessMsg(''); }}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab === 'login' ? 'Entrar' : 'Criar Conta'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {successMsg ? <Text style={styles.successMsg}>{successMsg}</Text> : null}
          {errors.general ? <Text style={styles.errorMsg}>{errors.general}</Text> : null}

          {/* Register photo picker */}
          {activeTab === 'register' && (
            <TouchableOpacity style={styles.photoPicker} onPress={pickPhoto}>
              {profilePhoto ? (
                <Image source={{ uri: profilePhoto }} style={styles.photoPreview} />
              ) : (
                <View style={styles.photoPlaceholder}>
                  <Ionicons name="camera" size={28} color={theme.colors.primary} />
                </View>
              )}
              <Text style={styles.photoLabel}>
                {profilePhoto ? 'Trocar foto (opcional)' : 'Adicionar foto (opcional)'}
              </Text>
            </TouchableOpacity>
          )}

          {/* Name field (register only) */}
          {activeTab === 'register' && (
            <View style={styles.field}>
              <View style={styles.inputRow}>
                <Ionicons name="person-outline" size={18} color={theme.colors.gray} />
                <TextInput
                  style={styles.input}
                  placeholder="Nome completo"
                  placeholderTextColor={theme.colors.gray}
                  value={form.name}
                  onChangeText={v => set('name', v)}
                />
              </View>
              {errors.name ? <Text style={styles.fieldError}>{errors.name}</Text> : null}
            </View>
          )}

          {/* Email */}
          <View style={styles.field}>
            <View style={[styles.inputRow, errors.email && styles.inputRowError]}>
              <Ionicons name="mail-outline" size={18} color={theme.colors.gray} />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={theme.colors.gray}
                keyboardType="email-address"
                autoCapitalize="none"
                value={form.email}
                onChangeText={v => set('email', v)}
              />
            </View>
            {errors.email ? <Text style={styles.fieldError}>{errors.email}</Text> : null}
          </View>

          {/* Password */}
          <View style={styles.field}>
            <View style={[styles.inputRow, errors.password && styles.inputRowError]}>
              <Ionicons name="lock-closed-outline" size={18} color={theme.colors.gray} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={theme.colors.gray}
                secureTextEntry={!showPassword}
                value={form.password}
                onChangeText={v => set('password', v)}
              />
              <TouchableOpacity onPress={() => setShowPassword(p => !p)}>
                <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={18} color={theme.colors.gray} />
              </TouchableOpacity>
            </View>
            {errors.password ? <Text style={styles.fieldError}>{errors.password}</Text> : null}
          </View>

          {/* Confirm password */}
          {activeTab === 'register' && (
            <View style={styles.field}>
              <View style={[styles.inputRow, errors.confirmPassword && styles.inputRowError]}>
                <Ionicons name="lock-closed-outline" size={18} color={theme.colors.gray} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirmar senha"
                  placeholderTextColor={theme.colors.gray}
                  secureTextEntry={!showConfirm}
                  value={form.confirmPassword}
                  onChangeText={v => set('confirmPassword', v)}
                />
                <TouchableOpacity onPress={() => setShowConfirm(p => !p)}>
                  <Ionicons name={showConfirm ? 'eye-off-outline' : 'eye-outline'} size={18} color={theme.colors.gray} />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword ? <Text style={styles.fieldError}>{errors.confirmPassword}</Text> : null}
            </View>
          )}

          {activeTab === 'login' && (
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.btn} onPress={handleSubmit} disabled={loading}>
            {loading ? (
              <ActivityIndicator color={theme.colors.white} />
            ) : (
              <Text style={styles.btnText}>{activeTab === 'login' ? 'Entrar' : 'Criar Conta'}</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  logoArea: {
    backgroundColor: theme.colors.primary,
    paddingTop: 48, paddingBottom: 32, alignItems: 'center',
  },
  logo: { fontSize: 26, fontWeight: '800', color: theme.colors.white, letterSpacing: 1 },
  card: {
    margin: 16, backgroundColor: theme.colors.white,
    borderRadius: theme.radius.xl, padding: theme.spacing.lg,
    ...theme.shadow.md,
  },
  tabs: { flexDirection: 'row', backgroundColor: theme.colors.lightGray, borderRadius: theme.radius.md, marginBottom: 20, padding: 4 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: theme.radius.sm },
  tabActive: { backgroundColor: theme.colors.white, ...theme.shadow.sm },
  tabText: { fontSize: 14, fontWeight: '600', color: theme.colors.gray },
  tabTextActive: { color: theme.colors.primary },
  successMsg: { backgroundColor: '#E6F4EA', color: '#2E7D32', padding: 12, borderRadius: theme.radius.md, marginBottom: 12, fontSize: 13, textAlign: 'center' },
  errorMsg: { backgroundColor: '#FFF0F0', color: theme.colors.error, padding: 12, borderRadius: theme.radius.md, marginBottom: 12, fontSize: 13, textAlign: 'center' },
  photoPicker: { alignItems: 'center', marginBottom: 16 },
  photoPreview: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
  photoPlaceholder: {
    width: 80, height: 80, borderRadius: 40, marginBottom: 8,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: theme.colors.primaryLight, borderStyle: 'dashed',
  },
  photoLabel: { fontSize: 13, color: theme.colors.primary, fontWeight: '600' },
  field: { marginBottom: 14 },
  inputRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    borderWidth: 1.5, borderColor: theme.colors.border,
    borderRadius: theme.radius.md, paddingHorizontal: 14, height: 50,
    backgroundColor: theme.colors.lightGray,
  },
  inputRowError: { borderColor: theme.colors.error },
  input: { flex: 1, fontSize: 15, color: theme.colors.text },
  fieldError: { color: theme.colors.error, fontSize: 12, marginTop: 4, marginLeft: 4 },
  forgotPassword: { color: theme.colors.primary, textAlign: 'right', fontSize: 13, fontWeight: '600', marginBottom: 16 },
  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md, height: 50,
    alignItems: 'center', justifyContent: 'center', marginTop: 4,
  },
  btnText: { color: theme.colors.white, fontWeight: '700', fontSize: 16 },
  loggedIn: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  loggedInText: { fontSize: 18, fontWeight: '700', color: theme.colors.text },
});
