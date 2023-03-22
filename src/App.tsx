import "./global.css";
import styles from "./App.module.css";

import { useEffect, useState } from "react";
import { UserInfo } from "./@types/Types";
import { LoginScreen } from "./interfaces/loginScreen/LoginScreen";
import { NavigationScreen } from "./interfaces/navigationScreen/NavigationScreen";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [disabledLogin, setDisabledLogin] = useState({ display: "" });
  const [disabledNavigation, setDisabledNavigation] = useState({
    display: "none",
  });
  useEffect(() => {
    if (userInfo.id) {
      setDisabledLogin({ display: "none" });
      setDisabledNavigation({ display: "block" });
    } else {
      setDisabledLogin({ display: "block" });
      setDisabledNavigation({ display: "none" });
    }
  }, [userInfo]);

  return (
    <div>
      <div>
        <div className={styles.loginScreen} style={disabledLogin}>
          <LoginScreen setUserInfo={setUserInfo} userInfo={userInfo} />
        </div>
      </div>
      <div className={styles.navigationScreen} style={disabledNavigation}>
        <NavigationScreen setUserInfo={setUserInfo} userInfo={userInfo} />
      </div>
    </div>
  );
}

export default App;
