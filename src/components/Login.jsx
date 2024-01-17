import '../Login.css'

function Login() {
  return (
<div className="background-body">
  <div className="box-space">
    <div className="box">
      <img src='src\imgs\logo.png' className="logo"></img>
      <p className="inputTitle">Nombre:</p>
      <input type="text" placeholder="Usuario"/>
      <p className="inputTitle">Contraseña:</p>
      <input type="text" placeholder="Contraseña"/>
      <button>Iniciar sesion</button>
      <p>¿No cuentas con una cuenta?<span>  ¿Crear cuenta?</span></p>
    </div>
  </div>
</div>
  )
}

export default Login
