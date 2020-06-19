import React, { useEffect } from "react";
import styled, {StyledProps} from "styled-components";

interface Props {
  id: number;
  todo: string;
  done: boolean;
  onToggle: (event: any) => void;
  className?: string;
}

const CardContainer = styled.div`
  font-weight: 300;
  font-size: 1.5rem;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  div.done {
      text-decoration: line-through;
    text-decoration-color: rgb(129, 214, 185);
  }
  div.ongoing {
      text-decoration: none;
  }
  span {
    font-size: 1.5rem;
    font-weight: 300;
    color: #494d8f;
  }
`;

const Card: React.FC<Props> = ({ id, todo, done, onToggle}) => {

  return (
    <CardContainer onClick={e => onToggle(e)} data-id={id} className={done?'done':'ongoing'}>
      {todo}
    </CardContainer>
  );
};

export default Card;
