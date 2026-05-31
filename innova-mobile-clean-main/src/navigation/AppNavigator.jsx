import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';
import { theme } from '../theme';
import { View, ActivityIndicator } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CouponsScreen from '../screens/CouponsScreen';
import MyCouponsScreen from '../screens/MyCouponsScreen';
import StoresScreen from '../screens/StoresScreen';
import AuthScreen from '../screens/AuthScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PartnerRegisterScreen from '../screens/PartnerRegisterScreen';
import MyStoresScreen from '../screens/MyStoresScreen';
import MyStoreScreen from '../screens/MyStoreScreen';
import AdminScreen from '../screens/AdminScreen';
import TermsScreen from '../screens/TermsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: theme.colors.white },
  headerTintColor: theme.colors.primary,
  headerTitleStyle: { fontWeight: '700', color: theme.colors.text },
  headerBackTitle: '',
};

function MainTabs() {
  const { isAuthenticated } = useAuth();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Início: focused ? 'home' : 'home-outline',
            Cupons: focused ? 'pricetag' : 'pricetag-outline',
            'Meus Cupons': focused ? 'bookmark' : 'bookmark-outline',
            Lojas: focused ? 'storefront' : 'storefront-outline',
            Perfil: focused ? 'person' : 'person-outline',
          };
          return <Ionicons name={icons[route.name] || 'ellipse'} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: { borderTopColor: theme.colors.border, backgroundColor: theme.colors.white },
        headerStyle: { backgroundColor: theme.colors.white },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: { fontWeight: '700', color: theme.colors.text },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Cupons" component={CouponsScreen} />
      {isAuthenticated && (
        <Tab.Screen name="Meus Cupons" component={MyCouponsScreen} />
      )}
      <Tab.Screen name="Lojas" component={StoresScreen} />
      <Tab.Screen name="Perfil" component={isAuthenticated ? ProfileScreen : AuthScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.white }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Entrar / Criar Conta' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Recuperar Senha' }} />
        <Stack.Screen name="PartnerRegister" component={PartnerRegisterScreen} options={{ title: 'Cadastro de Parceiro' }} />
        <Stack.Screen name="MyStores" component={MyStoresScreen} options={{ title: 'Minhas Lojas' }} />
        <Stack.Screen name="MyStore" component={MyStoreScreen} options={{ title: 'Minha Loja' }} />
        <Stack.Screen name="Admin" component={AdminScreen} options={{ title: 'Painel Admin' }} />
        <Stack.Screen name="Terms" component={TermsScreen} options={{ title: 'Termos de Uso' }} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ title: 'Política de Privacidade' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
