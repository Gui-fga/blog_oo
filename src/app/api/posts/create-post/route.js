import { supabase } from "@/utils/supabase";
import {  NextResponse } from "next/server";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

export async function POST(req) {
    const { title, content, userId } = await req.json();
    const id = uuidv4();

    // Verifica se o usuário é valido
    if (!uuidValidate(userId)) {
        return NextResponse.json({ error: "Usuário inválido" }, { status: 400 });
    }

    // Verifica se o usuário existe
    const { data: user, error: userError } = await supabase
        .from("users")
        .select("id")
        .eq("id", userId)
        .single();

    if (userError || !user) {
        return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    const { data, error } = await supabase.from("posts").insert([
        { id, title, content, user_id: userId },
    ]);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return new NextResponse(JSON.stringify({
        data,
        message: "Post criado com sucesso!",
        success: true,
    }), { status: 201 });
}