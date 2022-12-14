import { useState } from "react";
import styles from "../assets/css/components/Login.module.css";

interface LoginProps {
  setUserInfo: Function;
}
export function Login({ setUserInfo }: LoginProps) {
  const [returnColor, setReturnColor] = useState(styles.errorMsg);
  const [errorMsg, setErrorMsg] = useState("");

  function handleLogin(event: any) {
    event.preventDefault();

    const form = event.target;

    const loginInfo = {
      username: form.username.value.toLowerCase(),
      senha: form.senha.value,
    };

    const logUser = async () => {
      const result = await fetch(`http://localhost:3333/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const jsonResult = await result.json();

      if (result.status < 300) {
        setReturnColor(styles.successMsg);
        setUserInfo(jsonResult.userInfo);
      } else {
        setReturnColor(styles.errorMsg);
      }
      setErrorMsg(jsonResult.message);
    };
    logUser();
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="senha" placeholder="Senha" />
        <div className={returnColor}>{errorMsg}</div>
        <button>Entrar</button>
      </form>
    </div>
  );
}
