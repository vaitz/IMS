import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  background: #7c64de;
  border-radius: 3px;
  border: 2px solid;
  color: #ffffff;
  width: 150px;
  height: 40px;
  font-weight: bold;
`;

const Button = ({ onClick, value, disabled }) => {
  return (
    <BaseButton onClick={onClick} disabled={disabled}>
      {value}
    </BaseButton>
  );
};

export default Button;
