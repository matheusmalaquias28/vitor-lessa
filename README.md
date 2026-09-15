# Imersão Faça Sua Venda Render · Landing Page

Next.js 14 (App Router) + React 18. Sem dependências de UI: CSS próprio em `app/globals.css`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel: **New Project → Import** o repositório.
3. Framework Preset: **Next.js** (detectado automaticamente). Build: `next build`. Sem variáveis de ambiente.
4. Deploy.

Ou pelo CLI:

```bash
npx vercel
npx vercel --prod
```

## Onde mexer

| O que | Arquivo |
|---|---|
| Data/hora do evento e contador | `lib/config.js` → `DATA_EVENTO` |
| Link do checkout (todos os CTAs) | `lib/config.js` → `LINK_CHECKOUT` |
| Preços | `lib/config.js` → `PRECO_ANTIGO`, `PRECO`, `PRECO_GRAVACAO` |
| Textos de cada seção | `components/*.jsx` |
| Cores, tipografia, espaçamentos | `app/globals.css` (bloco `:root`) |

## Imagens

Os blocos tracejados são placeholders (`components/Placeholder.jsx`). Para trocar por foto real:

1. Coloque o arquivo em `public/img/` (ex.: `public/img/vitor-hero.jpg`).
2. Substitua o `<Placeholder ... />` por:

```jsx
import Image from "next/image";

<div className="hero-img">
  <Image src="/img/vitor-hero.jpg" alt="Vitor Lessa" width={1080} height={1350} priority />
</div>
```

Placeholders a substituir: hero (vertical), 3 fotos da bio (carrinho 2010, fábrica, restaurante) e 4 imagens dos módulos.

## Campos a preencher antes de publicar

Estão marcados com `[COLCHETES]` no código: plataforma, canal de entrega, prazo e período da gravação, contato de suporte, política de reembolso, dados do responsável pela oferta e selos da Hotmart.
"# vitor-lessa" 
