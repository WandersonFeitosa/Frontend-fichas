import { useState } from "react";
import styles from "../assets/css/components/CreateTable.module.css";
import globalStyles from "../Global.module.css";
import { UserInfo } from "../@types/Types";

interface CreateTableProps {
  userInfo: UserInfo;
}

export function CreateTable({ userInfo }: CreateTableProps) {
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
        setReturnColor(globalStyles.successMsg);
      } else {
        setReturnColor(globalStyles.errorMsg);
      }
      setErrorMsg(jsonResult.message);    
    };
    fetchData();
  }
  return (
    <form onSubmit={handleCreateTable}>
      <input type="text" name="tableName" placeholder="Nome da mesa" />
      <div className={returnColor}>{errorMsg}</div>
      <button type="submit">Submit</button>
    </form>
  );
}
