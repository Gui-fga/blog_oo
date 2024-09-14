import { supabase } from "@/utils/supabase";
import { NextResponse } from 'next/server';

export async function POST(req) { 
    const { name, email, password } = await req.json();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { displayName: name }
        }
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const id = data.user.id

    const { data: insertData, error: insertError } = await supabase
    .from('users')
    .insert([
        { id: id, name: name }
    ]);

    if (insertError) {
        return NextResponse.json({ error: insertError.message }, { status: 400 });
    }

    return new NextResponse(JSON.stringify({
        data,
        message: "Usuário criado com sucesso!",
        success: true,
    }), {status: 201});
}