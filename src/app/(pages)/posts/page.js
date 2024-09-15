'use client'
import { useAuth } from "@/utils/useAuth"
import { useRouter  } from "next/navigation"

export default function Login () {

  const { user } = useAuth()
  const router = useRouter()

  const handleCreatePost = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const content = e.target[1].value

    const response = await fetch('/api/posts/create-post', {
      method: 'POST',
      body: JSON.stringify({ title, content, userId: user?.id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    alert('Post criado com sucesso!')
    router.push('/')

    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
        <h1 className='text-2xl mb-10'>Crie sua postagem</h1>       
        <form className="flex flex-col space-y-2" onSubmit={handleCreatePost}>
          <input className="p-2 w-96 text-black"type="text" placeholder="Título"/>
          <textarea className="p-2 w-96 h-96 text-black" placeholder="Postagem"/>
          <button className="bg-green-950 p-2 hover:bg-green-900"> Criar </button>
      </form>
  </div>
)
}