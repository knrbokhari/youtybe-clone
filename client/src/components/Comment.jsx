import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1658673992~exp=1658674592~hmac=09d06d86ae455b7136a815febc4c5de2cfb1fe2bfa8c4ca7ac08215bebe2756c&w=996" />
      <Details>
        <Name>
          channel name <Date>1 day ago</Date>
        </Name>
        <Text> comment ...... </Text>
      </Details>
    </Container>
  );
};

export default Comment;
