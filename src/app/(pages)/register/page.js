"use client";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const data = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => res.json());

    if (data.error) {
      alert(data.error);
    }

    alert("Conta criada com sucesso");
    router.push("/login");

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-10">Crie sua conta</h1>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input className="p-2 w-96 text-black" type="text" placeholder="Nome" />
        <input
          className="p-2 w-96 text-black"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 w-96 text-black"
          type="password"
          placeholder="Senha"
        />
        <button className="bg-green-950 p-2 hover:bg-green-900">Entrar</button>
      </form>
    </div>
  );
}
