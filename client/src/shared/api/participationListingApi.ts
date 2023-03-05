import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMeta, IParticipator } from './types';

interface IParticipationListingQuery {
  meta: IMeta;
  items: IParticipator[];
}
// Define a service using a base URL and expected endpoints
export const participationListingApi = createApi({
  reducerPath: 'ParticipationListingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://new-backend.unistory.app/api/data',
  }),
  endpoints: (builder) => ({
    getList: builder.query<IParticipationListingQuery, string>({
      query: () => '?page=0&perPage=50',
    }),
    getParticipatorById: builder.query<IParticipator, string>({
      query: (id) => `/id/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListQuery, useGetParticipatorByIdQuery } =
  participationListingApi;
