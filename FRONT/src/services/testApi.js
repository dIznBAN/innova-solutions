// Teste rápido da API
const testAPI = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/users/ping');
    const data = await response.text();
    console.log('Backend funcionando:', data);
  } catch (error) {
    console.error('Backend não está rodando:', error);
  }
};

testAPI();