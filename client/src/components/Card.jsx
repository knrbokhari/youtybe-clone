import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 3px 0px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Container>
      <Image src="https://img.huffingtonpost.com/asset/5ee0ad5a250000e929eb30f7.jpeg?ops=scalefit_720_noupscale&format=webp" />
      <Details>
        <ChannelImage src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1658673992~exp=1658674592~hmac=09d06d86ae455b7136a815febc4c5de2cfb1fe2bfa8c4ca7ac08215bebe2756c&w=996" />
        <Texts>
          <Title>testing</Title>
          <ChannelName>Channel Name</ChannelName>
          <Info>51K views . 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
