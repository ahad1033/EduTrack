// ------------------------------------------------------------

export const API_BASE_URL = 'http://localhost:5000/api/v1';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  CHANGE_PASSWORD: `${API_BASE_URL}/change-password`,
  ACCESS_TOKEN: `${API_BASE_URL}/access-token`,
  //
  CREATE_TEACHERS: `${API_BASE_URL}/teachers/create-teacher`,
  GET_ALL_TEACHERS: `${API_BASE_URL}/teachers/get-all-teachers`,
  GET_TEACHER_BY_ID: (id) =>
    `${API_BASE_URL}/teachers/get-single-teacher/${id}`,
  UPDATE_TEACHER_BY_ID: (id) => `${API_BASE_URL}/teachers/update-teacher/${id}`,
  DELETE_TEACHER_BY_ID: (id) => `${API_BASE_URL}/teachers/delete-teacher/${id}`,
  //
  CREATE_STUDENTS: `${API_BASE_URL}/students/create-student`,
  GET_ALL_STUDENTS: `${API_BASE_URL}/students/get-all-students`,
  GET_STUDENT_BY_ID: (id) =>
    `${API_BASE_URL}/students/get-single-student/${id}`,
  UPDATE_STUDENT_BY_ID: (id) => `${API_BASE_URL}/students/update-student/${id}`,
  DELETE_STUDENT_BY_ID: (id) => `${API_BASE_URL}/students/delete-student/${id}`,
  //
};
