import { UserInfo } from "../../@types/Types";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";
import styles from "../../assets/css/interfaces/navigationScreen/navigationScreen.module.css";
interface NavigationScreenProps {
  userInfo: UserInfo;
  setUserInfo: Function;
}
export function NavigationScreen({
  userInfo,
  setUserInfo,
}: NavigationScreenProps) {
  return (
    <div className={styles.wrapper}>
      <Sidebar userInfo={userInfo}  />
      <MainContent userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
}
