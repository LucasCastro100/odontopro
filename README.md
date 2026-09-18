# OdontoPro

> Plataforma SaaS para clínicas odontológicas: apresentação dos profissionais e painel de gestão.

## 🪥 Visão Geral

O OdontoPro conecta pacientes aos profissionais da clínica. A landing page exibe a equipe com cards modernos e perfis detalhados, enquanto o painel oferece a área administrativa do negócio.

## ✨ Funcionalidades

- **Landing page pública** — apresentação da clínica com equipe de profissionais
- **Perfil do profissional** — foto, área de atuação, descrição e redes sociais
- **Lista de profissionais** — cards modernos com slider responsivo
- **Painel (dashboard)** — layout com sidebar recolhível + menu de usuário
- **Carregamento otimizado** — skeletons em todas as páginas com dados

## 🛠️ Stack

| Biblioteca | Versão | Uso |
|---|---|---|
| Next.js | 16.3.4 | Framework React (App Router) |
| React | 19.2.8 | UI Library |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 4.x | CSS-first config |
| shadcn/ui | base-nova | Componentes UI (Base UI) |
| Prisma | 7.10.0 | ORM + PostgreSQL (driver adapter) |
| next-auth | 5.0.0-beta | Autenticação (instalado) |
| Lucide React | 1.x | Ícones |

## 🚀 Começando

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura

```
odontopro/
├── app/
│   ├── (public)/            # Rotas públicas (landing + profissionais)
│   └── (painel)/            # Rotas autenticadas (dashboard)
├── components/              # Componentes compartilhados
│   └── ui/                  # shadcn/ui
├── lib/                     # Utilitários + Prisma Client
├── prisma/                  # Schema Prisma
└── .opencode/               # Memória, skills e estrutura de páginas
```

## 🧠 Memória do projeto

Regras e convenções em `.opencode/`:

- `.opencode/skills/odontopro-context/SKILL.md` — contexto do projeto
- `.opencode/skills/ultra-modern-ui/SKILL.md` — regras de design
- `.opencode/pages-structure.md` — estrutura de cada página/rota