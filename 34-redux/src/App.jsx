import { useSelector } from "react-redux";
import store from "./redux/store";

export default function App() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      meu nome é {user.name} e tenho {user.age} anos
      <br />
      tema:...
      <hr />
      <input type="text" value={"..."} />
      <hr />
      <button>switch theme</button>
    </div>
  );
}
