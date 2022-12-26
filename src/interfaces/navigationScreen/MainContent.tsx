import { useState } from "react";
import { UserInfo } from "../../@types/Types";
import styles from "../../assets/css/interfaces/navigationScreen/MainContent.module.css";
import { ShowCharInfo } from "../../components/ShowCharInfo";

interface MainContentProps {
  userInfo: UserInfo;
  setUserInfo: Function;
}

export function MainContent({ userInfo, setUserInfo }: MainContentProps) {
  function handleLogout() {
    setUserInfo({});
  }
  return (
    <main>
      <div className={styles.block}>
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

      <div className={styles.block}>
        <div className={styles.blockTitle}> Personagens </div>
        <ShowCharInfo userInfo={userInfo} />
      </div>
    </main>
  );
}
