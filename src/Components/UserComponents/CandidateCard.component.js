import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function CandidateCard({candidateName,candidatePicture}) {
  return (
  
          <MDBCard  >
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">{candidateName}</p>
            </div>
            <MDBCardImage
              src={candidatePicture}
              position="top"
              alt="Candidate's Picture"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-center mb-2">
              <MDBBtn className="candidate-card-btn mb-4 px-5"  >Vote now</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
       
  );
}

export default CandidateCard;
