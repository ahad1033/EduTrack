import { baseApi } from '../../api/base-api';

import { API_ENDPOINTS } from '../../../utils/api-endpoints';

// ----------------------------------------------------------------------

const teacherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query: () => ({
        url: API_ENDPOINTS.GET_ALL_TEACHERS,
        method: 'GET',
      }),
      providesTags: ['Teachers'],
    }),
    createTeacher: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.CREATE_TEACHERS,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Teachers'],
    }),
    getTeacherById: builder.query({
      query: (id) => ({
        url: API_ENDPOINTS.GET_TEACHER_BY_ID(id),
        method: 'GET',
      }),
      providesTags: ['Teachers'],
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetTeacherByIdQuery,
  useCreateTeacherMutation,
} = teacherApi;
