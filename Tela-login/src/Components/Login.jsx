import {FaUser, FaLock, FaIdCard, FaAddressBook } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("teste", nome, password, email, cpf);
     alert("enviando os dados do usuario:" + nome + " - " + password + " - " + email + " - " + cpf );
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>

            <div className="input-field">
                <input type='nome' placeholder='Nome' 
                onChange={(e) => setNome(e.target.value)}/> 
                    <FaUser className="icon" />
            </div>

            <div className="input-field">
                <input type="email" placeholder='E-mail' 
                onChange={(e) => setEmail(e.target.value)}/>
                    <FaIdCard className="icon" />
            </div>

            <div className="input-field">
                <input type="cpf" placeholder='CPF' 
                onChange={(e) => setCpf(e.target.value)}/>
                    <FaAddressBook className="icon"/>
            </div>

            <div className="input-field">
                <input type="password" placeholder='Senha' 
                onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon" />
            </div>

            <button>Entrar</button>

        </form>
    </div>
  )
}

export default Login
