import styled from "styled-components";
import LoadingAnimation from "../../assets/loading-animation.gif";
import Image from "next/image";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 60px;
`;

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Image
        src={"/assets/loading-animation.gif"}
        alt="loading animation"
        width={400}
        height={400}
      />
    </Wrapper>
  );
}
