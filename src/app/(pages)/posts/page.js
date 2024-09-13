export default function Login (){
  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
        <h1 class='text-2xl mb-10'>Crie sua postegem</h1>       
        <form class="flex flex-col space-y-2">
          <input class="p-2 w-96 text-black"type="text" placeholder="Título"/>
          <input class="p-2 w-96 text-black" type="password" placeholder="Postagem"/>
          <button class="bg-green-950 p-2 hover:bg-green-900"> Criar </button>
      </form>
  </div>
)
}
