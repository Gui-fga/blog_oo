import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      return NextResponse.json(
        { error: "Erro ao fazer logout" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Logout feito com sucesso",
        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Erro inesperado ao fazer logout" },
      { status: 500 }
    );
  }
}