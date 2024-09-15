"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/utils/useAuth";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();

  const getPost = async () => {
    const response = await fetch(`/api/posts/get-post/${id}`);
    const data = await response.json();
    setTitle(data.title || "");
    setContent(data.content || "");
  };

  useEffect(() => {
    getPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/posts/update-post/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, user_id: user?.id }),
    });

    if (response.ok) {
      alert("Postagem editada com sucesso");
      router.push("/");
    } else {
      alert("Erro ao editar postagem");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-10">Edite sua postagem</h1>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          className="p-2 w-96 text-black"
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-2 w-96 h-96 text-black"
          placeholder="Postagem"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="bg-green-950 p-2 hover:bg-green-900" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}