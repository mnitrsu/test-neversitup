# test-neversitup (frontend)

with node v18.17.1

- Link CDN font "Roboto" from google ( at /src/pages/\_document.tsx )
- Default API server for register and login are //candidate-assignment.neversitup.com ( at /src/services/axios.ts ) \* didn't test yet due the CORS policy issue.
- Default API server for todo is //localhost:3001 ( at /src/services/axios-local.ts ) you need to run with project https://github.com/mnitrsu/test-neversitup/tree/main/todos-json-server

--

- with Next.js (TS)
- Flexbox

--

# $${\color{yellow}* \space FYI: \space API \space server \space didn't \space have \space date \space and \space time}$$

[<img src="https://isntautomatic.com/fe-001.png" width="478" target="_blank" />](https://isntautomatic.com/fe-001.png)

## 1. Project Structure

[<img src="https://isntautomatic.com/fe-002.png" width="270" target="_blank" />](https://isntautomatic.com/fe-002.png)

## 2. React Hooks

useClickOutside.ts + Zustand

## 3. SSR

on /src/pages/todo.tsx

## 4. Services

<pre>GET by default (both, completed true, false).
POST on when open new task drawer.
PATCH when checked on task(s) item(s).
DELETE when open modal task.</pre>

## 5. Form Validation

input should > 2 chars

## Bonus

Due the data on the API server that are different from the assignment.
So, I changed it to the reverse format

[<img src="https://isntautomatic.com/fe-003.png" width="300" target="_blank" />](https://isntautomatic.com/fe-003.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
