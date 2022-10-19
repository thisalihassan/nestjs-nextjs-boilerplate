import { emptySplitApi as api } from '@store/reducers/emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    appControllerGetHello: build.query<
      AppControllerGetHelloApiResponse,
      AppControllerGetHelloApiArg
    >({
      query: () => ({ url: `/api/seed` }),
    }),
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users`,
        method: 'POST',
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/users` }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/users/${queryArg.email}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    authenticationControllerLoginAdmin: build.mutation<
      AuthenticationControllerLoginAdminApiResponse,
      AuthenticationControllerLoginAdminApiArg
    >({
      query: (queryArg) => ({
        url: `/api/admin/login`,
        method: 'POST',
        body: queryArg.loginDto,
      }),
    }),
    authenticationControllerLoginUser: build.mutation<
      AuthenticationControllerLoginUserApiResponse,
      AuthenticationControllerLoginUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/user/login`,
        method: 'POST',
        body: queryArg.loginDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as rtk };
export type AppControllerGetHelloApiResponse = unknown;
export type AppControllerGetHelloApiArg = void;
export type UsersControllerCreateApiResponse = /** status 200  */ UserEntity;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse = /** status 200  */ UserEntity[];
export type UsersControllerFindAllApiArg = void;
export type UsersControllerFindOneApiResponse = /** status 200  */ UserEntity;
export type UsersControllerFindOneApiArg = {
  email: string;
};
export type UsersControllerUpdateApiResponse = /** status 200  */ UserEntity;
export type UsersControllerUpdateApiArg = {
  id: string;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = unknown;
export type UsersControllerRemoveApiArg = {
  id: string;
};
export type AuthenticationControllerLoginAdminApiResponse =
  /** status 200  */ UserEntity;
export type AuthenticationControllerLoginAdminApiArg = {
  loginDto: LoginDto;
};
export type AuthenticationControllerLoginUserApiResponse =
  /** status 200  */ UserEntity;
export type AuthenticationControllerLoginUserApiArg = {
  loginDto: LoginDto;
};
export type UserEntity = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  role: 'admin' | 'END_USER';
  fullname: string;
};
export type CreateUserDto = {
  firstName: string;
  phoneNo?: string | null;
  lastName: string;
  email: string;
  role: 'admin' | 'END_USER';
};
export type UpdateUserDto = {
  firstName: string;
  lastName: string;
  email: string;
};
export type LoginDto = {
  username: string;
  password: string;
};
export const {
  useAppControllerGetHelloQuery,
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
  useAuthenticationControllerLoginAdminMutation,
  useAuthenticationControllerLoginUserMutation,
} = injectedRtkApi;
