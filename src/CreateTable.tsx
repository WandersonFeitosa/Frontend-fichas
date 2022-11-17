import { useState } from "react";
import styles from "./CreateTable.module.css";

export function CreateTable() {
  const [errorMsg, setErrorMsg] = useState("");
  const [returnColor, setReturnColor] = useState(styles.errorMsg);
  function handleCreateTable(event: any) {
    event.preventDefault();
    const form = event.target;
    const newTable = {
      id_usuario: form.userId.value,
      titulo: form.tableName.value,
    };
    const fetchData = async () => {
      const result = await fetch(`http://localhost:3333/createMesa`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTable),
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
    <form onSubmit={handleCreateTable}>
      <input
        type="hidden"
        name="userId"
        value="86e26f4d-f1b6-47e8-9177-06ab31e3d036"
      />
      <input type="text" name="tableName" placeholder="Nome da mesa" />
      <div className={returnColor}>{errorMsg}</div>
      <button type="submit">Submit</button>
    </form>
  );
}
