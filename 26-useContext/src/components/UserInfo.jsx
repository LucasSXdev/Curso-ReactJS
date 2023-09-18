import { useContext } from "react";
import userContext from "../context/userContext";

export default function UserInfo() {
  const user = useContext(userContext);
  return (
    <div>
      <h1>informaçoes do usuario</h1>
      <p>nome:{user.nome}</p>
      <p>email:{user.email}</p>
    </div>
  );
}
