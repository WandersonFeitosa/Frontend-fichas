import "./global.css";
import styles from "./App.module.css";

import { Sidebar } from "./Sidebar";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");


  return (
    <div className={styles.wrapper}>
      <Sidebar userId={userId} setUserId={setUserId} />
      <main></main>
    </div>
  );
}

export default App;
