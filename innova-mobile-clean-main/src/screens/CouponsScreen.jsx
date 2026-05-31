import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity,
  Image, Modal, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import api from '../services/api';
import CouponModal from '../components/CouponModal';

const normalizeCoupons = (coupons, stores) => {
  const storeMap = {};
  stores.forEach(s => { storeMap[s.id] = s; });
  return coupons
    .filter(c => {
      const store = storeMap[c.store_id];
      return store && store.status === 'Aprovada' && new Date(c.valid_until) >= new Date();
    })
    .map(c => {
      const store = storeMap[c.store_id];
      return {
        id: c.id,
        storeName: store.name,
        discount: c.discount,
        image: c.image_url?.trim() || store.image_url?.trim() || null,
        website: store.website_url || null,
        description: c.description || '',
        title: c.title || '',
        validUntil: new Date(c.valid_until).toLocaleDateString('pt-BR'),
      };
    });
};

export default function CouponsScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allCoupons, setAllCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coupons, stores] = await Promise.all([api.getAllCoupons(), api.getAllStores()]);
        const normalized = normalizeCoupons(coupons, stores);
        setAllCoupons(normalized);
        setFilteredCoupons(normalized);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = allCoupons.filter(c =>
      c.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortBy === 'highest') filtered = [...filtered].sort((a, b) => b.discount - a.discount);
    if (sortBy === 'lowest') filtered = [...filtered].sort((a, b) => a.discount - b.discount);
    setFilteredCoupons(filtered);
  }, [searchTerm, sortBy, allCoupons]);

  const renderCoupon = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedCoupon(item)}
      activeOpacity={0.85}
    >
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.cardImage} />
      ) : (
        <View style={styles.cardPlaceholder}>
          <Text style={styles.placeholderLetter}>{item.storeName?.charAt(0).toUpperCase()}</Text>
        </View>
      )}
      <View style={styles.cardBody}>
        <Text style={styles.storeName} numberOfLines={1}>{item.storeName}</Text>
        {item.title ? <Text style={styles.couponTitle} numberOfLines={1}>{item.title}</Text> : null}
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}% OFF</Text>
        </View>
        <TouchableOpacity style={styles.detailsBtn} onPress={() => setSelectedCoupon(item)}>
          <Text style={styles.detailsBtnText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={theme.colors.gray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por loja ou cupom..."
            placeholderTextColor={theme.colors.gray}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {searchTerm ? (
            <TouchableOpacity onPress={() => setSearchTerm('')}>
              <Ionicons name="close-circle" size={18} color={theme.colors.gray} />
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setShowFilter(true)}>
          <Ionicons name="filter" size={18} color={sortBy ? theme.colors.white : theme.colors.primary} />
        </TouchableOpacity>
      </View>

      {sortBy ? (
        <TouchableOpacity style={styles.activeBadge} onPress={() => setSortBy('')}>
          <Text style={styles.activeBadgeText}>
            {sortBy === 'highest' ? 'Maior desconto' : 'Menor desconto'} ×
          </Text>
        </TouchableOpacity>
      ) : null}

      {loading ? (
        <ActivityIndicator color={theme.colors.primary} style={{ marginTop: 48 }} />
      ) : filteredCoupons.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="pricetag-outline" size={48} color={theme.colors.primaryLight} />
          <Text style={styles.emptyTitle}>Nenhum cupom encontrado</Text>
          <Text style={styles.emptyDesc}>Tente ajustar os filtros ou buscar por outro termo</Text>
        </View>
      ) : (
        <FlatList
          data={filteredCoupons}
          renderItem={renderCoupon}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Filter Modal */}
      <Modal visible={showFilter} transparent animationType="slide" onRequestClose={() => setShowFilter(false)}>
        <TouchableOpacity style={styles.filterOverlay} activeOpacity={1} onPress={() => setShowFilter(false)}>
          <View style={styles.filterPanel}>
            <Text style={styles.filterTitle}>Ordenar por</Text>
            {[
              { label: 'Maior desconto', value: 'highest' },
              { label: 'Menor desconto', value: 'lowest' },
            ].map(opt => (
              <TouchableOpacity
                key={opt.value}
                style={[styles.filterOption, sortBy === opt.value && styles.filterOptionActive]}
                onPress={() => { setSortBy(sortBy === opt.value ? '' : opt.value); setShowFilter(false); }}
              >
                <Text style={[styles.filterOptionText, sortBy === opt.value && styles.filterOptionTextActive]}>
                  {opt.label}
                </Text>
                {sortBy === opt.value ? <Ionicons name="checkmark" size={18} color={theme.colors.primary} /> : null}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.clearBtn} onPress={() => { setSortBy(''); setShowFilter(false); }}>
              <Text style={styles.clearBtnText}>Limpar filtros</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <CouponModal
        coupon={selectedCoupon}
        visible={!!selectedCoupon}
        onClose={() => setSelectedCoupon(null)}
      />
    </View>
  );
}

const CARD_W = (require('react-native').Dimensions.get('window').width - 48) / 2;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  searchRow: {
    flexDirection: 'row', gap: 10,
    paddingHorizontal: 16, paddingVertical: 12,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1, borderBottomColor: theme.colors.border,
  },
  searchBox: {
    flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8,
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.radius.md, paddingHorizontal: 12,
  },
  searchInput: { flex: 1, height: 40, fontSize: 14, color: theme.colors.text },
  filterBtn: {
    width: 44, height: 44, borderRadius: theme.radius.md,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center', alignItems: 'center',
  },
  activeBadge: {
    marginHorizontal: 16, marginTop: 8,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.full,
    paddingHorizontal: 12, paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  activeBadgeText: { color: theme.colors.primary, fontWeight: '600', fontSize: 12 },
  listContent: { padding: 16 },
  row: { gap: 16, marginBottom: 16 },
  card: {
    width: CARD_W, backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg, overflow: 'hidden',
    ...theme.shadow.sm,
  },
  cardImage: { width: '100%', height: 130 },
  cardPlaceholder: {
    width: '100%', height: 130,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center', alignItems: 'center',
  },
  placeholderLetter: { fontSize: 40, fontWeight: '800', color: theme.colors.white },
  cardBody: { padding: 10 },
  storeName: { fontSize: 13, fontWeight: '700', color: theme.colors.text, marginBottom: 2 },
  couponTitle: { fontSize: 11, color: theme.colors.textSecondary, marginBottom: 6 },
  discountBadge: {
    backgroundColor: theme.colors.secondary, borderRadius: 6,
    paddingHorizontal: 8, paddingVertical: 3,
    alignSelf: 'flex-start', marginBottom: 8,
  },
  discountText: { color: theme.colors.primaryDark, fontWeight: '800', fontSize: 12 },
  detailsBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm, paddingVertical: 7, alignItems: 'center',
  },
  detailsBtnText: { color: theme.colors.white, fontWeight: '700', fontSize: 12 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, marginTop: 48 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.text, marginTop: 16, marginBottom: 8 },
  emptyDesc: { fontSize: 14, color: theme.colors.textSecondary, textAlign: 'center' },
  filterOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
  filterPanel: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    padding: 24,
  },
  filterTitle: { fontSize: 17, fontWeight: '800', color: theme.colors.text, marginBottom: 16 },
  filterOption: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 14, paddingHorizontal: 16,
    borderRadius: theme.radius.md, marginBottom: 8,
    backgroundColor: theme.colors.lightGray,
  },
  filterOptionActive: { backgroundColor: theme.colors.secondary },
  filterOptionText: { fontSize: 15, color: theme.colors.text },
  filterOptionTextActive: { color: theme.colors.primary, fontWeight: '700' },
  clearBtn: { marginTop: 8, alignItems: 'center', paddingVertical: 12 },
  clearBtnText: { color: theme.colors.gray, fontWeight: '600' },
});
