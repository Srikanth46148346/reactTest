import { useEffect } from "react";

function Child1({ user, setUser }) {
  useEffect(() => {
    console.log("data coming from parent: ", user);
  }, []);

//   function handlePropChange(){
//     console.log("Checking Props update");
//     setUser((val) =>{
//         val[0] = {}
//     }  )
//   }
  return (
    <div>
      Testing child Component
      <ol>
        {user?.map((val) => (
          <li key={val?._id}>{val?.createdAt}</li>
        ))}
      </ol>
      {/* <button onClick={handlePropChange}> Update Prop</button> */}
    </div>
  );
}

export default Child1;
