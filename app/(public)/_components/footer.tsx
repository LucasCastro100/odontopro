import Link from "next/link";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand-400 bg-brand-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 p-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-xs flex-col gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-odonto.png" alt="OdontoPro" className="h-10 w-auto" />
          </Link>
          <p className="text-sm text-gray-600">
            Cuidando do seu sorriso com tecnologia e carinho.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
            Contato
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>(11) 99999-0000</li>
            <li>contato@odontopro.com.br</li>
            <li>Av. Exemplo, 123 - São Paulo/SP</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-200 py-4">
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} OdontoPro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}