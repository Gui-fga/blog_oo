"use client";
import Link from "next/link";
import { useAuth } from "@/utils/useAuth";
import { useRouter } from "next/navigation";

export default function Nav() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        router.push('/login');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while logging out.');
    }
  };

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

            <button onClick={handleLogout}>Sair</button>
          </>
        )}
      </div>
    </nav>
  );
}
