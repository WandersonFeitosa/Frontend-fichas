import { useState } from "react";
import styles from "../assets/css/components/CreateUser.module.css";

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
      const result = await fetch(`http://localhost:3333/createUsuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const jsonResult = await result.json();

      if (result.status < 300) {
        setReturnColor(styles.successMsg);
      } else {
        setReturnColor(styles.errorMsg);
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
