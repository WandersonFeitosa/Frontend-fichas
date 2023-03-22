import { useEffect, useState } from "react";
import styles from "../assets/css/components/AddCharOnTable.module.css";
import globalStyles from "../Global.module.css";
import { UserInfo } from "../@types/Types";
import { base_url } from "../../env.json";
import { CreateTable } from "./CreateTable";

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
  const [returnColor, setReturnColor] = useState(globalStyles.errorMsg);

  
  useEffect(() => {
    const listTables = async () => {
      const result = await fetch(`${base_url}/listMesa/${userInfo.id}`, {
        method: "GET",
      });
      const jsonResult = await result.json();
      setTables(jsonResult);
    };
    if (!userInfo.id) {
    } else {
      listTables();
    }
    console.log("tables", tables);
  }, [userInfo]);

  function handleBindChar(event: any) {
    setErrorMsg("");
    event.preventDefault();
    const form = event.target;
    const bindInfo = {
      personagem_id: form.personagem_id.value,
      id_mesa: form.id_mesa.value,
    };
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
        setReturnColor(globalStyles.successMsg);
      } else {
        setReturnColor(globalStyles.errorMsg);
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
