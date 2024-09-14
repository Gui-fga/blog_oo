export default function Login() {
  const handleSubmit = (e) => {
    const name = form.name.value;
    // const email = e.target[1].value;
    // const password = e.target[2].value;

    console.log('alô')
    console.log(name);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-10">Entre na sua conta</h1>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input className="p-2 w-96 text-black" type="text" placeholder="Email" />
        <input
          className="p-2 w-96 text-black"
          type="password"
          placeholder="Senha"
        />
        <button className="bg-green-950 p-2 hover:bg-green-900"> Entrar </button>
      </form>
    </div>
  );
}
