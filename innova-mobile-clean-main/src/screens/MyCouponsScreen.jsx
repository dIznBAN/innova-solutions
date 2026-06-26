import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
  Image, Alert, ActivityIndicator, Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import { theme } from '../theme';
import api from '../services/api';

export default function MyCouponsScreen() {
  const [myCoupons, setMyCoupons] = useState([]);
  const [stores, setStores] = useState({});
  const [loading, setLoading] = useState(true);
  const [qrCoupon, setQrCoupon] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [coupons, allStores] = await Promise.all([api.getMyCoupons(), api.getAllStores()]);
      const storeMap = {};
      allStores.forEach(s => { storeMap[s.id] = s; });
      setStores(storeMap);
      setMyCoupons(coupons.filter(c => storeMap[c.store_id]?.status === 'Aprovada'));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(useCallback(() => { fetchData(); }, []));

  const handleUseCoupon = (coupon) => {
    setQrCoupon(coupon);
  };

  const handleRemoveCoupon = (couponId) => {
    Alert.alert('Remover cupom', 'Tem certeza que deseja remover este cupom?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover', style: 'destructive',
        onPress: async () => {
          try {
            await api.removeUserCoupon(couponId);
            setMyCoupons(prev => prev.filter(c => c.id !== couponId));
          } catch (e) {
            Alert.alert('Erro', 'Não foi possível remover o cupom');
          }
        },
      },
    ]);
  };

  const renderCoupon = ({ item }) => {
    const store = stores[item.store_id] || {};
    const image = item.image_url?.trim() || store.image_url?.trim() || null;
    const expired = new Date(item.valid_until) < new Date();
    const validUntil = new Date(item.valid_until).toLocaleDateString('pt-BR');

    return (
      <View style={styles.card}>
        {image ? (
          <Image source={{ uri: image }} style={styles.cardImage} />
        ) : (
          <View style={styles.cardPlaceholder}>
            <Text style={styles.placeholderLetter}>{store.name?.charAt(0).toUpperCase()}</Text>
          </View>
        )}
        <View style={styles.cardBody}>
          <Text style={styles.storeName} numberOfLines={1}>{store.name || 'Loja'}</Text>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}% OFF</Text>
          </View>
          {item.description ? (
            <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
          ) : null}
          <View style={styles.validity}>
            <Ionicons name="time-outline" size={13} color={expired ? theme.colors.error : theme.colors.textSecondary} />
            <Text style={[styles.validityText, expired && styles.expiredText]}>
              {expired ? `Expirado em ${validUntil}` : `Válido até ${validUntil}`}
            </Text>
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[styles.useBtn, expired && styles.useBtnDisabled]}
              onPress={() => handleUseCoupon(item)}
              disabled={expired}
            >
              <Ionicons name="open-outline" size={14} color={expired ? theme.colors.gray : theme.colors.white} />
              <Text style={[styles.useBtnText, expired && styles.useBtnTextDisabled]}>
                {expired ? 'Expirado' : 'Usar Cupom'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeBtn} onPress={() => handleRemoveCoupon(item.id)}>
              <Ionicons name="trash-outline" size={16} color={theme.colors.error} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  if (loading) return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );

  const qrValue = qrCoupon
    ? `INNOVA|COUPON:${qrCoupon.id}|STORE:${qrCoupon.store_id}|DISCOUNT:${qrCoupon.discount}%|VALID:${new Date(qrCoupon.valid_until).toLocaleDateString('pt-BR')}`
    : 'INNOVA';

  return (
    <View style={styles.container}>
      {myCoupons.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="bookmark-outline" size={56} color={theme.colors.primaryLight} />
          <Text style={styles.emptyTitle}>Nenhum cupom salvo</Text>
          <Text style={styles.emptyDesc}>Explore os cupons disponíveis e salve os que quiser usar</Text>
        </View>
      ) : (
        <FlatList
          data={myCoupons}
          renderItem={renderCoupon}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Modal visible={!!qrCoupon} transparent animationType="fade" onRequestClose={() => setQrCoupon(null)}>
        <View style={styles.qrOverlay}>
          <View style={styles.qrBox}>
            <Text style={styles.qrTitle}>Apresente ao vendedor</Text>
            <Text style={styles.qrStoreName}>{stores[qrCoupon?.store_id]?.name}</Text>
            <View style={styles.qrDiscount}>
              <Text style={styles.qrDiscountText}>{qrCoupon?.discount}% OFF</Text>
            </View>
            <View style={styles.qrWrapper}>
              <QRCode value={qrValue} size={200} color={theme.colors.primaryDark} />
            </View>
            <Text style={styles.qrHint}>Válido até {qrCoupon ? new Date(qrCoupon.valid_until).toLocaleDateString('pt-BR') : ''}</Text>
            <TouchableOpacity style={styles.qrClose} onPress={() => setQrCoupon(null)}>
              <Text style={styles.qrCloseText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listContent: { padding: 16, gap: 16 },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    ...theme.shadow.sm,
    flexDirection: 'row',
  },
  cardImage: { width: 100, height: 120 },
  cardPlaceholder: {
    width: 100, height: 120,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center', alignItems: 'center',
  },
  placeholderLetter: { fontSize: 32, fontWeight: '800', color: theme.colors.white },
  cardBody: { flex: 1, padding: 12 },
  storeName: { fontSize: 15, fontWeight: '700', color: theme.colors.text, marginBottom: 6 },
  discountBadge: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3,
    alignSelf: 'flex-start', marginBottom: 6,
  },
  discountText: { color: theme.colors.primaryDark, fontWeight: '800', fontSize: 14 },
  description: { fontSize: 12, color: theme.colors.textSecondary, lineHeight: 17, marginBottom: 8 },
  validity: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 10 },
  validityText: { fontSize: 11, color: theme.colors.textSecondary },
  expiredText: { color: theme.colors.error },
  btnRow: { flexDirection: 'row', gap: 8 },
  useBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm, paddingVertical: 8,
  },
  useBtnDisabled: { backgroundColor: theme.colors.lightGray },
  useBtnText: { color: theme.colors.white, fontWeight: '700', fontSize: 12 },
  useBtnTextDisabled: { color: theme.colors.gray },
  removeBtn: {
    width: 36, height: 36, borderRadius: theme.radius.sm,
    borderWidth: 1.5, borderColor: theme.colors.error,
    justifyContent: 'center', alignItems: 'center',
  },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: theme.colors.text, marginTop: 16, marginBottom: 8 },
  emptyDesc: { fontSize: 14, color: theme.colors.textSecondary, textAlign: 'center', lineHeight: 20 },
  qrOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', padding: 24 },
  qrBox: {
    backgroundColor: theme.colors.white,
    borderRadius: 24, padding: 28,
    alignItems: 'center', width: '100%',
    ...theme.shadow.sm,
  },
  qrTitle: { fontSize: 18, fontWeight: '800', color: theme.colors.text, marginBottom: 4 },
  qrStoreName: { fontSize: 15, color: theme.colors.textSecondary, marginBottom: 12 },
  qrDiscount: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20, paddingHorizontal: 20, paddingVertical: 6,
    marginBottom: 20,
  },
  qrDiscountText: { color: theme.colors.primaryDark, fontWeight: '800', fontSize: 18 },
  qrWrapper: {
    padding: 16, backgroundColor: '#fff',
    borderRadius: 16, borderWidth: 2,
    borderColor: theme.colors.secondary, marginBottom: 16,
  },
  qrHint: { fontSize: 13, color: theme.colors.textSecondary, marginBottom: 20 },
  qrClose: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12, paddingVertical: 12, paddingHorizontal: 40,
  },
  qrCloseText: { color: theme.colors.white, fontWeight: '700', fontSize: 15 },
});
