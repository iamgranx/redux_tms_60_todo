import React, { memo } from "react";
import styled from "styled-components";

const StyledButton = styled("button")`
  padding: 6px;
  border: none;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor || "gray"};
  color: ${({ color }) => color || "#333"};
`;

const Button = ({ children, ...btnProps }) => {
  return <button {...btnProps}>{children}</button>;
};

export default memo(Button);
