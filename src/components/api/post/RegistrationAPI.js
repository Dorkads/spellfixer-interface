import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

// Регистрация пользователя
const registerUser = async (formData) => {
  try {
    const payload = {
      first_name: formData.name,
      last_name: formData.surname,
      username: formData.login,
      password: formData.password,
    };

    const response = await axios.post(`${BASE_URL}/register`, payload);
    return response.data;
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    throw error;
  }
};

export default registerUser;
