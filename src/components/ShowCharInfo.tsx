import { ChangeEvent, useState } from "react";
import { CharInfo, UserInfo } from "../@types/Types";
import styles from "../assets/css/components/ShowCharInfo.module.css";
import env from "../../env.json";

interface ShowCharInfoProps {
  userInfo: UserInfo;
}
type SkillsInfo = Array<[string, number]>;

export function ShowCharInfo({ userInfo }: ShowCharInfoProps) {
  const [chars, setChars] = useState<CharInfo[]>([]);
  const [charInfo, setCharInfo] = useState<CharInfo>();
  const [skillsArray, setSkillsArray] = useState<SkillsInfo>([]);

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
    if (charStatus) {
      setSkillsArray(Object.entries(charStatus.pericias));
    }
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
              {char.nome}
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
            {charInfo?.nome}
          </div>

          <div className={styles.charInfoItem}>
            <span>Idade: </span>
            {charInfo?.idade}
          </div>

          <div className={styles.charInfoItem}>
            <span>Classe: </span>
            {charInfo?.classe}
          </div>

          <div className={styles.charInfoItem}>
            <span>Origem: </span>
            {charInfo?.origem}
          </div>

          <div className={styles.charInfoItem}>
            <span>NEX: </span>
            {charInfo?.nex}
          </div>

          <div className={styles.charInfoItem}>
            <span>Trilha: </span>
            {charInfo?.trilha}
          </div>

          <div className={styles.charInfoItem}>
            <span>Patente: </span>
            {charInfo?.patente}
          </div>

          <div className={styles.charInfoItem}>
            <span>Afinidade: </span>
            {charInfo?.afinidade}
          </div>

          <div className={styles.charInfoItem}>
            <span>Versatilidade: </span>
            {charInfo?.versatilidade}
          </div>
        </div>

        <div className={`${styles.charInfoCollmun} ${styles.leftCollumn}`}>
          <div>
            <div className={styles.charInfoItem}>
              <span>Força: </span>
              {charInfo?.atributos?.forca}
            </div>
            <div className={styles.charInfoItem}>
              <span>Agilidade: </span>
              {charInfo?.atributos?.agilidade}
            </div>
            <div className={styles.charInfoItem}>
              <span>Vigor: </span>
              {charInfo?.atributos?.vigor}
            </div>
            <div className={styles.charInfoItem}>
              <span>Inteligência: </span>
              {charInfo?.atributos?.inteligencia}
            </div>
            <div className={styles.charInfoItem}>
              <span>Presença: </span>
              {charInfo?.atributos?.presenca}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.charInfoBlock}>
        <div className={styles.skillsBlock}>
          {skillsArray.map((skills) => {
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
