import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { auth } from './firebase';

const LOCAL_API_PORT = 8080;

function getApiBaseUrl() {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL.replace(/\/$/, '');
  }

  const hostUri =
    Constants.expoConfig?.hostUri ||
    Constants.manifest2?.extra?.expoClient?.hostUri ||
    Constants.manifest?.debuggerHost;

  const localNetworkHost = hostUri?.split(':')[0];

  if (localNetworkHost && localNetworkHost !== 'localhost') {
    return `http://${localNetworkHost}:${LOCAL_API_PORT}/api`;
  }

  if (Platform.OS === 'android') {
    return `http://10.0.2.2:${LOCAL_API_PORT}/api`;
  }

  return `http://localhost:${LOCAL_API_PORT}/api`;
}

const API_BASE_URL = getApiBaseUrl();

class ApiService {
 async request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = { 'Content-Type': 'application/json', ...options.headers };

  if (auth.currentUser && !headers['Authorization']) {
    const token = await auth.currentUser.getIdToken();
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, { ...options, headers });
  const text = await response.text();

  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    // backend retornou HTML ou texto, não JSON
    if (!response.ok) throw new Error(`Erro ${response.status}: ${text.substring(0, 100)}`);
    return {};
  }

  if (!response.ok) throw new Error(data.message || 'Erro na requisição');
  return data;
}

  async createUser(firebaseUid, name, email, profilePicture) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify({ firebaseUid, name, email, profilePicture: profilePicture || null }),
    });
  }

  async createUserWithToken(token, firebaseUid, name, email, profilePicture) {
    return this.request('/users', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ firebaseUid, name, email, profilePicture: profilePicture || null }),
    });
  }

  async getUserByFirebaseUid(uid) { return this.request(`/users/firebase/${uid}`); }
  async getAllUsers() { return this.request('/users'); }
  async getUserById(id) { return this.request(`/users/${id}`); }
  async updateUser(id, userData) { return this.request(`/users/${id}`, { method: 'PUT', body: JSON.stringify(userData) }); }
  async updateUserRole(id, role) { return this.request(`/users/${id}/role`, { method: 'PATCH', body: JSON.stringify({ role }) }); }
  async deleteUser(id) { return this.request(`/users/${id}`, { method: 'DELETE' }); }


  async getAllCoupons() { return this.request('/coupons'); }
  async getAllStores() { return this.request('/stores'); }
  async getMyStores() { return this.request('/stores/minhas-lojas'); }
  async getMyStore() { return this.request('/stores/minha-loja'); }
  async updateStore(id, data) { return this.request(`/stores/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
  async getCouponsByStore(storeId) { return this.request(`/coupons/store/${storeId}`); }
  async createCoupon(data) { return this.request('/coupons', { method: 'POST', body: JSON.stringify(data) }); }
  async updateCoupon(id, data) { return this.request(`/coupons/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
  async deleteCoupon(id) { return this.request(`/coupons/${id}`, { method: 'DELETE' }); }

  async getMyCoupons() { return this.request('/user-coupons'); }
  async saveUserCoupon(couponId) { return this.request(`/user-coupons/${couponId}`, { method: 'POST' }); }
  async removeUserCoupon(couponId) { return this.request(`/user-coupons/${couponId}`, { method: 'DELETE' }); }
  async getStoreById(id) { return this.request(`/stores/${id}`); }
  async updateStoreStatus(id, status, rejectionReason = null) {
    return this.request(`/stores/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, rejectionReason }),
    });
  }
  async deleteStore(id) { return this.request(`/stores/${id}`, { method: 'DELETE' }); }
}

export default new ApiService();
