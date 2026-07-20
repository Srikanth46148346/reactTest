import ChildContext from "./childContext";
import userContext from './useContext';
import { Provider } from 'react-redux';

function ParentContext() {

  const userData = {
    _id: 1,
    code: "SAVE10",
    discountType: "Percentage",
    discountValue: 10,
    minOrderAmount: 50,
    expiryDate: "2025-12-31T23:59:59Z",
    status: "Active",
    createdAt: "2025-06-01T08:00:00Z",
  };


  return (
     <div>
        Testing Parent Context...
        <userContext.Provider value = {userData}>
            <ChildContext></ChildContext>
        </userContext.Provider>
    </div>

  )
}

export default ParentContext;
