import { useState } from "react";
import styles from "../../assets/css/interfaces/navigationScreen/Sidebar.module.css";
interface SidebarProps {
  setMainPages: Function;
}

export function Sidebar({ setMainPages }: SidebarProps) {
  function handleMainContent(event: any) {
    const pageNumber = event.target.value;
    setMainPages(Number(pageNumber));
  }
  /*
  Índice
  0 - Informações
  1 - Mesas
  2 - Personagens 
  */
  return (
    <div className={styles.sidebarWrapper}>
      <aside className={styles.aside}>
        <div className={styles.title}> Menu</div>
        <ul>
          <li onClick={handleMainContent} value="0">
            Informações do usuário
          </li>
          <li onClick={handleMainContent} value="1">
            Mesas
          </li>
          <li onClick={handleMainContent} value="2">
            Personagens
          </li>
          <li onClick={handleMainContent} value="3">
            Itens
          </li>
          <li onClick={handleMainContent} value="4">
            Poderes
          </li>
          <li onClick={handleMainContent} value="5">
            Rituais
          </li>
        </ul>
      </aside>
    </div>
  );
}
