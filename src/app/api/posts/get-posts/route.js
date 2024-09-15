import { supabase } from "@/utils/supabase";
import {  NextResponse } from "next/server";

export async function GET() {
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return new NextResponse(JSON.stringify(posts), { status: 200 });
}