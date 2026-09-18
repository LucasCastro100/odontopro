# Memória do Projeto OdontoPro

## Histórico de Decisões

### 2024 - Início do Projeto
- Criado com create-next-app
- Configurado Next.js 16 com App Router
- Adicionado React 19
- Configurado Tailwind CSS 4
- Adicionado shadcn/ui com estilo base-nova

### 2025 - Painel e Sidebar
- Layout do painel com `Sidebar collapsible="icon"` (recolhe para ícones, 3rem)
- `UserMenu` criado (`app/(painel)/_components/user-menu.tsx`): avatar + dropdown (Perfil/Configurações/Sair)
- Componentes shadcn adicionados: `avatar`, `dropdown-menu` (Base UI)
- `cursor-pointer` adicionado nos botões de menu do sidebar
- Grupo "Navegação" no menu da sidebar com "Voltar ao site" (moveu do footer para o conteúdo)
- Ícone de Serviços: `Stethoscope`

### Prisma Setup (set/2025)
- Prisma 7.10.0 instalado (`prisma` dev + `@prisma/client`, `@prisma/adapter-pg`, `pg`, `dotenv`)
- **Bug corrigido**: `prisma.config.ts` usava `definePrismaConfig` (não existe no 7.10) → trocado para `defineConfig` de `prisma/config`
- **pnpm**: build scripts `@prisma/engines` e `prisma` aprovados via `pnpm-workspace.yaml` (`allowBuilds: true`)
- `prisma init --datasource-provider postgresql` criou: `prisma/schema.prisma`, `prisma7.config.ts`, `.env`
- **Importante**: no Prisma 7, `prisma7.config.ts` tem prioridade sobre `prisma.config.ts` (verificado em `@prisma/config`)
- `prisma.config.ts` antigo (com `skills`) foi removido; `skills` consolidado no `prisma7.config.ts` (com cast `as never`)
- Schema gera Prisma Client em `lib/generated/prisma`

### Estrutura de Rotas
- `(public)`: Rotas públicas para landing page
  - Header com navegação
  - Footer com informações
  - Sheet para profissionais
- `(painel)`: Rotas autenticadas
  - Dashboard principal
  - Profile (`/dashboard/profile`)
  - Services (`/dashboard/services`)

### Componentes Implementados
1. **Header** (`app/(public)/_components/header.tsx`)
   - Navegação fixa no topo
   - Logo OdontoPro
   - Links de navegação
   - Botão "Para profissionais"

2. **Footer** (`app/(public)/_components/footer.tsx`)
   - Informações da empresa
   - Links de navegação
   - Contato

3. **ProfessionalsSheet** (`app/(public)/_components/professionals-sheet.tsx`)
   - Sheet lateral para profissionais
   - Benefícios listados
   - Call-to-action

4. **Main** (`components/main.tsx`)
   - Componente compartilhado para layout principal
   - Centraliza conteúdo com max-width

5. **UserMenu** (`app/(painel)/_components/user-menu.tsx`)
   - Avatar (Base UI) com iniciais do usuário em brand/10
   - Ao clicar abre dropdown (Base UI)
   - Itens: Perfil → `/dashboard/profile`, Configurações → `/dashboard/configuracoes`, Sair (destructive)
   - `DropdownMenuLabel` DEVE ficar dentro de `DropdownMenuGroup` (erro de runtime caso contrário)
   - Props: `name`, `email`, `avatarUrl` (valores default: Dr. João Silva / joao@odontopro.com)

### Tema e Cores
- **Brand Primary**: #14b8a4 (teal)
- **Brand Hover**: #0d796c
- **Fonte**: Nunito
- **Estilo**: base-nova (shadcn/ui)

## Pendências Atuais

### Alta Prioridade
- [ ] Implementar autenticação de usuários (next-auth instalado)
- [ ] Configurar DATABASE_URL real no `.env`
- [ ] Definir modelos no `prisma/schema.prisma` (usuários, clínicas, pacientes, consultas)
- [ ] Rodar `prisma migrate dev` + `prisma generate`
- [ ] Desenvolver funcionalidades do dashboard

### Média Prioridade
- [ ] Adicionar mais componentes shadcn/ui
- [ ] Implementar formulários de contato
- [ ] Criar páginas de serviço

### Baixa Prioridade
- [ ] Adicionar animações
- [ ] Implementar modo dark
- [ ] Otimizar performance

## Convenções Estabelecidas

### Componentes
- Usar `"use client"` apenas quando necessário
- Componentes específicos da rota em `_components/`
- Componentes compartilhados em `components/`
- Seguir padrão shadcn/ui

### Estilização
- Tailwind CSS com variáveis CSS
- Usar `cn()` para combinar classes
- Cores do tema via CSS variables
- Fonte Nunito via next/font

### Rotas
- Route Groups para organizar
- `(public)` para rotas públicas
- `(painel)` para rotas autenticadas

## Notas para Futuro

1. **Autenticação**: NextAuth.js 5.0.0-beta.32 já instalado
2. **Banco de Dados**: Prisma 7.10 + PostgreSQL via `@prisma/adapter-pg`
3. **API**: Next.js API Routes ou Server Actions
4. **Deploy**: Vercel (recomendado para Next.js)
5. **Prisma 7**: `prisma7.config.ts` tem prioridade sobre `prisma.config.ts`; `.env` NÃO é carregado automático — precisa `import "dotenv/config"` no config (já adicionado)

## Ultima Atualização

- Data: 10/09/2026
- Status: Painel com sidebar funcional, Prisma configurado
- Próximo passo: Configurar DATABASE_URL real, definir modelos Prisma, implementar autenticação
