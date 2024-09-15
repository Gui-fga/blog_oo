import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { title, content, user_id } = await req.json();
  const id = params.id;

  console.log(title, content, user_id, id);
  // Fetch the post to verify ownership
  const { data: post, error: fetchError } = await supabase
    .from("posts")
    .select("user_id")
    .eq("user_id", user_id)
    .single();

  if (fetchError) {
    return new NextResponse(
      JSON.stringify({ error: "Erro ao carregar post" }),
      {
        status: 400,
      }
    );
  }

  // checa se o usuário é o dono do post
  if (post.user_id !== user_id) {
    return new NextResponse(
      JSON.stringify({ error: "Você não tem permissão para editar este post" }),
      { status: 403 }
    );
  }

  // Atualiza o post
  const { data: updatedPost, error: updateError } = await supabase
    .from("posts")
    .update({
      title: title,
      content: content,
    })
    .eq("id", id);

  if (updateError) {
    return new NextResponse(
      JSON.stringify({ error: "Erro ao atualizar post" }),
      { status: 400 }
    );
  }

  return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
}
