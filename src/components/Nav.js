import Link from "next/link"

export default function Nav (){
    return (
        <nav class="flex justify-between p-4 w-full fixed border-white border-b-2 -2 bg-green-900">
          <Link href="/" class="text-2xl font-medium">Blog</Link>
            <div class="space-x-3">
                <Link href="/posts" class="text-xl">Criar uma postagem</Link>
                <Link href="/login" class="text-xl">Entrar</Link>
                <Link href="/register" class="text-xl">Criar Conta</Link>
                <Link href="/about" class="text-xl">Sobre</Link>
            </div>
        </nav>
  )
}
