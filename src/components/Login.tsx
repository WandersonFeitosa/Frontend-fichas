import { useState } from "react";
import globalStyles from "../Global.module.css";
import styles from "../assets/css/components/Login.module.css";
import { base_url } from "../../env.json";

interface LoginProps {
  setUserInfo: Function;
}
export function Login({ setUserInfo }: LoginProps) {
  const [returnColor, setReturnColor] = useState(globalStyles.errorMsg);
  const [errorMsg, setErrorMsg] = useState("");
 
  function handleLogin(event: any) {
    event.preventDefault();

    const form = event.target;

    const loginInfo = {
      username: form.username.value.toLowerCase(),
      senha: form.senha.value,
    };

    const logUser = async () => {
      const result = await fetch(`${base_url}/login`, {
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
        setReturnColor(globalStyles.errorMsg);
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
        <button className={styles.loginButton}>Entrar</button>
      </form>
    </div>
  );
}
