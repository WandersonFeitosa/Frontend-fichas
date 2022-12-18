import { useEffect, useState } from "react";
import { CharInfos, UserInfo } from "./InterfaceTypes";

interface ShowCharInfoProps {
  userInfo: UserInfo;
}

export function ShowCharInfo({ userInfo }: ShowCharInfoProps) {


  const [chars, setChars] = useState([
    {
      id: "",
      nome: "",
    },
  ]);

  

  useEffect(() => {
    const listChars = async () => {
      const result = await fetch(
        `http://localhost:3333/listPersonagem/${userInfo.id}`,
        {
          method: "GET",
        }
      );
      const jsonResult = await result.json();
      setChars(jsonResult);
      console.log(jsonResult);
    };
    if (!userInfo.id) {
    } else {
      listChars();
    }
  });

  return (
    <div>
      <select name="char_id">
        {chars.map((char) => {
          return (
            <option key={char.id} value={char.id}>
              {char.nome}
            </option>
          );
        })}
      </select>
    </div>
  );
}
