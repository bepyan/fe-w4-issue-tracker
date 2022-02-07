declare module '@types' {
  interface UserDTO {
    id: string;
    name: string;
  }

  interface UserLoginDTO {
    id: string;
    pw: string;
  }

  interface UserRegistDTO {
    id: string;
    pw: string;
    name: string;
  }

  interface IAuth {
    accessToken: string;
    refreshToken: string;
  }

  interface AuthDTO extends IAuth {
    user: UserDTO;
  }
}
