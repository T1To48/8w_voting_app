import React from "react";
import CandidateCard from "./CandidateCard.component";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const CandidatesList = ({ candidates }) => {
  const allCandidates = candidates.map((candidate) => {
    return (
      <>
        <CandidateCard
          key={candidate.id}
          candidateName={candidate.name}
          candidatePicture={candidate.picture}
          className="eachCard"
        />
        <br />
      </>
    );
  });
  return (
    <MDBContainer fluid className="my-5" >
      <MDBRow>
        <div className="candidates-cards-container">
          <MDBCol md="12" lg="2" className="mb-4 mb-lg-0 ">
            {allCandidates}
          </MDBCol>
        </div>
      </MDBRow>
    </MDBContainer>
  );
};

export default CandidatesList;
