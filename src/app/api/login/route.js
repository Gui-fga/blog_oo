import { supabase } from "@/utils/supabase";
import { NextResponse } from 'next/server';


export async function POST(req) {
    const { email, password } = await req.json();

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return new NextResponse(JSON.stringify({
        data,
        message: "Logado com sucesso!",
        success: true,
    }), { status: 200 });

}