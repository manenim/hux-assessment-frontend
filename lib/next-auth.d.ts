import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: number;
      lastName: string;
      email: string;
    };
    accessToken: string;
    refreshToken: string;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      firstName: number;
      lastName: string;
      email: string;
    };
    accessToken: string;
    refreshToken: string;
  }
}
