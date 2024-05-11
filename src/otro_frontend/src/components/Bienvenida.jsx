const Login = () => {

  return (
    <section className="mt-5 text-center">
      <h1>Bienvenido al Sistema de Credenciales en ICP</h1>
      <img src="images/fondo1.png" id="fondo" />
      <img src="images/fondo1.png" id="fondo1" />
      <div id="home">
        <aside id="izq">
          <img src="src/components/public/logo.png" id="logo" />
        </aside>
        <aside id="der">
          <br /><br />
          <button onclick="mostrar('verificacion', 'home')">Verificación</button>
          <br /><br />
          <button onclick="mostrar('registro', 'home')">Registro</button>
          <br /><br />
          <button onclick="mostrar('registro', 'home')">Pagos</button>
        </aside>
      </div>
    </section>
  )
}


export default Login