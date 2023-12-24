export { default } from 'next-auth/middleware'

export const config = { matcher: ['/', '/esteathan/dashboard', '/esteathan/dashboard/:path*'] }