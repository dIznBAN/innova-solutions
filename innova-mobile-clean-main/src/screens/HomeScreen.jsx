import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  Image, ActivityIndicator, Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import api from '../services/api';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCoupons, setFeaturedCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coupons, stores] = await Promise.all([api.getAllCoupons(), api.getAllStores()]);
        const storeMap = {};
        stores.forEach(s => { storeMap[s.id] = s; });
        const normalized = coupons
          .filter(c => {
            const store = storeMap[c.store_id];
            return store && store.status === 'Aprovada' && new Date(c.valid_until) >= new Date();
          })
          .slice(0, 6)
          .map(c => {
            const store = storeMap[c.store_id];
            return {
              id: c.id,
              storeName: store.name,
              discount: c.discount,
              image: store.image_url?.trim() || null,
              title: c.title || '',
            };
          });
        setFeaturedCoupons(normalized);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Innova Solutions</Text>
        <Text style={styles.heroSubtitle}>
          Encontre cupons exclusivos para suas semijoias favoritas!
        </Text>
        <Text style={styles.heroDesc}>
          Promoções diárias das melhores lojas do segmento
        </Text>
        <TouchableOpacity
          style={styles.heroButton}
          onPress={() => navigation.navigate('Cupons')}
        >
          <Ionicons name="pricetag" size={18} color={theme.colors.white} />
          <Text style={styles.heroButtonText}>Ver Todos os Cupons</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Coupons */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cupons em Destaque</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cupons')}>
            <Text style={styles.seeAll}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator color={theme.colors.primary} style={{ marginTop: 24 }} />
        ) : featuredCoupons.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum cupom disponível no momento</Text>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {featuredCoupons.map(coupon => (
              <TouchableOpacity
                key={coupon.id}
                style={styles.couponCard}
                onPress={() => navigation.navigate('Cupons')}
                activeOpacity={0.85}
              >
                {coupon.image ? (
                  <Image source={{ uri: coupon.image }} style={styles.couponImage} />
                ) : (
                  <View style={styles.couponPlaceholder}>
                    <Text style={styles.placeholderLetter}>
                      {coupon.storeName?.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                )}
                <View style={styles.couponInfo}>
                  <Text style={styles.couponStore} numberOfLines={1}>{coupon.storeName}</Text>
                  {coupon.title ? (
                    <Text style={styles.couponTitle} numberOfLines={1}>{coupon.title}</Text>
                  ) : null}
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{coupon.discount}% OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>

      {/* Quick Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Navegação Rápida</Text>
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Cupons')}>
            <View style={styles.quickLinkIcon}>
              <Ionicons name="pricetag" size={24} color={theme.colors.primary} />
            </View>
            <Text style={styles.quickLinkText}>Ver Cupons</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Meus Cupons')}>
            <View style={styles.quickLinkIcon}>
              <Ionicons name="bookmark" size={24} color={theme.colors.primary} />
            </View>
            <Text style={styles.quickLinkText}>Meus Cupons</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  hero: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.xxl,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.white,
    letterSpacing: 1,
    marginBottom: theme.spacing.sm,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  heroDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  heroButtonText: { color: theme.colors.white, fontWeight: '700', fontSize: 16 },
  section: { padding: theme.spacing.md, marginTop: theme.spacing.md },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.md },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.text },
  seeAll: { fontSize: 14, color: theme.colors.primary, fontWeight: '600' },
  emptyText: { color: theme.colors.gray, textAlign: 'center', marginTop: 8 },
  horizontalScroll: { marginHorizontal: -theme.spacing.md, paddingHorizontal: theme.spacing.md },
  couponCard: {
    width: 160,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    marginRight: theme.spacing.md,
    overflow: 'hidden',
    ...theme.shadow.sm,
  },
  couponImage: { width: '100%', height: 110 },
  couponPlaceholder: {
    width: '100%', height: 110,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center', alignItems: 'center',
  },
  placeholderLetter: { fontSize: 36, fontWeight: '800', color: theme.colors.white },
  couponInfo: { padding: theme.spacing.sm },
  couponStore: { fontSize: 13, fontWeight: '700', color: theme.colors.text, marginBottom: 2 },
  couponTitle: { fontSize: 11, color: theme.colors.textSecondary, marginBottom: 6 },
  discountBadge: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.sm,
    paddingHorizontal: 8, paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  discountText: { color: theme.colors.primaryDark, fontWeight: '800', fontSize: 13 },
  quickLinks: { flexDirection: 'row', gap: theme.spacing.md },
  quickLink: {
    flex: 1, alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    ...theme.shadow.sm,
  },
  quickLinkIcon: {
    width: 48, height: 48,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.full,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  quickLinkText: { fontSize: 12, fontWeight: '600', color: theme.colors.text, textAlign: 'center' },
});
