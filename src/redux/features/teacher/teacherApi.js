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
    }),
  }),
});

export const { useGetAllTeachersQuery } = teacherApi;
