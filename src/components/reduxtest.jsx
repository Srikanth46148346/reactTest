import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { decrease, increase, reset } from "../features/counter/counterSlice";

function Testmyredux(){

    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    return(
        <div>
            <h4>Testting my Redux state management</h4>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increase())}>increase</button>
            <button onClick={() => dispatch(decrease())}>Reduce</button>
            <button onClick={() => dispatch(reset())}> Reset state</button>
        </div>
    )
}


export default Testmyredux