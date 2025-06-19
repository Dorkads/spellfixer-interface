import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username: formData.login,
      password: formData.password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Ошибка сети' };
  }
};

export default loginUser;
