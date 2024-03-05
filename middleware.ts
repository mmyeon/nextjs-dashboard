import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// authConfig 객체로 NextAuth 초기화
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
