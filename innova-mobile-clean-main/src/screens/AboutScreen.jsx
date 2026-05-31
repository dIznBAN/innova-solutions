import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Innova Solutions</Text>
        <Text style={styles.heroSubtitle}>A plataforma de cupons para semijoias</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nossa Missão</Text>
        <Text style={styles.body}>Conectar amantes de semijoias com as melhores lojas parceiras, oferecendo cupons exclusivos e promoções especiais para tornar o acesso a peças de qualidade ainda mais acessível.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O que oferecemos</Text>
        {[
          { icon: 'pricetag', text: 'Cupons exclusivos de desconto em lojas parceiras' },
          { icon: 'storefront', text: 'Rede curada de lojas de semijoias verificadas' },
          { icon: 'shield-checkmark', text: 'Plataforma segura com autenticação Firebase' },
          { icon: 'business', text: 'Painel completo para parceiros gerenciarem suas lojas' },
        ].map(item => (
          <View key={item.text} style={styles.featureRow}>
            <View style={styles.featureIcon}><Ionicons name={item.icon} size={20} color={theme.colors.primary} /></View>
            <Text style={styles.featureText}>{item.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <TouchableOpacity style={styles.contactRow} onPress={() => Linking.openURL('mailto:contato@innovasolutions.com.br')}>
          <Ionicons name="mail-outline" size={18} color={theme.colors.primary} />
          <Text style={styles.contactText}>contato@innovasolutions.com.br</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  hero: { backgroundColor: theme.colors.primary, padding: 40, alignItems: 'center' },
  heroTitle: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 8 },
  heroSubtitle: { fontSize: 15, color: 'rgba(255,255,255,0.85)', textAlign: 'center' },
  section: { margin: 16, backgroundColor: theme.colors.white, borderRadius: theme.radius.lg, padding: 16, ...require('../theme').theme.shadow.sm },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.primary, marginBottom: 12 },
  body: { fontSize: 14, color: theme.colors.textSecondary, lineHeight: 22 },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  featureIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: theme.colors.secondary, justifyContent: 'center', alignItems: 'center' },
  featureText: { flex: 1, fontSize: 13, color: theme.colors.textSecondary, lineHeight: 18 },
  contactRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8 },
  contactText: { fontSize: 14, color: theme.colors.primary, fontWeight: '600' },
});
