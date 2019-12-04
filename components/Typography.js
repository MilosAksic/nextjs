import styled, { keyframes } from "styled-components";

const StyledHeading = styled.div`
  font-size: ${({ level }) => 4 / level}em;
  font-weight: 300;
  margin: 0;
`;

const Heading = ({ level = 1, children }) => (
  <StyledHeading as={`h${level}`} level={level}>
    {children}
  </StyledHeading>
);

export default Typography;
