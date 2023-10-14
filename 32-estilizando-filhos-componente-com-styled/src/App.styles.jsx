import styled from "styled-components";

export const Button = styled.button`
  font-size: ${(props) => (props.small ? "15px" : "30px")};
  background-color: ${(props) => (props.small ? "blue" : "yellow")};
`;

export const Container = styled.div`
  background: red;
  height: 100px;
  span {
    background-color: green;
    padding: 20px;
    font-size: 15px;
  }
`;
