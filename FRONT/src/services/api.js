import { auth } from './firebase';

const API_BASE_URL = 'http://localhost:8080/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = { 'Content-Type': 'application/json', ...options.headers };

    if (auth.currentUser) {
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

  async getUserByFirebaseUid(uid) { return this.request(`/users/firebase/${uid}`); }
  async getAllUsers() { return this.request('/users'); }
  async getUserById(id) { return this.request(`/users/${id}`); }
  async updateUser(id, userData) { return this.request(`/users/${id}`, { method: 'PUT', body: JSON.stringify(userData) }); }
  async updateUserRole(id, role) { return this.request(`/users/${id}/role`, { method: 'PATCH', body: JSON.stringify({ role }) }); }
  async deleteUser(id) { return this.request(`/users/${id}`, { method: 'DELETE' }); }
}

export default new ApiService();
