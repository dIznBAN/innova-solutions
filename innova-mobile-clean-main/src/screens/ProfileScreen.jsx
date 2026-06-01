import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ScrollView, Image, Alert, ActivityIndicator, KeyboardAvoidingView, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { updateProfile, updatePassword, deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebase';
import api from '../services/api';
import { useAuth } from '../hooks/useAuth';
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
  if (!data.success) throw new Error('Falha ao fazer upload da imagem');
  return data.data.url;
};

export default function ProfileScreen() {
  const { user, dbUser, setDbUser, logout, userStore, userStores } = useAuth();
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [newPassword, setNewPassword] = useState('');
  const [photoUri, setPhotoUri] = useState(null);

  if (!user) {
    return (
      <View style={styles.center}>
        <Ionicons name="person-circle-outline" size={64} color={theme.colors.primaryLight} />
        <Text style={styles.emptyTitle}>Faça login para ver seu perfil</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const pickPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') { Alert.alert('Permissão necessária', 'Precisamos acessar sua galeria'); return; }
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
    if (!result.canceled) setPhotoUri(result.assets[0].uri);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      let photoURL = user.photoURL;
      if (photoUri) photoURL = await uploadToImgBB(photoUri);
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      if (newPassword.trim()) await updatePassword(auth.currentUser, newPassword);
      if (dbUser?.id) {
        await api.updateUser(dbUser.id, { name, email: user.email, profilePicture: photoURL });
      }
      setIsEditing(false);
      setNewPassword('');
      setPhotoUri(null);
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    } catch (e) {
      Alert.alert('Erro', e.code === 'auth/requires-recent-login' ? 'Faça login novamente antes de alterar a senha.' : e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = () => {
    Alert.prompt
      ? Alert.prompt(
          'Confirmar exclusão',
          'Digite sua senha para confirmar a exclusão permanente da sua conta:',
          async (password) => {
            if (!password) return;
            try {
              const credential = EmailAuthProvider.credential(user.email, password);
              await reauthenticateWithCredential(auth.currentUser, credential);
              if (dbUser?.id) await api.deleteUser(dbUser.id);
              await deleteUser(auth.currentUser);
              Alert.alert('Conta excluída', 'Sua conta foi excluída com sucesso.');
            } catch (e) {
              Alert.alert('Erro', e.code === 'auth/wrong-password' ? 'Senha incorreta' : e.message);
            }
          },
          'secure-text'
        )
      : Alert.alert(
          'Excluir conta',
          'Esta ação não pode ser desfeita. Todos seus dados serão permanentemente excluídos.',
          [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'Excluir', style: 'destructive',
              onPress: async () => {
                try {
                  if (dbUser?.id) await api.deleteUser(dbUser.id);
                  await deleteUser(auth.currentUser);
                } catch (e) {
                  Alert.alert('Erro', 'Faça login novamente antes de excluir a conta.');
                }
              },
            },
          ]
        );
  };

  const photoSource = photoUri ? { uri: photoUri } : user.photoURL ? { uri: user.photoURL } : null;
  const avatarLetter = (user.displayName || 'U').charAt(0).toUpperCase();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <TouchableOpacity onPress={isEditing ? pickPhoto : undefined} activeOpacity={isEditing ? 0.7 : 1}>
            {photoSource ? (
              <Image source={photoSource} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarLetter}>{avatarLetter}</Text>
              </View>
            )}
            {isEditing && (
              <View style={styles.cameraBadge}>
                <Ionicons name="camera" size={14} color={theme.colors.white} />
              </View>
            )}
          </TouchableOpacity>
          <Text style={styles.displayName}>{user.displayName}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Informações Pessoais</Text>
            {!isEditing ? (
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <Ionicons name="pencil-outline" size={20} color={theme.colors.primary} />
              </TouchableOpacity>
            ) : null}
          </View>

          {isEditing ? (
            <>
              <View style={styles.field}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                  style={styles.textInput}
                  value={name}
                  onChangeText={setName}
                  placeholder="Seu nome"
                />
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Nova senha (opcional)</Text>
                <TextInput
                  style={styles.textInput}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="Deixe em branco para manter"
                  secureTextEntry
                />
              </View>
              <View style={styles.btnRow}>
                <TouchableOpacity
                  style={[styles.btn, { flex: 1 }]}
                  onPress={handleSave}
                  disabled={loading}
                >
                  {loading ? <ActivityIndicator color={theme.colors.white} /> : <Text style={styles.btnText}>Salvar</Text>}
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.secondaryBtn, { flex: 1 }]}
                  onPress={() => { setIsEditing(false); setName(user.displayName || ''); setNewPassword(''); setPhotoUri(null); }}
                >
                  <Text style={styles.secondaryBtnText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={styles.infoRow}>
                <Ionicons name="person-outline" size={16} color={theme.colors.textSecondary} />
                <Text style={styles.infoText}>{user.displayName || '-'}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="mail-outline" size={16} color={theme.colors.textSecondary} />
                <Text style={styles.infoText}>{user.email}</Text>
              </View>
            </>
          )}
        </View>

        {/* My Stores shortcuts */}
        {userStores && userStores.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Minhas Lojas</Text>
            {userStores.map(store => (
              <TouchableOpacity
                key={store.id}
                style={styles.storeRow}
                onPress={() => navigation.navigate('MyStore', { id: store.id })}
              >
                <Ionicons name="storefront-outline" size={18} color={theme.colors.primary} />
                <Text style={styles.storeName}>{store.name}</Text>
                <Ionicons name="chevron-forward" size={16} color={theme.colors.gray} />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Actions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Conta</Text>
          <TouchableOpacity style={styles.actionRow} onPress={logout}>
            <Ionicons name="log-out-outline" size={18} color={theme.colors.error} />
            <Text style={[styles.actionText, { color: theme.colors.error }]}>Sair da conta</Text>
          </TouchableOpacity>
        </View>

        {/* Danger zone */}
        <View style={[styles.card, styles.dangerCard]}>
          <Text style={[styles.cardTitle, { color: theme.colors.error }]}>Zona de Perigo</Text>
          <Text style={styles.dangerDesc}>
            Esta ação não pode ser desfeita. Todos os seus dados serão excluídos permanentemente.
          </Text>
          <TouchableOpacity style={styles.dangerBtn} onPress={handleDeleteAccount}>
            <Ionicons name="trash-outline" size={16} color={theme.colors.white} />
            <Text style={styles.dangerBtnText}>Excluir conta</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 32 },
  avatarSection: { alignItems: 'center', paddingTop: 32, paddingBottom: 24, backgroundColor: theme.colors.primary },
  avatar: { width: 90, height: 90, borderRadius: 45, borderWidth: 3, borderColor: theme.colors.white },
  avatarPlaceholder: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: theme.colors.white,
  },
  avatarLetter: { fontSize: 36, fontWeight: '800', color: theme.colors.white },
  cameraBadge: {
    position: 'absolute', bottom: 0, right: 0,
    backgroundColor: theme.colors.primaryDark,
    width: 26, height: 26, borderRadius: 13,
    justifyContent: 'center', alignItems: 'center',
  },
  displayName: { fontSize: 20, fontWeight: '800', color: theme.colors.white, marginTop: 12 },
  email: { fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  card: {
    margin: 16, marginBottom: 0,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg, padding: theme.spacing.md,
    ...theme.shadow.sm,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: theme.colors.text, marginBottom: 12 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  infoText: { fontSize: 14, color: theme.colors.text, flex: 1 },
  field: { marginBottom: 12 },
  label: { fontSize: 13, fontWeight: '600', color: theme.colors.text, marginBottom: 6 },
  textInput: {
    borderWidth: 1.5, borderColor: theme.colors.border,
    borderRadius: theme.radius.md, paddingHorizontal: 14, height: 48,
    fontSize: 15, color: theme.colors.text, backgroundColor: theme.colors.lightGray,
  },
  btnRow: { flexDirection: 'row', gap: 10, marginTop: 8 },
  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md, height: 48,
    alignItems: 'center', justifyContent: 'center',
  },
  btnText: { color: theme.colors.white, fontWeight: '700', fontSize: 15 },
  secondaryBtn: {
    borderWidth: 1.5, borderColor: theme.colors.border,
    borderRadius: theme.radius.md, height: 48,
    alignItems: 'center', justifyContent: 'center',
  },
  secondaryBtnText: { color: theme.colors.textSecondary, fontWeight: '600', fontSize: 15 },
  storeRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  storeName: { flex: 1, fontSize: 14, color: theme.colors.text, fontWeight: '600' },
  actionRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  actionText: { flex: 1, fontSize: 14, fontWeight: '600', color: theme.colors.text },
  dangerCard: { borderWidth: 1.5, borderColor: 'rgba(255,76,76,0.3)', backgroundColor: '#FFF8F8' },
  dangerDesc: { fontSize: 13, color: theme.colors.textSecondary, marginBottom: 12, lineHeight: 18 },
  dangerBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    backgroundColor: theme.colors.error,
    borderRadius: theme.radius.md, paddingVertical: 12,
  },
  dangerBtnText: { color: theme.colors.white, fontWeight: '700', fontSize: 14 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.text },
});
