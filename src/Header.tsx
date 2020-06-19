import React from "react";
import styled from "styled-components";

interface Props {
  startInput: (event: any) => void;
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.SFC<Props> = ({ startInput }) => {
  return (
    <HeaderContainer>
      <h2>Todo List</h2>
      <button onClick={startInput}>Add</button>
    </HeaderContainer>
  );
};

export default Header;
