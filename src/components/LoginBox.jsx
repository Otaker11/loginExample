import "../css/LoginBox.css";

function LoginBox() {
  return (
    <div className="background-body">
      <div className="box-space">
        <div className="loginBox">
          <img src="src\imgs\logo.png" className="logo"></img>
          <p className="inputTitle">Nombre:</p>
          <input type="text"  placeholder="Ejemplo: Josue Cano" />
          <p className="inputTitle">Contraseña:</p>
          <input type="text" placeholder="Ejemplo: 1262651tresguerras#" />
          <button className="loginButton">Iniciar sesion</button>
          <p className="question">
            ¿No cuentas con una cuenta?<span className="spanLogin"> Crear cuenta</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
