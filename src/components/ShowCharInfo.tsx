import { ChangeEvent, useState } from "react";
import { CharInfo, SkillsInfo, UserInfo } from "../@types/Types";
import styles from "../assets/css/components/ShowCharInfo.module.css";
import env from "../../env.json";

interface ShowCharInfoProps {
  userInfo: UserInfo;
}

export function ShowCharInfo({ userInfo }: ShowCharInfoProps) {
  const [chars, setChars] = useState<CharInfo[]>([]);
  const [charInfo, setCharInfo] = useState<CharInfo>();

  function showChars() {
    const listChars = async () => {
      const result = await fetch(
        `${env.base_url}/listPersonagem/${userInfo.id}`,
        {
          method: "GET",
        }
      );
      const jsonResult = await result.json();
      setChars(jsonResult);
    };
    if (!userInfo.id) {
    } else {
      listChars();
    }
  }

  function showCharInfo(event: ChangeEvent<HTMLSelectElement>) {
    var charStatus: CharInfo | undefined = chars.find(
      (x) => x.id === event?.target.value
    );
    setCharInfo(charStatus);
  }

  return (
    <div>
      <select
        onClick={showChars}
        onChange={showCharInfo}
        name="char_id"
        defaultValue=""
      >
        <option value="">Selecione um personagem</option>
        {chars.map((char) => {
          return (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          );
        })}
      </select>

      <div className={styles.charInfoBlock}>
        <div className={styles.charInfoCollmun}>
          <div className={styles.charInfoItem}>
            <span>Id: </span>
            {charInfo?.id}
          </div>
          <div className={styles.charInfoItem}>
            <span>Nome: </span>
            {charInfo?.name}
          </div>

          <div className={styles.charInfoItem}>
            <span>Idade: </span>
            {charInfo?.age}
          </div>

          <div className={styles.charInfoItem}>
            <span>Classe: </span>
            {charInfo?.classe}
          </div>

          <div className={styles.charInfoItem}>
            <span>Origem: </span>
            {charInfo?.origin}
          </div>

          <div className={styles.charInfoItem}>
            <span>NEX: </span>
            {charInfo?.nex}%
          </div>

          <div className={styles.charInfoItem}>
            <span>Trilha: </span>
            {charInfo?.trail}
          </div>

          <div className={styles.charInfoItem}>
            <span>Patente: </span>
            {charInfo?.rank}
          </div>

          <div className={styles.charInfoItem}>
            <span>Afinidade: </span>
            {charInfo?.afinity}
          </div>

          <div className={styles.charInfoItem}>
            <span>Versatilidade: </span>
            {charInfo?.versatility}
          </div>
        </div>

        <div className={`${styles.charInfoCollmun} ${styles.leftCollumn}`}>
          <div>
            <div className={styles.charInfoItem}>
              <span>Força: </span>
              {charInfo?.attributes?.str}
            </div>
            <div className={styles.charInfoItem}>
              <span>Agilidade: </span>
              {charInfo?.attributes?.agi}
            </div>
            <div className={styles.charInfoItem}>
              <span>Vigor: </span>
              {charInfo?.attributes?.vig}
            </div>
            <div className={styles.charInfoItem}>
              <span>Inteligência: </span>
              {charInfo?.attributes?.int}
            </div>
            <div className={styles.charInfoItem}>
              <span>Presença: </span>
              {charInfo?.attributes?.pre}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.charInfoBlock}>
        <div className={styles.skillsBlock}>
          {charInfo?.skills.map((skills: any) => {
            return (
              <div key={skills.at(0)} className={styles.skill}>
                {skills.at(0)}:{skills.at(1)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
