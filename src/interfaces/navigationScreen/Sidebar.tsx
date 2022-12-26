import { AddCharOnTable } from "../../components/AddCharOnTable";
import { CreateTable } from "../../components/CreateTable";
import { UserInfo } from "../../@types/Types";
import styles from "../../assets/css/interfaces/navigationScreen/Sidebar.module.css";
interface SidebarProps {
  userInfo: UserInfo;
}

export function Sidebar({ userInfo }: SidebarProps) {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.middleRow}>
        <aside className={styles.aside}>
          <div className={styles.title}>Criar uma Mesa</div>
          <CreateTable userInfo={userInfo} />
        </aside>
        <aside className={styles.aside}>
          <div className={styles.title}>Adicionar personagem na mesa</div>
          <AddCharOnTable userInfo={userInfo} />
        </aside>
      </div>
      <div></div>
    </div>
  );
}
