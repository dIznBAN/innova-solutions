import { auth } from './firebase';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

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
    const data = text ? JSON.parse(text) : {};

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
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ firebaseUid, name, email, profilePicture: profilePicture || null }),
    });
  }

  async getUserByFirebaseUid(uid) { return this.request(`/users/firebase/${uid}`); }
  async getAllUsers() { return this.request('/users'); }
  async getUserById(id) { return this.request(`/users/${id}`); }
  async updateUser(id, userData) { return this.request(`/users/${id}`, { method: 'PUT', body: JSON.stringify(userData) }); }
  async updateUserRole(id, role) { return this.request(`/users/${id}/role`, { method: 'PATCH', body: JSON.stringify({ role }) }); }
  async deleteUser(id) { return this.request(`/users/${id}`, { method: 'DELETE' }); }

  async registerPartner(data) {
    return this.request('/stores/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getAllStores() { return this.request('/stores'); }
  async getMyStores() { return this.request('/stores/minhas-lojas'); }
  async getMyStore() { return this.request('/stores/minha-loja'); }
  async updateStore(id, data) { return this.request(`/stores/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
  async getCouponsByStore(storeId) { return this.request(`/coupons/store/${storeId}`); }
  async createCoupon(data) { return this.request('/coupons', { method: 'POST', body: JSON.stringify(data) }); }
  async updateCoupon(id, data) { return this.request(`/coupons/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
  async deleteCoupon(id) { return this.request(`/coupons/${id}`, { method: 'DELETE' }); }
  async getStoreById(id) { return this.request(`/stores/${id}`); }
  async updateStoreStatus(id, status, rejectionReason = null) {
    return this.request(`/stores/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, rejectionReason }),
    })
  }
}

export default new ApiService();
