# How to set up new Next.js

## **System requirements**

- [Node.js 18.18](https://nodejs.org/) or later.
- macOS, Windows (including WSL), and Linux are supported.

## [**Automatic installation**](https://nextjs.org/docs/app/getting-started/installation#automatic-installation)

To create a project run:

```bash
pnpm dlx create-next-app@latest
```

installation prompt

```
What is your project named? > my-app
Would you like to use TypeScript? > Yes
Would you like to use ESLint? > Yes
Would you like to use Tailwind CSS? > Yes
Would you like your code inside a `src/` directory? > Yes
Would you like to use App Router? (recommended) > Yes
Would you like to use Turbopack for `next dev`? > Yes
Would you like to customize the import alias (`@/*` by default)? > No
```

## Run dev server

1. Run `pnpm run dev` to start the development server.
2. Visit `http://localhost:3000` to view your application.
3. Edit the`app/page.tsx` file and save it to see the updated result in your browser.

## Essential packages

- [`zod`](https://zod.dev) - schema validation
- [`react-hook-form`](https://react-hook-form.com/) , `@hookform/resolvers` - forms with easy-to-use validation
- [`date-fns`](https://date-fns.org/) - date utility
- day.js

- [`server-only`](https://www.npmjs.com/package/server-only) - prevent code use on Client Component

To install run:

```bash
pnpm install zod react-hook-form @hookform/resolvers date-fns server-only
```

**Optional packages**

- [jose](https://github.com/panva/jose) - JWA, JWS, JWE, JWT, JWK, JWKS for Node.js
- [t3-env](https://github.com/t3-oss/t3-env) - Typesafe envs
- [@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/installation) - data-fetching library

## UI Component ([Shadcn UI](https://ui.shadcn.com/) + [Tailwind css](https://tailwindcss.com/))

### Install Shacn UI

[Next.js](https://ui.shadcn.com/docs/installation/next)

Run the `init` command to create a new Next.js project or to setup an existing one:

```bash
pnpm dlx shadcn@latest init
```

You will be asked a few questions to configure `components.json`:

```
Which style would you like to use? › Default
Which color would you like to use as base color? › Neutral
Do you want to use CSS variables for colors? › yes

```

### To add [shadcn components](https://ui.shadcn.com/docs/components)

for example run:

```bash
pnpm dlx shadcn@latest add button card input
```

> note: Each component may require specific installation instructions, so review the documentation before installing.

## Theme Style

We use [Tailwind.css](https://tailwindcss.com/) for component styling.

To modify theme CSS variables, edit the `src/app/globals.css` file
