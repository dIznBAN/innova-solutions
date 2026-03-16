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
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Erro na requisição');
    return data;
  }

  async getAllUsers() { return this.request('/users/findAll'); }
  async deleteUser(id) { return this.request(`/users/${id}`, { method: 'DELETE' }); }
  async updateUser(id, userData) { return this.request(`/users/${id}`, { method: 'PUT', body: JSON.stringify(userData) }); }
  async getUserById(id) { return this.request(`/users/${id}`); }
  async getProfile(id) { return this.request(`/users/profile/${id}`); }
  async updateProfile(id, userData) { return this.request(`/users/profile/${id}`, { method: 'PUT', body: JSON.stringify(userData) }); }
  async deleteAccount(id) { return this.request(`/users/account/${id}`, { method: 'DELETE' }); }
}

export default new ApiService();
