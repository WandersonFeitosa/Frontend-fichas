import { Trash, X } from "phosphor-react";

import { ChangeEvent, useEffect, useState } from "react";
import { UserInfo } from "../@types/Types";
import styles from "../assets/css/components/CreateChar.module.css";

interface CreateCharProps {
  userInfo: UserInfo;
}
export function CreateChar({ userInfo }: CreateCharProps) {
  const [skills, setSkills] = useState<any>([]);
  const [skillErrorMsg, setSkillErrorMsg] = useState("");
  const [skillsData, setSkillsData] = useState({
    skillName: "",
    skillValue: "",
  });
  const [charInfo, setCharInfo] = useState({
    id_usuario: userInfo.id,
  });
  const [attributes, setAttributes] = useState({});
  const [finalCharInfo, setFinalCharInfo] = useState({});

  function handleEditSkillField(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newData = { ...skillsData, [inputName]: inputValue };
    setSkillsData(newData);
  }
  function handleEditAttributeField(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newData = { ...attributes, [inputName]: inputValue };
    setAttributes(newData);
  }

  function checkDuplicatedSkill(skillName: string) {
    const skillToCheck = skillName;
    const haveSkill = skills
      .map((skill: any) => {
        if (skill.skillName == skillToCheck) {
          return true;
        } else {
          return false;
        }
      })
      .find((skill: any) => skill == true);
    return haveSkill;
  }

  function validateSkill(skillName: string, skillValue: number) {
    if (!skillName) {
      setSkillErrorMsg("Preencha o nome da perícia");
    } else if (!skillValue) {
      setSkillErrorMsg("Preencha o valor da perícia");
    } else if (checkDuplicatedSkill(skillName)) {
      setSkillErrorMsg("Você já possui essa perícia");
    } else {
      return true;
    }
  }
  function handleAddSkill() {
    setSkillErrorMsg("");
    const newSkillName = skillsData.skillName.toLowerCase();
    const newSkillValue = Number(skillsData.skillValue);
    if (validateSkill(newSkillName, newSkillValue)) {
      const newArray = [
        ...skills,
        { skillName: newSkillName, skillValue: newSkillValue },
      ];
      setSkills(newArray);
    }
  }
  function handleDeleteSkill(event: any) {
    console.log(event?.target.id);
    console.log(skills);
  }
  function handleCharInfoChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newCharInfo = { ...charInfo, [inputName]: inputValue };
    setCharInfo(newCharInfo);
  }
  function saveChar() {
    const saveChar = async () => {
      const result = await fetch(`http://localhost:3333/createPersonagem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalCharInfo),
      });
      const jsonResult = await result.json();
      console.log(jsonResult);
      console.log(finalCharInfo);
    };
    saveChar();
  }
  function handleCreateChar(event: any) {
    event?.preventDefault();
    const finalCharInfo = {
      ...charInfo,
      skills: skills,
      attributes: attributes,
    };
    setFinalCharInfo(finalCharInfo);

    saveChar();
  }

  return (
    <div>
      <form onSubmit={handleCreateChar}>
        <div className={styles.blockWrapper}>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Informações Pessoais</div>
            <div className={styles.formItem}>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                onChange={handleCharInfoChange}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="age">Idade:</label>
              <input type="number" name="age" onChange={handleCharInfoChange} />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="nex">NEX:</label>
              <input
                type="number"
                name="nex"
                min="0"
                max="100"
                onChange={handleCharInfoChange}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="classe">Classe:</label>
              <select name="classe" onChange={handleCharInfoChange}>
                <option value=""></option>
                <option value="combatente">Combatente</option>
                <option value="especialista">Especialista</option>
                <option value="ocultista">Ocultista</option>
              </select>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="origin">Origem:</label>
              <input
                type="text"
                name="origin"
                onChange={handleCharInfoChange}
              />
            </div>

            <div className={styles.formItem}>
              <label htmlFor="trail">Trilha:</label>
              <input type="text" name="trail" onChange={handleCharInfoChange} />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="versatility">Versatilidade:</label>
              <input
                type="text"
                name="versatility"
                onChange={handleCharInfoChange}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="affinity">Afinidade:</label>
              <input
                type="text"
                name="affinity"
                onChange={handleCharInfoChange}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="rank">Patente:</label>
              <select name="rank" onChange={handleCharInfoChange}>
                <option value=""></option>
                <option value="Recruta">Recruta</option>
                <option value="Operador">Operador</option>
                <option value="Agente Especial">Agente Especial</option>
                <option value="Oficial De Operacoes">
                  Oficial de Operações
                </option>
                <option value="Elite">Elite</option>
              </select>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Atributos</div>
            <div className={styles.formItem}>
              <label htmlFor="str">Força:</label>
              <input
                type="number"
                name="str"
                onChange={handleEditAttributeField}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="agi">Agilidade:</label>
              <input
                type="number"
                name="agi"
                onChange={handleEditAttributeField}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="vig">Vigor:</label>
              <input
                type="number"
                name="vig"
                onChange={handleEditAttributeField}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="int">Inteligência:</label>
              <input
                type="number"
                name="int"
                onChange={handleEditAttributeField}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="pre">Presença:</label>
              <input
                type="number"
                name="pre"
                onChange={handleEditAttributeField}
                required
              />
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Perícias</div>
            <div className={styles.skillsForm}>
              <div className={styles.skillsFormWrapper}>
                <input
                  type="text"
                  name="skillName"
                  placeholder="Nome da Perícia"
                  onChange={handleEditSkillField}
                />
                <input
                  type="number"
                  name="skillValue"
                  placeholder="Valor do bônus"
                  onChange={handleEditSkillField}
                />
              </div>
              <div className={styles.skillErrorMsg}>{skillErrorMsg}</div>
              <button
                type="button"
                className={styles.skillsFormWrapperButton}
                onClick={handleAddSkill}
              >
                Adicionar Perícia
              </button>
            </div>
            <div>
              {skills.map((skill: any) => {
                return (
                  <div className={styles.skill} key={skill.skillName}>
                    <div
                      className={styles.trashCan}
                      onClick={handleDeleteSkill}
                    >
                      <div id={skill.skillName}>X</div>
                      {/* <X size={22}/> */}
                    </div>
                    <span>{skill.skillName}</span> : {skill.skillValue}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className={styles.createCharButton}>
            {" "}
            Criar Personagem
          </button>
        </div>
      </form>
    </div>
  );
}
