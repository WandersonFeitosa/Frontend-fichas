import { UserInfo } from "../../@types/Types";
import { Login } from "../../components/Login";
import styles from "../../assets/css/interfaces/loginScreen/loginScreen.module.css";
import { CreateUser } from "../../components/CreateUser";
import { useState } from "react";
interface LoginScreenProps {
  userInfo: UserInfo;
  setUserInfo: Function;
}

export function LoginScreen({ userInfo, setUserInfo }: LoginScreenProps) {
  const [disabledLogin, setDisabledLogin] = useState({ display: "" });

  const [disabledCreateUser, setDisabledCreateUser] = useState({
    display: "none",
  });

  function showCreateUser() {
    setDisabledLogin({ display: "none" });
    setDisabledCreateUser({ display: "block" });
  }
  function showLogin() {
    setDisabledLogin({ display: "block" });
    setDisabledCreateUser({ display: "none" });
  }

  return (
    <div className={styles.loginScreenBlock}>
      <div className={styles.loginBlock} style={disabledLogin}>
        <div className={styles.loginTitle}> Realize o seu login</div>
        <Login setUserInfo={setUserInfo} />

        <button onClick={showCreateUser} className={styles.createAccuont}>
          Criar conta
        </button>
      </div>
      <div className={styles.createUserBlock} style={disabledCreateUser}>
        <div onClick={showLogin} className={styles.showLogin}>
          {"<-"} Retornar
        </div>
        <div className={styles.loginTitle}> Crie sua conta</div>
        <CreateUser />
      </div>
    </div>
  );
}
