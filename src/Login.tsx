interface LoginProps {
  setUserId: Function;
}
export function Login({ setUserId }: LoginProps) {
  return (
    <form action="">
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="senha" placeholder="Senha" />
      <button>Submit</button>
    </form>
  );
}
