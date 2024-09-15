import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 pt-20">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Bem vindo ao Blog sobre Orientação a Objetos{" "}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Descubra artigos interessantes sobre tecnologias relacionadas a
            Orientação a Objetos.
          </p>
          <div className="flex space-x-4">
            <Input placeholder="Pesquise Publicações..." className="max-w-sm" />
            <Button className="hover:bg-green-900 w-40">
              <Search className="mr-2 h-4 w-4" /> Pesquisar
            </Button>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Postagens em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* parte dos cards */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6">Postagens Recentes</h2>
          <Cards />
        </section>
      </main>
    </div>
  );
}
