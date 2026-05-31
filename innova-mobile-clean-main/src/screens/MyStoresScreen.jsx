import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { theme } from '../theme';

const statusColor = (s) => {
  if (s === 'Aprovada') return '#4CAF50';
  if (s === 'Pendente') return '#FF9800';
  return theme.colors.error;
};

export default function MyStoresScreen() {
  const { userStores } = useAuth();
  const navigation = useNavigation();

  if (!userStores || userStores.length === 0) {
    return (
      <View style={styles.empty}>
        <Ionicons name="storefront-outline" size={56} color={theme.colors.primaryLight} />
        <Text style={styles.emptyTitle}>Nenhuma loja cadastrada</Text>
        <Text style={styles.emptyDesc}>Cadastre-se como parceiro para gerenciar suas lojas</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PartnerRegister')}>
          <Text style={styles.btnText}>Cadastrar parceria</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderStore = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MyStore', { id: item.id })} activeOpacity={0.85}>
      {item.image_url ? (
        <Image source={{ uri: item.image_url }} style={styles.storeImage} />
      ) : (
        <View style={styles.storePlaceholder}>
          <Text style={styles.placeholderLetter}>{item.name?.charAt(0).toUpperCase()}</Text>
        </View>
      )}
      <View style={styles.cardBody}>
        <Text style={styles.storeName}>{item.name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: statusColor(item.status) + '22' }]}>
          <View style={[styles.statusDot, { backgroundColor: statusColor(item.status) }]} />
          <Text style={[styles.statusText, { color: statusColor(item.status) }]}>{item.status}</Text>
        </View>
        {item.email ? <Text style={styles.storeEmail} numberOfLines={1}>{item.email}</Text> : null}
      </View>
      <Ionicons name="chevron-forward" size={20} color={theme.colors.gray} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={userStores}
      renderItem={renderStore}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 12 },
  card: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg, padding: 12, gap: 12,
    ...theme.shadow.sm,
  },
  storeImage: { width: 60, height: 60, borderRadius: theme.radius.md },
  storePlaceholder: {
    width: 60, height: 60, borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center', alignItems: 'center',
  },
  placeholderLetter: { fontSize: 24, fontWeight: '800', color: theme.colors.white },
  cardBody: { flex: 1 },
  storeName: { fontSize: 15, fontWeight: '700', color: theme.colors.text, marginBottom: 6 },
  statusBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start', marginBottom: 4 },
  statusDot: { width: 6, height: 6, borderRadius: 3 },
  statusText: { fontSize: 12, fontWeight: '700' },
  storeEmail: { fontSize: 12, color: theme.colors.textSecondary },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32, gap: 12, backgroundColor: theme.colors.background },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: theme.colors.text },
  emptyDesc: { fontSize: 14, color: theme.colors.textSecondary, textAlign: 'center' },
  btn: { backgroundColor: theme.colors.primary, borderRadius: theme.radius.md, paddingHorizontal: 24, paddingVertical: 12 },
  btnText: { color: theme.colors.white, fontWeight: '700' },
});
