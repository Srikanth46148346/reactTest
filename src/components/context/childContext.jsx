import { useContext, useEffect } from "react";
import userContext from './useContext';


function ChildContext(){

    const userData = useContext(userContext);
    useEffect(()=>{
        console.log('User data getting from Context: ', userData);
    },[])
    return (
        <div>
            My Context child.....
            <h2>
               Discount we got in {userData.discountType} : {userData.discountValue}%..
            </h2>
        </div>
    )
}


export default ChildContext;