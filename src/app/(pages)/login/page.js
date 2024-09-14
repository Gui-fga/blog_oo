"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const { data, error } = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());

    if (error) {
      alert(error.message);
    }
    alert("Login realizado com sucesso");
    router.push("/");
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-10">Entre na sua conta</h1>
      <form className="flex flex-col space-y-2" onSubmit={handleLogin}>
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
        <button type="submit" className="bg-green-950 p-2 hover:bg-green-900">
          {" "}
          Entrar{" "}
        </button>
      </form>
    </div>
  );
}
