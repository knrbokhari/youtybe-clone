import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  &:hover {
    background-color: #105b72c2;
  }
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1658673992~exp=1658674592~hmac=09d06d86ae455b7136a815febc4c5de2cfb1fe2bfa8c4ca7ac08215bebe2756c&w=996" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
