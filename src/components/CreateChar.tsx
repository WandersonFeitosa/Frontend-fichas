import { UserInfo } from "../@types/Types";
import styles from "../assets/css/components/CreateChar.module.css";
interface CreateCharProps {
  userInfo: UserInfo;
}
export function CreateChar({ userInfo }: CreateCharProps) {
  return (
    <div>
      <form action="">
        <div className=""></div>
        <input type="text" name="name" placeholder="Nome do Personagem" />
      </form>
    </div>
  );
}
