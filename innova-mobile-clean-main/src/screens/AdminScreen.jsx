import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator, Modal, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ApiService from '../services/api';
import { theme } from '../theme';

const statusColor = s => s === 'Aprovada' ? '#4CAF50' : s === 'Pendente' ? '#FF9800' : theme.colors.error;

export default function AdminScreen() {
  const [tab, setTab] = useState('users');
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [partners, setPartners] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rejectModal, setRejectModal] = useState(null);
  const [rejectReason, setRejectReason] = useState('');

  useEffect(() => {
    Promise.all([ApiService.getAllUsers(), ApiService.getAllStores(), ApiService.getAllCoupons()])
      .then(([u, p, c]) => { setUsers(u); setPartners(p); setCoupons(c); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const lower = search.toLowerCase();
  const filteredUsers = users.filter(u => u.name?.toLowerCase().includes(lower) || u.email?.toLowerCase().includes(lower));
  const filteredPartners = partners.filter(p => p.name?.toLowerCase().includes(lower) || p.email?.toLowerCase().includes(lower));
  const filteredCoupons = coupons.filter(c => c.title?.toLowerCase().includes(lower));

  const approvePartner = async id => {
    try {
      const updated = await ApiService.updateStoreStatus(id, 'Aprovada');
      setPartners(prev => prev.map(p => p.id === id ? updated : p));
    } catch (e) { Alert.alert('Erro', e.message); }
  };

  const confirmReject = async () => {
    if (!rejectReason.trim()) return;
    try {
      const updated = await ApiService.updateStoreStatus(rejectModal.id, 'Rejeitada', rejectReason);
      setPartners(prev => prev.map(p => p.id === rejectModal.id ? updated : p));
      setRejectModal(null); setRejectReason('');
    } catch (e) { Alert.alert('Erro', e.message); }
  };

  const deleteUser = id => Alert.alert('Excluir usuário', 'Tem certeza?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: async () => {
      try { await ApiService.deleteUser(id); setUsers(prev => prev.filter(u => u.id !== id)); }
      catch (e) { Alert.alert('Erro', e.message); }
    }},
  ]);

  const toggleRole = async user => {
    const role = user.role === 'ADMIN' ? 'USER' : 'ADMIN';
    try {
      await ApiService.updateUserRole(user.id, role);
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, role } : u));
    } catch (e) { Alert.alert('Erro', e.message); }
  };

  const deleteStore = id => Alert.alert('Excluir loja', 'Isso excluirá a loja e todos os cupons.', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: async () => {
      try { await ApiService.deleteStore(id); setPartners(prev => prev.filter(p => p.id !== id)); }
      catch (e) { Alert.alert('Erro', e.message); }
    }},
  ]);

  const deleteCoupon = id => Alert.alert('Excluir cupom', 'Tem certeza?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: async () => {
      try { await ApiService.deleteCoupon(id); setCoupons(prev => prev.filter(c => c.id !== id)); }
      catch (e) { Alert.alert('Erro', e.message); }
    }},
  ]);

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color={theme.colors.primary} /></View>;

  return (
    <View style={styles.container}>
      {/* Stats */}
      <View style={styles.stats}>
        {[
          { icon: 'storefront', val: partners.filter(p => p.status === 'Aprovada').length, label: 'Parceiros' },
          { icon: 'pricetag', val: coupons.length, label: 'Cupons' },
          { icon: 'people', val: users.length, label: 'Usuários' },
        ].map(s => (
          <View key={s.label} style={styles.statCard}>
            <Ionicons name={s.icon} size={22} color={theme.colors.primary} />
            <Text style={styles.statVal}>{s.val}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['users','partners','coupons'].map(t => (
          <TouchableOpacity key={t} style={[styles.tab, tab===t && styles.tabActive]} onPress={() => setTab(t)}>
            <Text style={[styles.tabText, tab===t && styles.tabTextActive]}>
              {t === 'users' ? 'Usuários' : t === 'partners' ? 'Parceiros' : 'Cupons'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <Ionicons name="search" size={16} color={theme.colors.gray} />
        <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor={theme.colors.gray} value={search} onChangeText={setSearch} />
      </View>

      {/* List */}
      <FlatList
        data={tab === 'users' ? filteredUsers : tab === 'partners' ? filteredPartners : filteredCoupons}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          if (tab === 'users') return (
            <View style={styles.row}>
              <View style={styles.avatar}>{item.profilePicture ? <Image source={{uri:item.profilePicture}} style={styles.avatarImg}/> : <Text style={styles.avatarText}>{item.name?.charAt(0).toUpperCase()}</Text>}</View>
              <View style={styles.rowInfo}>
                <Text style={styles.rowName}>{item.name}</Text>
                <Text style={styles.rowSub}>{item.email}</Text>
                <View style={[styles.badge, item.role==='ADMIN' ? styles.badgeAdmin : styles.badgeUser]}>
                  <Text style={[styles.badgeText, {color: item.role==='ADMIN' ? theme.colors.primary : theme.colors.gray}]}>{item.role==='ADMIN' ? 'Admin' : 'Usuário'}</Text>
                </View>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.actionBtn} onPress={() => toggleRole(item)}>
                  <Ionicons name="shield-outline" size={16} color={theme.colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn} onPress={() => deleteUser(item.id)}>
                  <Ionicons name="trash-outline" size={16} color={theme.colors.error} />
                </TouchableOpacity>
              </View>
            </View>
          );
          if (tab === 'partners') return (
            <View style={styles.row}>
              <View style={styles.avatar}>{item.image_url ? <Image source={{uri:item.image_url}} style={styles.avatarImg}/> : <Text style={styles.avatarText}>{item.name?.charAt(0).toUpperCase()}</Text>}</View>
              <View style={styles.rowInfo}>
                <Text style={styles.rowName}>{item.name}</Text>
                <View style={[styles.badge, {backgroundColor: statusColor(item.status)+'22'}]}>
                  <Text style={[styles.badgeText, {color: statusColor(item.status)}]}>{item.status}</Text>
                </View>
              </View>
              <View style={styles.actions}>
                {item.status === 'Pendente' && <TouchableOpacity style={styles.actionBtn} onPress={() => approvePartner(item.id)}><Ionicons name="checkmark" size={16} color="#4CAF50" /></TouchableOpacity>}
                {(item.status === 'Pendente' || item.status === 'Aprovada') && <TouchableOpacity style={styles.actionBtn} onPress={() => setRejectModal(item)}><Ionicons name="close" size={16} color={theme.colors.error} /></TouchableOpacity>}
                {item.status === 'Rejeitada' && <TouchableOpacity style={styles.actionBtn} onPress={() => approvePartner(item.id)}><Ionicons name="refresh" size={16} color="#4CAF50" /></TouchableOpacity>}
                <TouchableOpacity style={styles.actionBtn} onPress={() => deleteStore(item.id)}><Ionicons name="trash-outline" size={16} color={theme.colors.error} /></TouchableOpacity>
              </View>
            </View>
          );
          return (
            <View style={styles.row}>
              <View style={[styles.discBadge]}><Text style={styles.discText}>{item.discount}%</Text></View>
              <View style={styles.rowInfo}>
                <Text style={styles.rowName}>{item.title}</Text>
                <Text style={styles.rowSub}>{partners.find(p=>p.id===item.store_id)?.name || `Loja #${item.store_id}`}</Text>
                {item.valid_until && <Text style={styles.rowSub}>Até {new Date(item.valid_until).toLocaleDateString('pt-BR')}</Text>}
              </View>
              <TouchableOpacity style={styles.actionBtn} onPress={() => deleteCoupon(item.id)}>
                <Ionicons name="trash-outline" size={16} color={theme.colors.error} />
              </TouchableOpacity>
            </View>
          );
        }}
        ListEmptyComponent={<View style={styles.empty}><Text style={styles.emptyText}>Nenhum item encontrado</Text></View>}
      />

      {/* Reject Modal */}
      <Modal visible={!!rejectModal} transparent animationType="slide" onRequestClose={() => setRejectModal(null)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Recusar parceiro</Text>
            <Text style={styles.modalDesc}>Informe o motivo da recusa de <Text style={{fontWeight:'700'}}>{rejectModal?.name}</Text>:</Text>
            <TextInput style={styles.modalInput} placeholder="Motivo da recusa..." placeholderTextColor={theme.colors.gray} value={rejectReason} onChangeText={setRejectReason} multiline />
            <View style={{flexDirection:'row', gap:10, marginTop:12}}>
              <TouchableOpacity style={[styles.modalBtn, {backgroundColor:theme.colors.lightGray,flex:1}]} onPress={() => setRejectModal(null)}>
                <Text style={{color:theme.colors.text,fontWeight:'600'}}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalBtn, {backgroundColor:theme.colors.error,flex:1}]} onPress={confirmReject} disabled={!rejectReason.trim()}>
                <Text style={{color:'#fff',fontWeight:'700'}}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: theme.colors.background },
  center: { flex:1, justifyContent:'center', alignItems:'center' },
  stats: { flexDirection:'row', padding:16, gap:10 },
  statCard: { flex:1, backgroundColor:theme.colors.white, borderRadius:theme.radius.md, padding:12, alignItems:'center', gap:4, ...theme.shadow.sm },
  statVal: { fontSize:20, fontWeight:'800', color:theme.colors.text },
  statLabel: { fontSize:11, color:theme.colors.textSecondary },
  tabs: { flexDirection:'row', marginHorizontal:16, backgroundColor:theme.colors.lightGray, borderRadius:theme.radius.md, padding:4, marginBottom:10 },
  tab: { flex:1, paddingVertical:8, alignItems:'center', borderRadius:theme.radius.sm },
  tabActive: { backgroundColor:theme.colors.white, ...theme.shadow.sm },
  tabText: { fontSize:13, fontWeight:'600', color:theme.colors.gray },
  tabTextActive: { color:theme.colors.primary },
  searchRow: { flexDirection:'row', alignItems:'center', gap:8, marginHorizontal:16, marginBottom:10, backgroundColor:theme.colors.lightGray, borderRadius:theme.radius.md, paddingHorizontal:12, height:40 },
  searchInput: { flex:1, fontSize:14, color:theme.colors.text },
  list: { paddingHorizontal:16, gap:10, paddingBottom:32 },
  row: { flexDirection:'row', alignItems:'center', gap:12, backgroundColor:theme.colors.white, borderRadius:theme.radius.md, padding:12, ...theme.shadow.sm },
  avatar: { width:44, height:44, borderRadius:22, backgroundColor:theme.colors.secondary, justifyContent:'center', alignItems:'center', overflow:'hidden' },
  avatarImg: { width:44, height:44 },
  avatarText: { fontSize:18, fontWeight:'700', color:theme.colors.primary },
  rowInfo: { flex:1 },
  rowName: { fontSize:14, fontWeight:'700', color:theme.colors.text, marginBottom:3 },
  rowSub: { fontSize:12, color:theme.colors.textSecondary },
  badge: { borderRadius:20, paddingHorizontal:8, paddingVertical:2, alignSelf:'flex-start', marginTop:3 },
  badgeAdmin: { backgroundColor:theme.colors.secondary },
  badgeUser: { backgroundColor:theme.colors.lightGray },
  badgeText: { fontSize:11, fontWeight:'700' },
  actions: { flexDirection:'row', gap:6 },
  actionBtn: { width:32, height:32, borderRadius:8, backgroundColor:theme.colors.lightGray, justifyContent:'center', alignItems:'center' },
  discBadge: { width:52, height:52, borderRadius:theme.radius.md, backgroundColor:theme.colors.secondary, justifyContent:'center', alignItems:'center' },
  discText: { color:theme.colors.primaryDark, fontWeight:'800', fontSize:14 },
  empty: { alignItems:'center', paddingTop:32 },
  emptyText: { color:theme.colors.gray, fontSize:14 },
  modalOverlay: { flex:1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'flex-end' },
  modalBox: { backgroundColor:theme.colors.white, borderTopLeftRadius:24, borderTopRightRadius:24, padding:24 },
  modalTitle: { fontSize:18, fontWeight:'800', color:theme.colors.text, marginBottom:8 },
  modalDesc: { fontSize:14, color:theme.colors.textSecondary, marginBottom:12 },
  modalInput: { borderWidth:1.5, borderColor:theme.colors.border, borderRadius:theme.radius.md, padding:14, height:100, textAlignVertical:'top', fontSize:14, color:theme.colors.text, backgroundColor:theme.colors.lightGray },
  modalBtn: { borderRadius:theme.radius.md, height:46, alignItems:'center', justifyContent:'center' },
});
