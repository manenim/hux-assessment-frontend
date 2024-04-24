import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: number;
      password: string;
      email: string;
      role: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      name: number;
      password: string;
      email: string;
      role: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
