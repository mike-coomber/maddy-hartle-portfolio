import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 30px;
  z-index: 500;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px #000000 solid;
  border-bottom: 1px #000000 solid;
  align-items: center;
`;

const Col = styled.div`
  flex: 1;
  margin: 8px 0;
`;

const TitleText = styled.h1`
  margin: 8px 0;
  font-weight: 500;
`;

const SideText = styled.p<{ textAlign: string }>`
  font-size: 14px;
  margin: 0;
  text-align: ${(props) => (props.textAlign === "left" ? "left" : "right")};
`;

export default function Header() {
  return (
    <Wrapper>
      <Row>
        <Col>
          <SideText textAlign="left">
            Art Director specializing in visual <br />
            identity, illustration and motion.
          </SideText>
        </Col>
        <Col>
          <TitleText>maddy hartle</TitleText>
        </Col>
        <Col>
          <SideText textAlign="right">
            maddy.hartle@gmail.com
            <br />
            +44 7428173081
          </SideText>
        </Col>
      </Row>
    </Wrapper>
  );
}
