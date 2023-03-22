import { useState, useEffect } from "react";
import globalStyles from "../Global.module.css";
import { UserInfo } from "../@types/Types";
import { base_url } from "../../env.json";

interface CreateTableProps {
  userInfo: UserInfo;
  setUserInfo: Function;
}

export function CreateTable({ userInfo, setUserInfo }: CreateTableProps) {
  const [errorMsg, setErrorMsg] = useState("");
  const [returnColor, setReturnColor] = useState(globalStyles.errorMsg);
  function handleCreateTable(event: any) {
    setErrorMsg("");
    setReturnColor(globalStyles.errorMsg);
    event.preventDefault();

    const form = event.target;
    const tableTitle = form.tableName.value;

    if (!tableTitle.trim().length) {
      setErrorMsg("Preencha o campo");
      return;
    }

    const newTable = {
      id_usuario: userInfo.id,
      titulo: form.tableName.value,
    };
    const createTable = async () => {
      const result = await fetch(`${base_url}/createMesa`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTable),
      });
      const jsonResult = await result.json();

      if (result.status < 300) {
        setReturnColor(globalStyles.successMsg);        
        //Faço isso para que o useEffect de AddCharOnTable.tsx seja executado novamente
        const oldNewTables = userInfo.newTables || 0;
        const newNewTables = oldNewTables + 1;
        setUserInfo({ ...userInfo, newTables: newNewTables });
      } else {
        setReturnColor(globalStyles.errorMsg);
      }
      setErrorMsg(jsonResult.message);
    };
    createTable();
  }
  return (
    <form onSubmit={handleCreateTable}>
      <input type="text" name="tableName" placeholder="Nome da mesa" />
      <div className={returnColor}>{errorMsg}</div>
      <button type="submit">Submit</button>
    </form>
  );
}
