import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, StyleSheet, TextInput,
  TouchableOpacity, Image, ActivityIndicator, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import api from '../services/api';

export default function StoresScreen() {
  const [allStores, setAllStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getAllStores()
      .then(stores => {
        const approved = stores.filter(s => s.status === 'Aprovada');
        setAllStores(approved);
        setFilteredStores(approved);
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFilteredStores(allStores.filter(s =>
      s.name?.toLowerCase().includes(term) || s.description?.toLowerCase().includes(term)
    ));
  }, [searchTerm, allStores]);

  const renderStore = ({ item }) => (
    <View style={styles.card}>
      {item.image_url ? (
        <Image source={{ uri: item.image_url }} style={styles.storeImage} />
      ) : (
        <View style={styles.storePlaceholder}>
          <Text style={styles.placeholderLetter}>{item.name?.charAt(0).toUpperCase()}</Text>
        </View>
      )}
      <View style={styles.cardBody}>
        <Text style={styles.storeName}>{item.name}</Text>
        {item.description ? (
          <Text style={styles.storeDesc} numberOfLines={2}>{item.description}</Text>
        ) : null}
        {item.website_url ? (
          <TouchableOpacity
            style={styles.visitBtn}
            onPress={() => Linking.openURL(item.website_url)}
          >
            <Ionicons name="open-outline" size={14} color={theme.colors.primary} />
            <Text style={styles.visitBtnText}>Visitar Loja</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <Ionicons name="search" size={18} color={theme.colors.gray} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome da loja..."
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

      {loading ? (
        <ActivityIndicator color={theme.colors.primary} style={{ marginTop: 48 }} />
      ) : filteredStores.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="storefront-outline" size={48} color={theme.colors.primaryLight} />
          <Text style={styles.emptyTitle}>Nenhuma loja encontrada</Text>
        </View>
      ) : (
        <FlatList
          data={filteredStores}
          renderItem={renderStore}
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
  searchRow: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    marginHorizontal: 16, marginVertical: 12,
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.radius.md, paddingHorizontal: 12,
  },
  searchInput: { flex: 1, height: 44, fontSize: 14, color: theme.colors.text },
  listContent: { padding: 16, gap: 12 },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    flexDirection: 'row', overflow: 'hidden',
    ...theme.shadow.sm,
  },
  storeImage: { width: 90, height: 90 },
  storePlaceholder: {
    width: 90, height: 90,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center', alignItems: 'center',
  },
  placeholderLetter: { fontSize: 30, fontWeight: '800', color: theme.colors.white },
  cardBody: { flex: 1, padding: 12, justifyContent: 'center' },
  storeName: { fontSize: 15, fontWeight: '700', color: theme.colors.text, marginBottom: 4 },
  storeDesc: { fontSize: 12, color: theme.colors.textSecondary, lineHeight: 17, marginBottom: 8 },
  visitBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    alignSelf: 'flex-start',
    borderWidth: 1.5, borderColor: theme.colors.primary,
    borderRadius: theme.radius.sm, paddingHorizontal: 10, paddingVertical: 5,
  },
  visitBtnText: { color: theme.colors.primary, fontWeight: '600', fontSize: 12 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, marginTop: 48 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.text, marginTop: 16 },
});
