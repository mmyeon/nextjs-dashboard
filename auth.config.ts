import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  // 커스텀 페이지로 리다이렉트하기
  pages: {
    signIn: '/login',
  },
  // middleware로 route protect 하기
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // 인증되지 않은 유저는 로그인 페이지로 리다이렉트
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
