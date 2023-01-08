import { ChangeEvent, useState } from "react";
import { SkillsInfo, UserInfo } from "../@types/Types";
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

  function handleEditSkillField(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newData = { ...skillsData, [inputName]: inputValue };
    setSkillsData(newData);
  }
  function checkDuplicatedSkill(skillName: string) {
    const found = skills.find((skill: string) => skill.at(0) == skillName);
    if (found) {
      return true;
    }
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
      const newArray = [...skills, [newSkillName, newSkillValue]];
      setSkills(newArray);
    }
  }

  return (
    <div>
      <form action="">
        <div className={styles.blockWrapper}>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Informações Pessoais</div>
            <div className={styles.formItem}>
              <label htmlFor="name">Nome:</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="age">Idade:</label>
              <input type="number" name="age" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="nex">NEX:</label>
              <input type="number" name="nex" min="0" max="100" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="class">Classe:</label>
              <select name="class">
                <option value=""></option>
                <option value="combatente">Combatente</option>
                <option value="especialista">Especialista</option>
                <option value="ocultista">Ocultista</option>
              </select>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="origin">Origem:</label>
              <input type="text" name="origin" />
            </div>

            <div className={styles.formItem}>
              <label htmlFor="trail">Trilha:</label>
              <input type="text" name="trail" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="versatility">Versatilidade:</label>
              <input type="text" name="versatility" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="affinity">Afinidade:</label>
              <input type="text" name="affinity" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="rank">Patente:</label>
              <select name="rank">
                <option value=""></option>
                <option value="recruta">Recruta</option>
                <option value="operador">Operador</option>
                <option value="agenteEspecial">Agente Especial</option>
                <option value="oficialDeOperacoes">Oficial de Operações</option>
                <option value="elite">Elite</option>
              </select>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Atributos</div>
            <div className={styles.formItem}>
              <label htmlFor="str">Força:</label>
              <input type="number" name="str" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="agi">Agilidade:</label>
              <input type="number" name="agi" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="vig">Vigor:</label>
              <input type="number" name="vig" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="int">Inteligência:</label>
              <input type="number" name="int" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="pre">Presença:</label>
              <input type="number" name="pre" />
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
                  <div key={skill.at(0)} className={styles.skill}>
                    <span>{skill.at(0)}</span>:{skill.at(1)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
