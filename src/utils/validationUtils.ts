// src/utils/validationUtils.ts

/**
 * Valida o formato de um endereço de e-mail.
 * @param email O e-mail a ser validado.
 * @returns true se o formato for válido, false caso contrário.
 */
export const validateEmail = (email: string): boolean => {
  // Regex simples para validação de e-mail
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

/**
 * Valida a força da senha (mínimo de 8 caracteres neste exemplo).
 * @param password A senha a ser validada.
 * @returns true se a senha for válida, false caso contrário.
 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};
