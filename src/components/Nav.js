import Link from "next/link"

export default function Nav (){
    return (
        <nav class="flex justify-between p-4 w-full fixed border-white border-b-2 -2 bg-green-900">
          <Link href="/" class="text-2xl font-medium">Blog</Link>
            <div class="space-x-3">
                <Link href="/login">Entrar</Link>
                <Link href="/register">Criar Conta</Link>
                <Link href="/about">Sobre</Link>
            </div>
        </nav>
  )
}
