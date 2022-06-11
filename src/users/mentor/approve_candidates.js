import React from "react";
import ApproveCandidate from "../common/approve_candidate/approve_candidate";
import { MENTOR } from "../../constants";

const ApproveMentorCandidates = ({ username }) => (
  <ApproveCandidate username={username} userType={MENTOR} />
);

export default ApproveMentorCandidates;
