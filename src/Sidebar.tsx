import { ChangeEvent, useEffect, useState } from "react";
import { CreateTable } from "./CreateTable";
import { CreateUser } from "./CreateUser";
import { Login } from "./Login";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  userId: string;
  setUserId: Function;
}

export function Sidebar({ userId, setUserId }: SidebarProps) {
  return (
    <div className={styles.sidebarWrapper}>
      <div>
        <aside className={styles.aside}>
          <div className={styles.title}>Criar um Usuário</div>
          <CreateUser />
        </aside>
      </div>
      <div>
        <aside className={styles.aside}>
          <div className={styles.title}>Login</div>
          <Login setUserId={setUserId} />
        </aside>
      </div>
      <div>
        <aside className={styles.aside}>
          <div className={styles.title}>Criar uma Mesa</div>
          <CreateTable />
        </aside>
      </div>
    </div>
  );
}
