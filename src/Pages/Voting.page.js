import React from 'react'
import { Navbar,CandidatesList  } from '../Components'
import { candidatesArray } from '../Utilities/CandidatesData';
import "../Styles/styled/Voting.css"
import "../Styles/styled/Navbar.css";

const Voting = () => {

  return (
    <>
    <Navbar/>
    <h1 className='voting-page-title'>Who deserves the IRON THRONE?</h1>
    <CandidatesList candidates={candidatesArray}/>
    </>
  )
}

export default Voting