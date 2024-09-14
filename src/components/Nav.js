import Link from "next/link"

export default function Nav (){
    return (
        <nav className="flex justify-between p-4 w-full fixed border-white border-b-2 -2 bg-green-900">
          <Link href="/" className="text-2xl font-medium">Blog</Link>
            <div className="space-x-3">
                <Link href="/posts" className="text-xl">Criar uma postagem</Link>
                <Link href="/login" className="text-xl">Entrar</Link>
                <Link href="/register" className="text-xl">Criar Conta</Link>
                <Link href="/about" className="text-xl">Sobre</Link>
            </div>
        </nav>
  )
}
