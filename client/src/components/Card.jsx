import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "90px" : "100%")};
  height: ${(props) => (props.type === "sm" ? "80px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: ${(props) => props.type !== "sm" && 1};
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  margin-left: ${(props) => props.type === "sm" && "16px"};
`;

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

const Card = ({ type }) => {
  return (
    <Link to={`/video/1`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://img.huffingtonpost.com/asset/5ee0ad5a250000e929eb30f7.jpeg?ops=scalefit_720_noupscale&format=webp"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1658673992~exp=1658674592~hmac=09d06d86ae455b7136a815febc4c5de2cfb1fe2bfa8c4ca7ac08215bebe2756c&w=996"
          />
          <Texts type={type}>
            <Title title="full title">testing</Title>
            <ChannelName title="Channel Name">Channel Name</ChannelName>
            <Info>207K views • 5 months ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
