import Link from "next/link"

export default function Nav (){
    return (
        <nav class="flex justify-between p-4">
          <Link href="#" class="text-2xl font-medium">Blog</Link>
            <div class="space-x-3">
                <Link href="#">Entrar</Link>
                <Link href="#">Criar Conta</Link>
                <Link href="#">Sobre</Link>
            </div>
        </nav>
  )
}
