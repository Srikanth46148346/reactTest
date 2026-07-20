import { useEffect, useState } from "react";
import Child1 from "./child/child1";

function Test1() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.noksha.dev/api/wishlists",
        );
        const mainData = await response.json();
        setUser(mainData.data);

        console.log("My user data:", mainData.data);

        // const {createdAt, productIds} = mainData.data[0];

        // console.log('de-structuring :', createdAt, productIds);

        // spread operator:

        // const spreading = ["My data", "spreading data", ...mainData.data];

        // console.log('Spreading: ',spreading);
        // mainData.data[0].productIds.push(5);
        // console.log('Adding new element to productIds: ', mainData.data[0]);
        
        // Filter: 

        // const evenId = mainData.data.filter((val) =>{
        //     if(val.userId % 2 === 0){
        //         return val;
        //     }
        // });

        // console.log('even IDs values :', evenId);

        // Find value:

        const findVal = mainData.data.find((val) =>{
            if(val.userId === 4){
                return val
            }
        })

        console.log("My UserId 2 data: ", findVal);


      } catch (error) {
        console.error("We got an : ", error);
      }
    }

    console.log("Before calling fetch data function");
    setTimeout(()=>{
        console.log('setting callback after 5seconds');
    }, 5000);

    fetchData();

    console.log('callling console after fetch data function');
  }, []);
  return (
    <div>
      <h2>Test Component</h2>
      {/* <ol>
        {user.map((val) => (
          <li key={val._id}>{val.updatedAt}</li>
        ))}
      </ol> */}
      <Child1 user={user} setUser={setUser}></Child1>
    </div>
  );
}

export default Test1;