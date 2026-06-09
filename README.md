# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment Checklist

To avoid Search Console crawl errors, make sure the live hosting setup matches the canonical domain used by the site:

1. Add `amplifyresourcing.com` as the primary domain in your hosting platform.
2. Add `www.amplifyresourcing.com` as an alternate domain and redirect it to `https://amplifyresourcing.com`.
3. Remove or redirect any legacy domain such as `amplifyresourcinglimited.com` so Google does not keep discovering it.
4. Confirm the SSL certificate covers both `amplifyresourcing.com` and `www.amplifyresourcing.com`.
5. Make sure `public/robots.txt` points to `https://amplifyresourcing.com/sitemap.xml` and the sitemap URLs all use the same host.

If `www.amplifyresourcing.com` still shows a certificate error in the browser, that is a DNS/certificate issue outside the app code and must be fixed in the hosting console or registrar.
