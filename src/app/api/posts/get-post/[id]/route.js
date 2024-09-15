import { supabase } from "@/utils/supabase";
import {  NextResponse, NextRequest } from "next/server";


export async function GET(req, { params }) {

  const id = params.id

  console.log('alô' + id)
  const { data: post, error } = await supabase.from("posts").select("*").eq("id", id).single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return new NextResponse(JSON.stringify(post), { status: 200 });
}