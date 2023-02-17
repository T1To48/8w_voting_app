import React,{useState} from 'react'
import { Navbar,CandidatesList  } from '../Components'
import { candidatesArray } from '../Utilities/CandidatesData';
import "../Styles/styled/Voting.css"
import "../Styles/styled/Navbar.css";

const Voting = () => {
const [candidatesVar, setcandidatesVar] = useState(candidatesArray);

  return (
    <>
    <Navbar/>
    <CandidatesList candidates={candidatesVar}/>
    </>
  )
}

export default Voting