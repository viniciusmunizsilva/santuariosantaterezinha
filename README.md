# Santuário Santa Teresinha

Landing page institucional do **Santuário Santa Teresinha — Santuário do Amor Misericordioso de Deus**, em Taboão da Serra/SP.

Identidade visual inspirada em Santa Teresinha do Menino Jesus, nas rosas e na espiritualidade do Carmelo.

## Stack

- [Next.js](https://nextjs.org) (App Router) · React · TypeScript
- Tailwind CSS v4 (tokens da identidade em `src/app/globals.css`)
- Sem bibliotecas de animação: abertura, pétalas e revelações são CSS + três Client Components pequenos

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build
npm run lint
npm run typecheck
```

Em produção, defina `NEXT_PUBLIC_SITE_URL` com o domínio oficial (usado em canonical, Open Graph e sitemap). Na Vercel, o domínio de produção é detectado automaticamente.

## Estrutura

```
src/
  app/                  layout (fontes, SEO), página, estilos globais, ícone, OG image, robots, sitemap
  data/site.ts          ← horários, contatos, links e endereço (fonte única de conteúdo)
  data/seo.ts           URL do site e dados estruturados (schema.org)
  assets/               imagens otimizadas por next/image
  fonts/                Cormorant Garamond e Inter (auto-hospedadas, licença OFL)
  components/
    layout/             Header (client), Footer
    sections/           Hero, About, Teresinha, MassTimes, Location, Contact
    effects/            Intro, Petals, ScrollReveal (client)
    ornaments/          Rose, RoseSpray, Leaf, Divider, Emblem, SanctuaryIllustration
    ui/                 SectionHeading, ícones
```

Apenas `Header`, `Intro`, `Petals` e `ScrollReveal` são Client Components; todo o restante é renderizado no servidor e a página é gerada estaticamente.

## Como atualizar o conteúdo

- **Horários das missas, telefone, WhatsApp, endereço:** `src/data/site.ts`.
- **Endereço:** preencha `address.street` e `address.postalCode` quando confirmados — a seção de localização e os dados estruturados passam a exibi-los.
- **Fotografia do Santuário:** a seção "O Santuário" usa uma ilustração em traço (`SanctuaryIllustration`). Para usar a foto oficial, adicione-a em `src/assets/` e troque a ilustração por um `<Image>` em `src/components/sections/About.tsx`.

## Comportamento das animações

- **Abertura (reveal):** ~3 s, uma vez por sessão (`sessionStorage`); qualquer clique, tecla ou rolagem a encerra; simplificada no mobile.
- **Pétalas:** geradas uma única vez no cliente após a página ficar ociosa; movimento 100% CSS (transform/opacity). 16 no desktop, 10 em tablets, 5 no mobile; reduzidas ou desativadas em aparelhos modestos e com economia de dados.
- **`prefers-reduced-motion`:** abertura, pétalas, parallax e revelações são desativados.

## Créditos de imagem

- Retrato de Santa Teresinha: fotografia histórica do Carmelo de Lisieux, via Wikimedia Commons (`File:Teresa-de-Lisieux.jpg`), em domínio público.
- Rosas, ornamentos e a ilustração do Santuário: desenhos vetoriais criados para este projeto.

## Pendências (dependem da administração do Santuário)

- Logotipo oficial (o emblema atual — cruz sobre a rosa — é provisório).
- Fotografias oficiais do Santuário (fachada e interior).
- Imagem de Santa Teresinha com as rosas e o crucifixo, de uso autorizado, em boa resolução (o hero usa hoje uma fotografia histórica de 565×720 px).
- Endereço completo e CEP.
- Domínio oficial (`NEXT_PUBLIC_SITE_URL`).
- Confirmação da autoria/redação da frase-título da seção de Santa Teresinha.
