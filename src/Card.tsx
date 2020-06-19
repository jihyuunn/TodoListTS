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
  &.done {
      text-decoration: line-through;
  }
  &.ongoing {
      text-decoration: none;
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
