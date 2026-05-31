import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
  Image, Alert, ActivityIndicator, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { theme } from '../theme';
import api from '../services/api';

export default function MyCouponsScreen() {
  const [myCoupons, setMyCoupons] = useState([]);
  const [stores, setStores] = useState({});
  const [loading, setLoading] = useState(true);

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
    const store = stores[coupon.store_id];
    if (store?.website_url) Linking.openURL(store.website_url);
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
});
