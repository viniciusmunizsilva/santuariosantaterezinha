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
  data/site.ts          ← horários, contatos, links, endereço e funcionamento (fonte única de conteúdo)
  data/seo.ts           URL do site e dados estruturados (schema.org)
  assets/               imagens importadas (gravura botânica, retrato histórico)
  fonts/                Cormorant Garamond e Inter (auto-hospedadas, licença OFL)
  components/
    layout/             Header (client), Footer
    sections/           Hero, MassTimes, OpeningHours, Location, Contact, Teresinha
    effects/            Intro, Petals, ScrollReveal (client)
    ornaments/          Botanical (gravura de Redouté)
    ui/                 ícones, WhatsAppFab
public/images/          santa-teresinha-statue.png (imagem do hero)
```

Apenas `Header`, `Intro`, `Petals` e `ScrollReveal` são Client Components; o restante é renderizado no servidor e a página é gerada estaticamente.

## Ordem da página

1. Hero · 2. Horários das Santas Missas · 3. Horários de funcionamento · 4. Como chegar · 5. Contato e atendimento · 6. Santa Teresinha · 7. Rodapé

A página responde primeiro a: quando são as missas, quando posso visitar e como entro em contato. A história da santa fica no final.

## Como atualizar o conteúdo

Tudo em `src/data/site.ts`:

- **Horários das missas:** `massSchedule`.
- **Horários de funcionamento:** `site.openingHours` — enquanto a lista estiver vazia, a seção mostra "Consulte os horários de funcionamento pelo WhatsApp". Ao preencher, os horários aparecem automaticamente.
- **Endereço:** `address.street` e `address.postalCode`, quando confirmados.
- **Imagem do hero:** substitua `public/images/santa-teresinha-statue.png` (PNG com fundo transparente, proporção próxima de 1134×1387).

## Fluxo de branches

- `dev`: desenvolvimento — cada push gera um Preview na Vercel.
- `main`: produção — recebe merge da `dev` quando estiver aprovado.

## Comportamento das animações

- **Abertura:** ~4 s (o nome fica 1,5 s em cena), uma vez por sessão (`sessionStorage`). Sobre o vinho, uma rajada de pétalas atravessa a tela enquanto o nome é revelado; a cena se dissolve no hero. Qualquer clique, tecla ou rolagem a encerra; no celular usa metade das pétalas.
- **Pétalas ambientes:** depois da abertura, poucas pétalas nas laterais (10 no desktop, 7 em tablets, 4 no celular), 100% CSS; reduzidas ou desativadas em aparelhos modestos e com economia de dados.
- **`prefers-reduced-motion`:** abertura, pétalas e revelações são desativadas.

## Créditos de imagem

- Imagem de Santa Teresinha (hero): fornecida pela equipe do projeto.
- Retrato histórico: fotografia do Carmelo de Lisieux, via Wikimedia Commons (`File:Teresa-de-Lisieux.jpg`).
- Gravura botânica: *Rosa centifolia foliacea*, de Pierre-Joseph Redouté (*Les Roses*, c. 1820), via Wikimedia Commons (`File:Rosa centifolia foliacea 17.jpg`), domínio público.

## Pendências (dependem da administração do Santuário)

- Horários de funcionamento (visitação e secretaria).
- Endereço completo e CEP.
- Logotipo oficial (hoje o site usa apenas o nome em tipografia; o favicon é uma cruz simples).
- Domínio oficial (`NEXT_PUBLIC_SITE_URL`).
