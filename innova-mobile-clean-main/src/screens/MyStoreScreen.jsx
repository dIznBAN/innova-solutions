import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,
  Image, Alert, ActivityIndicator, Modal, FlatList, KeyboardAvoidingView, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
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
  if (!data.success) throw new Error('Upload falhou');
  return data.data.url;
};

const statusColor = (s) => {
  if (s === 'Aprovada') return '#4CAF50';
  if (s === 'Pendente') return '#FF9800';
  return theme.colors.error;
};

export default function MyStoreScreen() {
  const route = useRoute();
  const { id } = route.params;
  const { userStores, setUserStores } = useAuth();
  const userStore = userStores?.find(s => String(s.id) === String(id));

  const [isEditing, setIsEditing] = useState(false);
  const [storeLoading, setStoreLoading] = useState(false);
  const [storeForm, setStoreForm] = useState({ name: '', email: '', phone: '', website_url: '', image_url: '', imageUri: null });

  const [coupons, setCoupons] = useState([]);
  const [couponsLoading, setCouponsLoading] = useState(true);
  const [couponModal, setCouponModal] = useState(null);
  const [couponForm, setCouponForm] = useState({ title: '', discount: '', description: '', valid_until: '', image_url: '', imageUri: null });
  const [couponLoading, setCouponLoading] = useState(false);

  useEffect(() => {
    if (!userStore) return;
    setStoreForm({
      name: userStore.name || '',
      email: userStore.email || '',
      phone: userStore.phone || '',
      website_url: userStore.website_url || '',
      image_url: userStore.image_url || '',
      imageUri: null,
    });
    loadCoupons();
  }, [userStore]);

  const loadCoupons = async () => {
    try {
      setCouponsLoading(true);
      const data = await api.getCouponsByStore(userStore.id);
      setCoupons(data);
    } catch { }
    finally { setCouponsLoading(false); }
  };

  const pickStoreImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') return;
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.7 });
    if (!result.canceled) setStoreForm(prev => ({ ...prev, imageUri: result.assets[0].uri, image_url: result.assets[0].uri }));
  };

  const handleStoreSave = async () => {
    setStoreLoading(true);
    try {
      let imageUrl = storeForm.image_url;
      if (storeForm.imageUri) imageUrl = await uploadToImgBB(storeForm.imageUri);
      const updated = await api.updateStore(userStore.id, { name: storeForm.name, email: storeForm.email, phone: storeForm.phone, website_url: storeForm.website_url, image_url: imageUrl, status: userStore.status });
      setUserStores(prev => prev.map(s => s.id === userStore.id ? updated : s));
      setIsEditing(false);
      Alert.alert('Sucesso', 'Loja atualizada!');
    } catch { Alert.alert('Erro', 'Não foi possível atualizar a loja'); }
    finally { setStoreLoading(false); }
  };

  const openNewCoupon = () => {
    setCouponForm({ title: '', discount: '', description: '', valid_until: '', image_url: '', imageUri: null });
    setCouponModal('new');
  };

  const openEditCoupon = (coupon) => {
    setCouponForm({
      title: coupon.title || '',
      discount: String(coupon.discount || ''),
      description: coupon.description || '',
      valid_until: coupon.valid_until ? coupon.valid_until.split('T')[0] : '',
      image_url: coupon.image_url || '',
      imageUri: null,
    });
    setCouponModal(coupon);
  };

  const pickCouponImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') return;
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.7 });
    if (!result.canceled) setCouponForm(prev => ({ ...prev, imageUri: result.assets[0].uri, image_url: result.assets[0].uri }));
  };

  const handleCouponSave = async () => {
    if (!couponForm.title.trim()) { Alert.alert('Erro', 'Título é obrigatório'); return; }
    if (!couponForm.discount || couponForm.discount <= 0) { Alert.alert('Erro', 'Desconto inválido'); return; }
    if (!couponForm.valid_until) { Alert.alert('Erro', 'Data de validade é obrigatória'); return; }
    setCouponLoading(true);
    try {
      let imageUrl = couponForm.image_url;
      if (couponForm.imageUri) imageUrl = await uploadToImgBB(couponForm.imageUri);
      const payload = {
        store_id: userStore.id, title: couponForm.title,
        discount: parseFloat(couponForm.discount), description: couponForm.description,
        image_url: imageUrl || null,
        valid_from: new Date().toISOString(), valid_until: couponForm.valid_until + 'T23:59:59',
      };
      if (couponModal === 'new') {
        const created = await api.createCoupon(payload);
        setCoupons(prev => [created, ...prev]);
      } else {
        const updated = await api.updateCoupon(couponModal.id, payload);
        setCoupons(prev => prev.map(c => c.id === couponModal.id ? updated : c));
      }
      setCouponModal(null);
    } catch { Alert.alert('Erro', 'Não foi possível salvar o cupom'); }
    finally { setCouponLoading(false); }
  };

  const handleDeleteCoupon = (couponId) => {
    Alert.alert('Excluir cupom', 'Tem certeza?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir', style: 'destructive',
        onPress: async () => {
          try { await api.deleteCoupon(couponId); setCoupons(prev => prev.filter(c => c.id !== couponId)); }
          catch { Alert.alert('Erro', 'Não foi possível excluir o cupom'); }
        },
      },
    ]);
  };

  if (!userStore) return (
    <View style={styles.center}><ActivityIndicator color={theme.colors.primary} /></View>
  );

  const imageSource = storeForm.image_url ? { uri: storeForm.image_url } : null;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Store header */}
        <View style={styles.storeHeader}>
          {imageSource ? (
            <Image source={imageSource} style={styles.storeImage} />
          ) : (
            <View style={styles.storePlaceholder}>
              <Text style={styles.placeholderLetter}>{userStore.name?.charAt(0).toUpperCase()}</Text>
            </View>
          )}
          <View style={styles.storeInfo}>
            <Text style={styles.storeName}>{userStore.name}</Text>
            <View style={[styles.statusBadge, { backgroundColor: statusColor(userStore.status) + '22' }]}>
              <View style={[styles.statusDot, { backgroundColor: statusColor(userStore.status) }]} />
              <Text style={[styles.statusText, { color: statusColor(userStore.status) }]}>{userStore.status}</Text>
            </View>
          </View>
        </View>

        {userStore.status === 'Pendente' && (
          <View style={styles.pendingBanner}>
            <Ionicons name="time-outline" size={18} color="#FF9800" />
            <Text style={styles.pendingText}>Cadastro em análise. Nossa equipe retornará em breve.</Text>
          </View>
        )}

        {/* Store edit card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Informações da Loja</Text>
            {!isEditing ? (
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <Ionicons name="pencil-outline" size={20} color={theme.colors.primary} />
              </TouchableOpacity>
            ) : null}
          </View>

          {isEditing ? (
            <>
              <TouchableOpacity style={styles.imagePicker} onPress={pickStoreImage}>
                {storeForm.image_url ? (
                  <Image source={{ uri: storeForm.image_url }} style={styles.imagePreview} />
                ) : (
                  <View style={styles.imagePlaceholder}>
                    <Ionicons name="camera-outline" size={24} color={theme.colors.primary} />
                    <Text style={styles.imagePickerLabel}>Alterar imagem</Text>
                  </View>
                )}
              </TouchableOpacity>

              {[
                { label: 'Nome da loja *', key: 'name' },
                { label: 'E-mail', key: 'email', keyboardType: 'email-address' },
                { label: 'Telefone', key: 'phone', keyboardType: 'phone-pad' },
                { label: 'Website', key: 'website_url', keyboardType: 'url' },
              ].map(f => (
                <View key={f.key} style={styles.field}>
                  <Text style={styles.label}>{f.label}</Text>
                  <TextInput
                    style={styles.textInput}
                    value={storeForm[f.key]}
                    onChangeText={v => setStoreForm(prev => ({ ...prev, [f.key]: v }))}
                    keyboardType={f.keyboardType}
                    autoCapitalize="none"
                  />
                </View>
              ))}

              <View style={styles.btnRow}>
                <TouchableOpacity style={[styles.btn, { flex: 1 }]} onPress={handleStoreSave} disabled={storeLoading}>
                  {storeLoading ? <ActivityIndicator color={theme.colors.white} /> : <Text style={styles.btnText}>Salvar</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.secondaryBtn, { flex: 1 }]} onPress={() => setIsEditing(false)}>
                  <Text style={styles.secondaryBtnText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              {userStore.email ? <View style={styles.infoRow}><Ionicons name="mail-outline" size={15} color={theme.colors.gray} /><Text style={styles.infoText}>{userStore.email}</Text></View> : null}
              {userStore.phone ? <View style={styles.infoRow}><Ionicons name="call-outline" size={15} color={theme.colors.gray} /><Text style={styles.infoText}>{userStore.phone}</Text></View> : null}
              {userStore.website_url ? <View style={styles.infoRow}><Ionicons name="globe-outline" size={15} color={theme.colors.gray} /><Text style={styles.infoText}>{userStore.website_url}</Text></View> : null}
            </>
          )}
        </View>

        {/* Coupons */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Cupons ({coupons.length})</Text>
            <TouchableOpacity style={styles.addBtn} onPress={openNewCoupon}>
              <Ionicons name="add" size={18} color={theme.colors.white} />
              <Text style={styles.addBtnText}>Novo</Text>
            </TouchableOpacity>
          </View>

          {couponsLoading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : coupons.length === 0 ? (
            <View style={styles.emptyCoupons}>
              <Ionicons name="pricetag-outline" size={36} color={theme.colors.primaryLight} />
              <Text style={styles.emptyCouponsText}>Nenhum cupom cadastrado</Text>
            </View>
          ) : (
            coupons.map(coupon => (
              <View key={coupon.id} style={styles.couponItem}>
                <View style={styles.couponLeft}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{coupon.discount}% OFF</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.couponTitle} numberOfLines={1}>{coupon.title}</Text>
                    <Text style={styles.couponDate}>Válido até {new Date(coupon.valid_until).toLocaleDateString('pt-BR')}</Text>
                  </View>
                </View>
                <View style={styles.couponActions}>
                  <TouchableOpacity onPress={() => openEditCoupon(coupon)} style={styles.couponAction}>
                    <Ionicons name="pencil-outline" size={17} color={theme.colors.primary} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteCoupon(coupon.id)} style={styles.couponAction}>
                    <Ionicons name="trash-outline" size={17} color={theme.colors.error} />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>

      {/* Coupon Modal */}
      <Modal visible={couponModal !== null} animationType="slide" transparent onRequestClose={() => setCouponModal(null)}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{couponModal === 'new' ? 'Novo Cupom' : 'Editar Cupom'}</Text>
                <TouchableOpacity onPress={() => setCouponModal(null)}>
                  <Ionicons name="close" size={22} color={theme.colors.text} />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                {[
                  { label: 'Título *', key: 'title', placeholder: 'Ex: 20% OFF em toda a coleção' },
                  { label: 'Desconto (%) *', key: 'discount', placeholder: '20', keyboardType: 'numeric' },
                  { label: 'Válido até * (AAAA-MM-DD)', key: 'valid_until', placeholder: '2025-12-31' },
                  { label: 'Descrição', key: 'description', placeholder: 'Detalhes...', multiline: true },
                ].map(f => (
                  <View key={f.key} style={styles.field}>
                    <Text style={styles.label}>{f.label}</Text>
                    <TextInput
                      style={[styles.textInput, f.multiline && styles.textArea]}
                      placeholder={f.placeholder}
                      placeholderTextColor={theme.colors.gray}
                      keyboardType={f.keyboardType}
                      multiline={f.multiline}
                      value={couponForm[f.key]}
                      onChangeText={v => setCouponForm(prev => ({ ...prev, [f.key]: v }))}
                    />
                  </View>
                ))}

                <TouchableOpacity style={styles.imagePicker} onPress={pickCouponImage}>
                  {couponForm.image_url ? (
                    <Image source={{ uri: couponForm.image_url }} style={styles.imagePreview} />
                  ) : (
                    <View style={styles.imagePlaceholder}>
                      <Ionicons name="image-outline" size={22} color={theme.colors.primary} />
                      <Text style={styles.imagePickerLabel}>Imagem opcional</Text>
                    </View>
                  )}
                </TouchableOpacity>

                <View style={styles.btnRow}>
                  <TouchableOpacity style={[styles.btn, { flex: 1 }]} onPress={handleCouponSave} disabled={couponLoading}>
                    {couponLoading ? <ActivityIndicator color={theme.colors.white} /> : <Text style={styles.btnText}>Salvar</Text>}
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.secondaryBtn, { flex: 1 }]} onPress={() => setCouponModal(null)}>
                    <Text style={styles.secondaryBtnText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ height: 24 }} />
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  storeHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 16,
    backgroundColor: theme.colors.primary, padding: 20,
  },
  storeImage: { width: 70, height: 70, borderRadius: theme.radius.md },
  storePlaceholder: {
    width: 70, height: 70, borderRadius: theme.radius.md,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center', alignItems: 'center',
  },
  placeholderLetter: { fontSize: 28, fontWeight: '800', color: theme.colors.white },
  storeInfo: { flex: 1 },
  storeName: { fontSize: 18, fontWeight: '800', color: theme.colors.white, marginBottom: 8 },
  statusBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start' },
  statusDot: { width: 7, height: 7, borderRadius: 4 },
  statusText: { fontSize: 12, fontWeight: '700' },
  pendingBanner: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: '#FFF8E1', borderLeftWidth: 4, borderLeftColor: '#FF9800',
    padding: 14, margin: 16, borderRadius: theme.radius.md,
  },
  pendingText: { flex: 1, fontSize: 13, color: '#E65100', lineHeight: 18 },
  card: { margin: 16, marginBottom: 0, backgroundColor: theme.colors.white, borderRadius: theme.radius.lg, padding: theme.spacing.md, ...theme.shadow.sm },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.text },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  infoText: { fontSize: 13, color: theme.colors.textSecondary, flex: 1 },
  field: { marginBottom: 12 },
  label: { fontSize: 13, fontWeight: '600', color: theme.colors.text, marginBottom: 6 },
  textInput: { borderWidth: 1.5, borderColor: theme.colors.border, borderRadius: theme.radius.md, paddingHorizontal: 14, height: 48, fontSize: 14, color: theme.colors.text, backgroundColor: theme.colors.lightGray },
  textArea: { height: 80, textAlignVertical: 'top', paddingTop: 12 },
  imagePicker: { borderWidth: 1.5, borderColor: theme.colors.border, borderRadius: theme.radius.md, overflow: 'hidden', marginBottom: 14 },
  imagePreview: { width: '100%', height: 130 },
  imagePlaceholder: { height: 80, justifyContent: 'center', alignItems: 'center', gap: 6, backgroundColor: theme.colors.lightGray },
  imagePickerLabel: { fontSize: 13, color: theme.colors.primary, fontWeight: '600' },
  btnRow: { flexDirection: 'row', gap: 10, marginTop: 8 },
  btn: { backgroundColor: theme.colors.primary, borderRadius: theme.radius.md, height: 48, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: theme.colors.white, fontWeight: '700', fontSize: 15 },
  secondaryBtn: { borderWidth: 1.5, borderColor: theme.colors.border, borderRadius: theme.radius.md, height: 48, alignItems: 'center', justifyContent: 'center' },
  secondaryBtnText: { color: theme.colors.textSecondary, fontWeight: '600', fontSize: 15 },
  addBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: theme.colors.primary, borderRadius: theme.radius.sm, paddingHorizontal: 12, paddingVertical: 6 },
  addBtnText: { color: theme.colors.white, fontWeight: '700', fontSize: 13 },
  couponItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  couponLeft: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 12 },
  discountBadge: { backgroundColor: theme.colors.secondary, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4, alignSelf: 'flex-start' },
  discountText: { color: theme.colors.primaryDark, fontWeight: '800', fontSize: 13 },
  couponTitle: { fontSize: 13, fontWeight: '600', color: theme.colors.text },
  couponDate: { fontSize: 11, color: theme.colors.textSecondary, marginTop: 2 },
  couponActions: { flexDirection: 'row', gap: 8 },
  couponAction: { width: 34, height: 34, borderRadius: theme.radius.sm, backgroundColor: theme.colors.lightGray, justifyContent: 'center', alignItems: 'center' },
  emptyCoupons: { alignItems: 'center', paddingVertical: 24, gap: 8 },
  emptyCouponsText: { fontSize: 14, color: theme.colors.textSecondary },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalBox: { backgroundColor: theme.colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, maxHeight: '85%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 18, fontWeight: '800', color: theme.colors.text },
});
