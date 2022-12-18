import "./global.css";
import styles from "./App.module.css";

import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { useState } from "react";
import { UserInfo } from "./InterfaceTypes";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: "",
    name: "",
    lastName: "",
    email: "",
    username: "",
  });

  return (
    <div className={styles.wrapper}>
      <Sidebar userInfo={userInfo} setUserInfo={setUserInfo} />
      <MainContent userInfo={userInfo} />
    </div>
  );
}

export default App;
