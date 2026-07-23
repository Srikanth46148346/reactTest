import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, remove, reset } from "../../features/counter/newSlice";

function Routing2() {
  const centralData = useSelector((state) => state.newSlice.value);
  console.log("CentralDATA", centralData);
  const dispatch = useDispatch();

  return (
    <div>
      Testing Routing 2<h2>Data from the store: {centralData}</h2>
      <div>
        <button onClick={() => dispatch(add())}>Add the state</button>
        <button onClick={() => dispatch(remove())}>Reduce the state</button>
        <button onClick={() => dispatch(reset())}>Reset the state</button>
      </div>
    </div>
  );
}

export default Routing2;
