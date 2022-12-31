import { UserInfo } from "../../@types/Types";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";
import styles from "../../assets/css/interfaces/navigationScreen/navigationScreen.module.css";
import { useState } from "react";
interface NavigationScreenProps {
  userInfo: UserInfo;
  setUserInfo: Function;
}
export function NavigationScreen({
  userInfo,
  setUserInfo,
}: NavigationScreenProps) {
  const [mainPages, setMainPages] = useState(6);
  return (
    <div className={styles.wrapper}>
      <Sidebar setMainPages={setMainPages} />
      <MainContent
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        mainPages={mainPages}
      />
    </div>
  );
}
