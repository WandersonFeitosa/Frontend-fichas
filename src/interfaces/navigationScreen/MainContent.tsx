import { UserInfo } from "../../@types/Types";
import styles from "../../assets/css/interfaces/navigationScreen/MainContent.module.css";
import { AddCharOnTable } from "../../components/AddCharOnTable";
import { CreateChar } from "../../components/CreateChar";
import { CreateTable } from "../../components/CreateTable";
import { ShowCharInfo } from "../../components/ShowCharInfo";

interface MainContentProps {
  userInfo: UserInfo;
  setUserInfo: Function;
  mainPages: number;
}

export function MainContent({
  userInfo,
  setUserInfo,
  mainPages,
}: MainContentProps) {
  function handleLogout() {
    setUserInfo({});
  }

  const showPage = () => {
    /*
  Índice
  0 - Informações
  1 - Mesas
  2 - Personagens 
*/
    if (mainPages == 0) {
      return (
        <div className={styles.infoBlock}>
          <div className={styles.blockTitle}> Informações</div>
          <div>
            Nome: {userInfo.name} {userInfo.lastName}
          </div>
          <br />
          <div>Username: {userInfo.username}</div>
          <br />
          <div>Email: {userInfo.email}</div>
          <br />
          <button onClick={handleLogout} className={styles.logout}>
            Logout
          </button>
        </div>
      );
    }

    if (mainPages == 1) {
      return (
        <div className={styles.tablesBlock}>
          <div className={styles.tableItem}>
            <div>
              <div className={styles.blockTitle}>Criar uma mesa</div>
              <CreateTable userInfo={userInfo} setUserInfo={setUserInfo} />
            </div>
          </div>
          <div className={styles.tableItem}>
            <div>
              <div className={styles.blockTitle}>
                Adicionar personagem em mesa
              </div>
              <AddCharOnTable userInfo={userInfo} />
            </div>
          </div>
        </div>
      );
    }
    if (mainPages == 2) {
      return (
        <div>
          <div className={styles.blockTitle}> Personagens </div>
          <ShowCharInfo userInfo={userInfo} />
        </div>
      );
    }
    if (mainPages == 3) {
      return (
        <div>
          <div className={styles.blockTitle}> Crie seu Personagem </div>
          <CreateChar userInfo={userInfo} />
        </div>
      );
    }
  };
  return (
    <main>
      <div className={styles.block}>{showPage()}</div>
    </main>
  );
}
