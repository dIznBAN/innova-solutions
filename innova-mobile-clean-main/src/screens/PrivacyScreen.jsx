import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

export default function PrivacyScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Política de Privacidade</Text>
      <Text style={styles.updated}>Última atualização: Janeiro de 2025</Text>
      {[
        ['1. Informações Coletadas', 'Coletamos informações que você nos fornece diretamente, como nome, e-mail e foto de perfil ao criar uma conta. Também coletamos dados de uso da plataforma para melhorar nossos serviços.'],
        ['2. Uso das Informações', 'Utilizamos suas informações para fornecer, manter e melhorar nossos serviços, enviar notificações relevantes, e personalizar sua experiência na plataforma.'],
        ['3. Compartilhamento de Dados', 'Não vendemos seus dados pessoais. Compartilhamos informações apenas com parceiros necessários para operação do serviço (ex: autenticação Firebase) e quando exigido por lei.'],
        ['4. Segurança', 'Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.'],
        ['5. Seus Direitos', 'Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para exercer esses direitos, acesse as configurações do perfil ou entre em contato conosco.'],
        ['6. Cookies e Tecnologias', 'Utilizamos tecnologias similares a cookies para melhorar a experiência do usuário e analisar o uso da plataforma.'],
        ['7. Contato', 'Para dúvidas sobre nossa Política de Privacidade, entre em contato: privacidade@innovasolutions.com.br'],
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
