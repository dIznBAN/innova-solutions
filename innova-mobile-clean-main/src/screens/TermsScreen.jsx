import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

export default function TermsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Termos de Uso</Text>
      <Text style={styles.updated}>Última atualização: Janeiro de 2025</Text>
      {[
        ['1. Aceitação dos Termos', 'Ao acessar e usar o Innova Solutions, você concorda em cumprir estes Termos de Uso. Se não concordar com qualquer parte dos termos, não poderá acessar o aplicativo.'],
        ['2. Uso do Serviço', 'O Innova Solutions é uma plataforma de cupons de desconto para lojas de semijoias. Os cupons são fornecidos pelas lojas parceiras e estão sujeitos às condições estabelecidas por cada lojista.'],
        ['3. Conta de Usuário', 'Para acessar determinados recursos, você precisará criar uma conta. É sua responsabilidade manter a confidencialidade da sua senha e de todas as atividades realizadas na sua conta.'],
        ['4. Cupons e Descontos', 'Os cupons disponibilizados têm validade definida pelas lojas parceiras. O Innova Solutions não se responsabiliza pela disponibilidade ou aplicação dos descontos nas lojas parceiras.'],
        ['5. Privacidade', 'O tratamento dos seus dados pessoais é realizado conforme nossa Política de Privacidade. Ao usar nossos serviços, você concorda com a coleta e uso de informações conforme descrito.'],
        ['6. Modificações', 'Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação. O uso continuado constitui aceitação dos novos termos.'],
        ['7. Contato', 'Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: contato@innovasolutions.com.br'],
      ].map(([title, body]) => (
        <View key={title} style={styles.section}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 24, paddingBottom: 48 },
  title: { fontSize: 24, fontWeight: '800', color: theme.colors.text, marginBottom: 6 },
  updated: { fontSize: 13, color: theme.colors.textSecondary, marginBottom: 24 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: theme.colors.primary, marginBottom: 8 },
  body: { fontSize: 14, color: theme.colors.textSecondary, lineHeight: 22 },
});
