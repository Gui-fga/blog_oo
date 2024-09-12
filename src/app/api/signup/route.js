import { supabase } from "@/utils/supabase";
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { name, email, password } = await req.json();

    const { data, error } = await this.supabase.getSignup(email, password, {
        data: { displayName: name }
      });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Optionally, you can store the user's name in a separate table or update the user's profile
    // await supabase.from('profiles').insert([{ id: user.id, name: name }]);

    return new NextResponse(JSON.stringify({
        data,
        message: "User created successfully",
        success: true,
    }), {status: 201})
}