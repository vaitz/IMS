import React from "react";
import { useHistory } from "react-router-dom";
import { approveAssignments } from "./requests";
import ConfirmationWindow from "../../../components/confirmation_window";

const ApproveAssignments = ({ programId, username }) => {
  let history = useHistory();

  const onApprove = () => {
    approveAssignments({ programId, history, username });
  };

  return (
    <ConfirmationWindow
      onApprove={() => onApprove()}
      onCancel={() => history.push("/")}
      content={"האם לאשר סופית את שיבוץ ההתמחויות?"}
    />
  );
};

export default ApproveAssignments;
