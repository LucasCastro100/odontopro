# OdontoPro

> Plataforma SaaS para clínicas odontológicas: apresentação pública dos profissionais e painel de gestão.

O **OdontoPro** conecta pacientes aos profissionais da clínica. A **landing page pública** exibe a equipe com hero, cards modernos e slider responsivo, além de perfis detalhados com área de atuação, descrição, endereço e redes sociais. O **painel** (`/dashboard`) é a área administrativa do negócio, protegida por autenticação (NextAuth + Google), com sidebar recolhível e menu de usuário.

O projeto é um SaaS em evolução: o núcleo público e a autenticação estão funcionais, enquanto várias telas do painel e o CRUD de serviços estão em construção (detalhes nas [Observações](#observações-importantes)).

## Stack

| Biblioteca | Versão | Uso |
|---|---|---|
| Next.js (App Router) | **16.3.4** | framework React |
| React / React DOM | 19.2.8 | UI |
| TypeScript | ^5 | tipagem |
| Tailwind CSS | ^4 | CSS-first config |
| shadcn/ui | ^4.21.0 | componentes UI |
| Base UI (`@base-ui/react`) | ^1.8.0 | primitivas de UI |
| Prisma | **7.10.0** | ORM (generator `prisma-client`, client gerado em `lib/generated/prisma`) |
| @prisma/adapter-pg + pg | ^7.10 / ^8.23 | driver adapter PostgreSQL |
| next-auth (Auth.js) | 5.0.0-beta.32 | autenticação (provider Google + PrismaAdapter) |
| @auth/prisma-adapter | ^2.11.3 | persistência de contas/sessões |
| lucide-react | ^1.43.0 | ícones |
| ESLint / eslint-config-next | ^9 / 16.3.4 | lint |
| pnpm | 11.9.0 (`packageManager`) | gerenciador de pacotes |

## Funcionalidades

**Público (`app/(public)`)**
- **Landing page** (`/`) — hero + lista/slider de profissionais
- **Perfil do profissional** (`/professionals/[id]`) — foto, área de atuação, descrição, endereço e redes sociais (Instagram, Facebook, LinkedIn, WhatsApp)
- **Menu de login** — sign-in via Google (server action `handleRegister` → `signIn(provider)`)

**Painel (`app/(painel)`) — requer sessão**
- **Layout autenticado** — sidebar recolhível + menu do usuário (sair da conta)
- **Rotas**: `/dashboard`, `/dashboard/plans`, `/dashboard/profile`, `/dashboard/services`
- **Proteção de rota** — `proxy.ts` redireciona quem não tem sessão em `/dashboard/*` para `/`
- **Componentes de serviço prontos** — `ServicesList`, `ServiceCrudModal`, `ServiceCard` (ainda não conectados às páginas)

**Plataforma**
- **Persistência** — PostgreSQL via Prisma: usuários, contas/sessões OAuth, serviços, agendamentos, lembretes, assinaturas (`Plan`: `BASIC` | `PROFESSIONAL`)
- **Skelets de carregamento** — skeletons nas rotas públicas com dados

## Pré-requisitos

- Node.js 20+ e **pnpm** 11+
- PostgreSQL acessível
- Credenciais OAuth do Google (Console do Google Cloud)

## Instalação e execução

```bash
# 1. Dependências (o postinstall roda `prisma skills sync`)
pnpm install

# 2. Variáveis de ambiente
#    crie o arquivo .env na raiz com as chaves da tabela abaixo

# 3. Banco de dados
pnpm exec prisma migrate deploy   # aplica migrations existentes
# ou, em dev com reset:
pnpm exec prisma migrate dev
pnpm exec prisma generate          # regenera o client (saída em lib/generated/prisma)

# 4. Desenvolvimento
pnpm dev

# 5. Build de produção
pnpm build
pnpm start
```

Abra [http://localhost:3000](http://localhost:3000).

### Scripts do `package.json`

| Script | Comando |
|---|---|
| `pnpm dev` | `next dev` |
| `pnpm build` | `next build` |
| `pnpm start` | `next start` |
| `pnpm lint` | `eslint` |
| `pnpm postinstall` | `prisma skills sync \|\| exit 0` |

## Estrutura de pastas

```
odontopro/
├── app/
│   ├── (public)/                 # rotas públicas
│   │   ├── page.tsx              # landing (hero + profissionais)
│   │   ├── professionals/[id]/   # perfil do profissional
│   │   ├── _actions/             # server actions (login/logout)
│   │   └── _components/          # hero, header, footer, cards e slider
│   ├── (painel)/                 # rotas autenticadas
│   │   ├── layout.tsx            # layout com sidebar + user-menu
│   │   └── dashboard/
│   │       ├── page.tsx          # dashboard
│   │       ├── plans/  profile/  services/
│   │       └── _components/user-menu.tsx
│   ├── api/auth/[...nextauth]/   # handler do NextAuth (Auth.js v5)
│   ├── 404/, not-found.tsx       # páginas de erro
│   ├── layout.tsx, globals.css   # raiz do app
├── components/
│   ├── ui/                       # shadcn/ui (avatar, button, card, sidebar…)
│   ├── service-*.tsx             # CRUD de serviços (ainda não plugado nas páginas)
│   ├── clinic-provider.tsx       # contexto da clínica logada
│   ├── session-auth.tsx, toast-provider.tsx, crud-modal.tsx, main.tsx
├── lib/
│   ├── prisma.ts                 # PrismaClient com adapter pg (singleton em dev)
│   ├── auth.ts                   # NextAuth (Google + PrismaAdapter)
│   ├── getSession.ts             # helper de sessão (usado no proxy.ts)
│   ├── data/professionals.ts     # dados dos profissionais (mock/local)
│   ├── generated/prisma/         # client Prisma gerado (não editar à mão)
│   ├── types.ts, utils.ts
├── prisma/
│   ├── schema.prisma             # models: User, Service, Appointment, Remider,
│   │                             #   Subscription, Account, Session, Authenticator…
│   └── migrations/               # 2 migrations SQL
├── prisma7.config.ts             # config do Prisma 7 (schema, migrations, datasource)
├── proxy.ts                      # protege /dashboard/* (convenção Next 16)
├── types/next.auth.d.ts          # extensões de tipo do NextAuth
└── .opencode/                    # memória, skills e estrutura de páginas do projeto
```

## Variáveis de ambiente

Somente os **nomes** das chaves (valores em `.env`, não versionado):

| Chave | Descrição |
|---|---|
| `DATABASE_URL` | connection string do PostgreSQL (usada por `lib/prisma.ts` e `prisma7.config.ts`) |
| `AUTH_GOOGLE_ID` | Client ID OAuth do Google |
| `AUTH_GOOGLE_SECRET` | Client Secret OAuth do Google |
| `NODE_ENV` | ambiente (`production`/`development`) — usado no singleton do Prisma |

> O NextAuth está configurado com `trustHost: true`; não há `AUTH_SECRET` referenciado explicitamente no código.

## Banco de dados

- **PostgreSQL** com Prisma 7 (driver adapter `@prisma/adapter-pg`).
- **Schema** (`prisma/schema.prisma`): `User` (com `subscription`, `services`, `reminders`, `appointments`, `accounts`, `sessions`, `Authenticator`), `Service`, `Appointment`, `Remider`, `Subscription` (enum `Plan`: `BASIC`/`PROFESSIONAL`), `Account`, `Session`, `VerificationToken`, `Authenticator`.
- **Migrations** (`prisma/migrations/`):
  - `20260910230529_create_tables` — enum `Plan` e todas as tabelas
  - `20260910231151_alter_table_user` — coluna `times TEXT[]` em `User`

```bash
pnpm exec prisma migrate dev      # cria/aplica migrations (dev)
pnpm exec prisma migrate deploy   # aplica em produção
pnpm exec prisma studio           # GUI de inspeção
pnpm exec prisma generate         # regenera o client em lib/generated/prisma
```

## Observações importantes

- **Profissionais são dados locais**: a lista pública lê de `lib/data/professionals.ts` (mock estático), não do banco. O modelo `Professional` não existe no schema Prisma.
- **Painel em construção**: as páginas `/dashboard`, `/dashboard/plans`, `/dashboard/profile` e `/dashboard/services` retornam apenas um título (`<h1>`) por enquanto.
- **CRUD de serviços desconectado**: `ServicesList` busca `GET /api/services` por padrão, mas **essa rota não existe** em `app/api` (só `/api/auth/[...nextauth]`) — os componentes `services-list`, `service-crud-modal`, `service-card` e `clinic-provider` ainda não estão ligados a nenhuma página.
- **Prisma 7**: o schema usa o generator `prisma-client` com saída em `lib/generated/prisma` e o arquivo `prisma7.config.ts` define a datasource — não use comandos antigos (`@prisma/client` clássico) sem checar a config.
- **Client gerado versionado**: `lib/generated/prisma/` é gerado; rode `prisma generate` após mudar o schema em vez de editar à mão.
- **Memória do projeto**: `.opencode/skills/odontopro-context/SKILL.md` (contexto), `.opencode/skills/ultra-modern-ui/SKILL.md` (regras de design) e `.opencode/pages-structure.md` (estrutura das páginas) documentam as convenções.
- **Guia de agentes**: `AGENTS.md` avisa que esta versão do Next.js tem breaking changes — consulte a documentação em `node_modules/next/dist/docs/` antes de codar.
