"use client";
import Link from "next/link";
import { useAuth } from "@/utils/useAuth";
import 'primeicons/primeicons.css';


export default function Nav() {
  const { user } = useAuth();

  return (
    <nav className="flex justify-between p-4 w-full fixed border-white border-b-2 -2 bg-green-900">
      <Link href="/" className="text-2xl font-medium">
        Blog
      </Link>
      <div className="space-x-3">
        {!user ? (
          <>
            <Link href="/login" className="text-xl">
              Entrar
            </Link>
            <Link href="/register" className="text-xl">
              Criar Conta
            </Link>
          </>
        ) : (
          <>
            <Link href="/posts" className="text-xl">
              Criar uma postagem
            </Link>
            <Link href="/about" className="text-xl">
              Sobre
            </Link>
            <p>Olá, {user?.user_metadata.displayName}</p>
          </>
        )}
        <button type="button">
          <i className="pi pi-sign-out"></i>
          <span>sair</span>
        </button>
      </div>
    </nav>
  );
}
