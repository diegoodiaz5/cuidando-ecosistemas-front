import "./User.css"
import Login from "../Login/Login";
import Register from "../Register/Register"

export default function User() {

  const showLogIn = () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("logInScreen").style.display = "flex";
    document.getElementById("registerContainer").style.display = "none";
  }

  const showRegister = () => {
    document.getElementById("logInScreen").style.display = "none";
    document.getElementById("registerContainer").style.display = "flex";
  }
  return (
    <>
      {localStorage.token ?
        window.location.replace("/home") : <div id="userContainer">
          <div id="firstScreen" onClick={showLogIn}>
            <img src={require('../Images/logo.png')} alt="logo" id="logo" />
            <h3 id="caringText">CUIDANDO</h3>
            <h4 id="ecosystemsText">ECOSISTEMAS</h4>
            <h1 id="hiTitle">¡Hi!</h1>
          </div>
          <Login showRegister={showRegister} />
          <Register showLogin={showLogIn} />
        </div >
      }
    </>
  )
} 