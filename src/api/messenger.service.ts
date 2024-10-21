// import { baseQueryWithReauth } from '@/src/shared/model/inctagram.base-query'
// import { createApi } from '@reduxjs/toolkit/query/react'

// export const MessengerService = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: builder => ({
//     getUserByUserName: builder.query<any, any>({
//       query: ({ pageNumber = 1, pageSize = 12, search }) => {
//         return {
//           method: 'GET',
//           params: { pageNumber, pageSize, search },
//           url: `/v1/users`,
//         }
//       },
//     }),
//   }),
//   reducerPath: 'userService', // Уникальный путь для редьюсера
//   tagTypes: ['Users'], // Опционально, если тебе нужны тэги для кэширования
// })

// // Экспортируй hook для использования в компонентах
// export const { useGetUserByUserNameQuery } = MessengerService
export {}
