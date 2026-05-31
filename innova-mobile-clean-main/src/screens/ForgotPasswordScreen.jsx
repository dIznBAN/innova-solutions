import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../services/firebase';
import { theme } from '../theme';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="lock-closed-outline" size={48} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.title}>Recuperar Senha</Text>

        {submitted ? (
          <View style={styles.success}>
            <Ionicons name="checkmark-circle" size={48} color={theme.colors.success} />
            <Text style={styles.successText}>
              Instruções de recuperação foram enviadas para seu e-mail!
            </Text>
          </View>
        ) : (
          <>
            <Text style={styles.desc}>
              Digite seu e-mail para receber as instruções de recuperação
            </Text>
            <View style={styles.inputRow}>
              <Ionicons name="mail-outline" size={18} color={theme.colors.gray} />
              <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor={theme.colors.gray}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSubmit} disabled={loading || !email}>
              {loading ? (
                <ActivityIndicator color={theme.colors.white} />
              ) : (
                <Text style={styles.btnText}>Enviar Instruções</Text>
              )}
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', padding: 24 },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.xl,
    padding: theme.spacing.xl,
    alignItems: 'center',
    ...theme.shadow.md,
  },
  icon: { marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '800', color: theme.colors.text, marginBottom: 8 },
  desc: { fontSize: 14, color: theme.colors.textSecondary, textAlign: 'center', marginBottom: 24, lineHeight: 20 },
  inputRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    borderWidth: 1.5, borderColor: theme.colors.border,
    borderRadius: theme.radius.md, paddingHorizontal: 14, height: 50,
    backgroundColor: theme.colors.lightGray, width: '100%', marginBottom: 16,
  },
  input: { flex: 1, fontSize: 15, color: theme.colors.text },
  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md, height: 50, width: '100%',
    alignItems: 'center', justifyContent: 'center',
  },
  btnText: { color: theme.colors.white, fontWeight: '700', fontSize: 16 },
  success: { alignItems: 'center', gap: 12 },
  successText: { fontSize: 14, color: theme.colors.textSecondary, textAlign: 'center', lineHeight: 20, marginTop: 8 },
});
