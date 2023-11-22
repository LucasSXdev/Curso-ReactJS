import { useSelector } from "react-redux";
import rootReducer from "./redux/rootReducer";

export default function App() {
  const { user } = useSelector((rootReducer) => rootReducer.user);

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
