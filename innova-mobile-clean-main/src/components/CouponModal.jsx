import React from 'react';
import {
  View, Text, Modal, StyleSheet, TouchableOpacity,
  Image, ScrollView, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';

export default function CouponModal({ coupon, visible, onClose }) {
  const navigation = useNavigation();
  const { isAuthenticated } = useAuth();

  if (!coupon) return null;

  const handleUseOffer = async () => {
    if (!isAuthenticated) {
      onClose();
      navigation.navigate('Auth');
      return;
    }
    try {
      await api.saveUserCoupon(coupon.id);
    } catch (e) {
      // already saved, ignore
    }
    onClose();
    navigation.navigate('Meus Cupons');
  };

  const handleOpenStore = () => {
    if (coupon.website && coupon.website !== '#') {
      Linking.openURL(coupon.website);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={22} color={theme.colors.text} />
          </TouchableOpacity>

          {coupon.image ? (
            <Image source={{ uri: coupon.image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderLetter}>
                {coupon.storeName?.charAt(0).toUpperCase()}
              </Text>
            </View>
          )}

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.storeName}>{coupon.storeName}</Text>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{coupon.discount}% OFF</Text>
            </View>

            {coupon.title ? (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{coupon.title}</Text>
              </View>
            ) : null}

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Descrição da Oferta</Text>
              <Text style={styles.sectionText}>
                {coupon.description ||
                  `Aproveite ${coupon.discount}% de desconto em toda a loja ${coupon.storeName}.`}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Como Usar</Text>
              {[
                'Toque em "Aproveitar Oferta" para salvar o cupom',
                'Acesse a loja pelo link disponível',
                'O desconto será aplicado no checkout',
                'Finalize sua compra normalmente',
              ].map((item, i) => (
                <View key={i} style={styles.ruleItem}>
                  <View style={styles.ruleDot} />
                  <Text style={styles.ruleText}>{item}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Termos e Condições</Text>
              {[
                `Oferta válida até ${coupon.validUntil}`,
                'Não cumulativo com outras promoções',
                'Válido apenas para compras online',
                'Sujeito à disponibilidade de estoque',
              ].map((item, i) => (
                <View key={i} style={styles.ruleItem}>
                  <View style={styles.ruleDot} />
                  <Text style={styles.ruleText}>{item}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.mainBtn} onPress={handleUseOffer}>
              <Ionicons name="bookmark" size={18} color={theme.colors.white} />
              <Text style={styles.mainBtnText}>Aproveitar Oferta</Text>
            </TouchableOpacity>

            {coupon.website && coupon.website !== '#' ? (
              <TouchableOpacity style={styles.secondaryBtn} onPress={handleOpenStore}>
                <Ionicons name="open-outline" size={16} color={theme.colors.primary} />
                <Text style={styles.secondaryBtnText}>Visitar Loja</Text>
              </TouchableOpacity>
            ) : null}

            <View style={{ height: 24 }} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    maxHeight: '88%',
    ...theme.shadow.lg,
  },
  closeBtn: {
    position: 'absolute', top: 12, right: 16, zIndex: 10,
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.radius.full, padding: 6,
  },
  image: { width: '100%', height: 180, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  placeholder: {
    width: '100%', height: 180, borderTopLeftRadius: 24, borderTopRightRadius: 24,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center', alignItems: 'center',
  },
  placeholderLetter: { fontSize: 56, fontWeight: '800', color: theme.colors.white },
  content: { padding: theme.spacing.md },
  storeName: { fontSize: 20, fontWeight: '800', color: theme.colors.text, marginBottom: 8 },
  discountBadge: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.sm,
    paddingHorizontal: 12, paddingVertical: 6,
    alignSelf: 'flex-start', marginBottom: 16,
  },
  discountText: { color: theme.colors.primaryDark, fontWeight: '800', fontSize: 18 },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.text },
  sectionLabel: { fontSize: 13, fontWeight: '700', color: theme.colors.primary, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  sectionText: { fontSize: 14, color: theme.colors.textSecondary, lineHeight: 20 },
  ruleItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 6 },
  ruleDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: theme.colors.primary, marginTop: 6 },
  ruleText: { flex: 1, fontSize: 13, color: theme.colors.textSecondary, lineHeight: 20 },
  mainBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 14, marginBottom: 10,
  },
  mainBtnText: { color: theme.colors.white, fontWeight: '700', fontSize: 16 },
  secondaryBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    borderWidth: 1.5, borderColor: theme.colors.primary,
    borderRadius: theme.radius.md, paddingVertical: 12,
  },
  secondaryBtnText: { color: theme.colors.primary, fontWeight: '600', fontSize: 15 },
});
