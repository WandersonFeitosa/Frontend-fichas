import { useEffect, useState } from "react";
import styles from "../assets/css/components/AddCharOnTable.module.css";
import { UserInfo } from "../@types/Types";

interface AddCharOnTable {
  userInfo: UserInfo;
}

export function AddCharOnTable({ userInfo }: AddCharOnTable) {
  const [tables, setTables] = useState([
    {
      id: "",
      titulo: "",
    },
  ]);
  const [errorMsg, setErrorMsg] = useState("");
  const [returnColor, setReturnColor] = useState(styles.errorMsg);

  useEffect(() => {
    const listTables = async () => {
      const result = await fetch(
        `http://localhost:3333/listMesa/${userInfo.id}`,
        {
          method: "GET",
        }
      );
      const jsonResult = await result.json();
      setTables(jsonResult);
    };
    if (!userInfo.id) {
    } else {
      listTables();
    }
  }, [userInfo]);

  function handleBindChar(event: any) {
    setErrorMsg("");
    event.preventDefault();
    const form = event.target;
    const bindInfo = {
      personagem_id: form.personagem_id.value,
      id_mesa: form.id_mesa.value,
    };
    console.log(bindInfo);
    const bindChar = async () => {
      const result = await fetch(`http://localhost:3333/vincularMesa`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bindInfo),
      });
      const jsonResult = await result.json();
      console.log(jsonResult);
      if (result.status < 300) {
        setReturnColor(styles.successMsg);
      } else {
        setReturnColor(styles.errorMsg);
      }
      setErrorMsg(jsonResult.message);
    };

    bindChar();
  }
  return (
    <form onSubmit={handleBindChar}>
      <select name="id_mesa">
        {tables.map((table) => {
          return (
            <option key={table.id} value={table.id}>
              {table.titulo}
            </option>
          );
        })}
      </select>

      <input
        className={styles.addCharTableInput}
        type="text"
        placeholder="Id do personagem"
        name="personagem_id"
      />
      <div className={returnColor}>{errorMsg}</div>
      <button type="submit"> Submit</button>
    </form>
  );
}
