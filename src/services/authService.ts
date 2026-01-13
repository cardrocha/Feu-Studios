// src/services/authService.ts

interface Credentials {
  email: string;
  password: string;
}

/**
 * Simula uma chamada de API para login.
 * @param credentials Credenciais do usuário.
 * @returns Uma promessa que resolve com sucesso ou rejeita com um erro.
 */
export const simulateLogin = async (credentials: Credentials): Promise<string> => {
  // Simulação de credenciais válidas (hardcoded por enquanto)
  const validEmail = 'user@example.com';
  const validPassword = 'password123';

  if (credentials.email === validEmail && credentials.password === validPassword) {
    // Simula um atraso de rede (async)
    await new Promise(resolve => setTimeout(resolve, 500));
    return 'token_de_sessao_ficticio'; // Retorna um token fictício
  } else {
    // Simula um erro de credenciais inválidas
    throw new Error('E-mail ou senha inválidos.');
  }
};
