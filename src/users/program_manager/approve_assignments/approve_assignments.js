import React from "react";
import { useHistory } from "react-router-dom";
import { approveAssignments } from "./requests";
import ConfirmationWindow from "../../../confirmation_window";

const ApproveAssignments = ({ programId }) => {
  let history = useHistory();

  const onApprove = () => {
    approveAssignments({ programId, history });
  };

  return (
    <ConfirmationWindow
      onApprove={() => onApprove()}
      onCancel={() => history.push("/njsw36/")}
      content={"האם לאשר סופית את שיבוץ ההתמחויות?"}
    />
  );
};

export default ApproveAssignments;
