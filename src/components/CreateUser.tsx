import { useState } from "react";
import styles from "../assets/css/components/CreateUser.module.css";
import globalStyles from "../Global.module.css";
import { base_url } from "../../env.json";

export function CreateUser() {
  const [errorMsg, setErrorMsg] = useState("");
  const [returnColor, setReturnColor] = useState(styles.errorMsg);
  function handleCreateUser(event: any) {
    event.preventDefault();
    const form = event.target;
    const newUser = {
      nome: form.name.value,
      sobrenome: form.lastName.value,
      username: form.username.value.toLowerCase(),
      email: form.email.value,
      senha: form.password.value,
    };
    const fetchData = async () => {
      const result = await fetch(`${base_url}/createUsuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const jsonResult = await result.json();

      if (result.status < 300) {
        setReturnColor(globalStyles.successMsg);
      } else {
        setReturnColor(globalStyles.errorMsg);
      }
      setErrorMsg(jsonResult.message);
    };
    fetchData();
  }
  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" placeholder="Nome" name="name" required />
      <input type="text" placeholder="Sobrenome" name="lastName" required />
      <input type="text" placeholder="Username" name="username" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Senha" name="password" required />
      <div className={returnColor}>{errorMsg}</div>
      <button type="submit">Criar conta</button>
    </form>
  );
}
