import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  color: #666666;
  border: 1px solid #666666;
`;

const Margin = styled.div`
  margin-left: 20px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ConfirmationWindow = (props) => {
  console.log(props);
  return (
    <Container className="font-rubik">
      <ContentWrapper>
        {props.content}
        <Buttons>
          <Margin>
            <Button onClick={props.onCancel}>ביטול</Button>
          </Margin>
          <Button onClick={props.onApprove}>אישור</Button>
        </Buttons>
      </ContentWrapper>
    </Container>
  );
};

export default ConfirmationWindow;
