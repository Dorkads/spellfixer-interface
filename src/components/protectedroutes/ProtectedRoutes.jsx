// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

let alerted = false;

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  // Если токена нет, редирект на логин
  if (!token) {
    if (!alerted) {
      alerted = true;
      alert('⛔ Вы не авторизованы. Пожалуйста, войдите в систему.');
    }
    return <Navigate to="/" replace />;
  }

  return children;
}
