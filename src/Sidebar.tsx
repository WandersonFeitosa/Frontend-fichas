import { ChangeEvent, useEffect, useState } from "react";
import { AddCharOnTable } from "./AddCharOnTable";
import { CreateTable } from "./CreateTable";
import { CreateUser } from "./CreateUser";
import { UserInfo } from "./InterfaceTypes";
import { Login } from "./Login";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  userInfo: UserInfo;
  setUserInfo: Function;
}

export function Sidebar({ userInfo, setUserInfo }: SidebarProps) {
  return (
    <div className={styles.sidebarWrapper}>
      <div>
        <aside className={styles.aside}>
          <div className={styles.title}>Criar um Usuário</div>
          <CreateUser />
        </aside>
        <aside className={styles.aside}>
          <div className={styles.title}>Login</div>
          <Login setUserInfo={setUserInfo} />
        </aside>
      </div>
      <div className={styles.middleRow}>
        <aside className={styles.aside}>
          <div className={styles.title}>Criar uma Mesa</div>
          <CreateTable userInfo={userInfo} />
        </aside>
      </div>
      <div>
        <aside className={styles.aside}>
          <div className={styles.title}>Adicionar personagem na mesa</div>
          <AddCharOnTable userInfo={userInfo} />
        </aside>
      </div>
    </div>
  );
}
