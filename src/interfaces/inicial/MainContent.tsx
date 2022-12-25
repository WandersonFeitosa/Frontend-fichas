import { useState } from "react";
import { UserInfo } from "../../@types/Types";
import styles from "../../assets/css/interfaces/inicial/MainContent.module.css";
import { ShowCharInfo } from "../../components/ShowCharInfo";

interface MainContentProps {
  userInfo: UserInfo;
}

export function MainContent({ userInfo }: MainContentProps) {
  return (
    <main>
      <div className={styles.block}>
        <div className={styles.blockTitle}> Informações do usuário</div>
        <div>Id: {userInfo.id}</div> <br />
        <div>Nome: {userInfo.name}</div>
        <br />
        <div>Sobrenome: {userInfo.lastName}</div>
        <br />
        <div>Username: {userInfo.username}</div>
        <br />
        <div>Email: {userInfo.email}</div>
        <br />
      </div>

      <div className={styles.block}>
        <div className={styles.blockTitle}> Personagens do Usuário</div>
        <ShowCharInfo userInfo={userInfo} />
      </div>
    </main>
  );
}
