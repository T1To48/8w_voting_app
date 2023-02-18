import { useState} from "react";

import {PAGES} from "./Constants"

import {Login,Voting,Admin } from "./Pages";


//const userData = localStorage.getItem('userdata') ? JSON.parse(localStorage.getItem('userdata ')) : null;
function App() {
  const [page, setPage] = useState("login")
  const[login,voting,admin]=PAGES
  
  // useEffect(() => {
  //    if (!userData) {
  //      setPage(login);
  //    } else {
  //      setPage(voting);
  //    }
  //  }, [userData]);

    switch(page){
      case login:
        return <Login setPage={setPage}/>
      case voting:
        return <Voting setPage={setPage}/>
      case admin:
        return <Admin setPage={setPage}/>
        default:
      return <Login setPage={setPage} />
    }
  
}

export default App;
