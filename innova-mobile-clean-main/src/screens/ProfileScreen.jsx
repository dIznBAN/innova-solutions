import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { theme } from '../theme';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

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

  const photoSource = user.photoURL ? { uri: user.photoURL } : null;
  const avatarLetter = (user.displayName || 'U').charAt(0).toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        {photoSource ? (
          <Image source={photoSource} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarLetter}>{avatarLetter}</Text>
          </View>
        )}
        <Text style={styles.displayName}>{user.displayName}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={16} color={theme.colors.textSecondary} />
          <Text style={styles.infoText}>{user.displayName || '-'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={16} color={theme.colors.textSecondary} />
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.actionRow} onPress={logout}>
          <Ionicons name="log-out-outline" size={18} color={theme.colors.error} />
          <Text style={[styles.actionText, { color: theme.colors.error }]}>Sair da conta</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  displayName: { fontSize: 20, fontWeight: '800', color: theme.colors.white, marginTop: 12 },
  email: { fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  card: {
    margin: 16, marginBottom: 0,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg, padding: theme.spacing.md,
    ...theme.shadow.sm,
  },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  infoText: { fontSize: 14, color: theme.colors.text, flex: 1 },
  actionRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 12 },
  actionText: { flex: 1, fontSize: 14, fontWeight: '600' },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.text },
  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md, height: 48, paddingHorizontal: 32,
    alignItems: 'center', justifyContent: 'center',
  },
  btnText: { color: theme.colors.white, fontWeight: '700', fontSize: 15 },
});
