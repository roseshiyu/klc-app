import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['cn', 'en'],

  // Used when no locale matches
  defaultLocale: 'cn'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(cn|en)/:path*']
};