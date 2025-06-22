import api from './api';

export const getStudentInfo = async () => {
  const token = localStorage.getItem('token');
  const response = await api.get('/student/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
