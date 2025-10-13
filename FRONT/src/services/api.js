const API_BASE_URL = 'http://localhost:8080/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    console.log('Fazendo requisição para:', url);
    console.log('Config:', config);

    try {
      const response = await fetch(url, config);
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Erro na requisição');
      }
      
      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Erro de conexão. Verifique se o servidor está rodando.');
      }
      throw error;
    }
  }

  // Auth endpoints
  async login(email, passwordHash) {
    return this.request('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, passwordHash }),
    });
  }

  async register(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // User management endpoints
  async getAllUsers() {
    return this.request('/users/findAll');
  }

  async deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  async updateUser(id, userData) {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async getUserById(id) {
    return this.request(`/users/${id}`);
  }

  // Profile endpoints
  async getProfile(id) {
    return this.request(`/users/profile/${id}`);
  }

  async updateProfile(id, userData) {
    return this.request(`/users/profile/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }
}

export default new ApiService();