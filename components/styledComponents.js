import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ErrorMsg = styled.div`
  color: white;
  font-size: 20px;
`;

const Grid = styled.div`
  display: ${props => (props.container ? "flex" : "block")};
  flex-direction: ${props => (props.direction === "column" ? "column" : "row")};
  justify-content: ${props =>
    props.justify === "flex-start" ? "flex-start" : props.justify};
  align-items: ${props =>
    props.alignItems === "stretch" ? "stretch" : props.alignItems};
  align-content: ${props =>
    props.alignContent === "stretch" ? "stretch" : props.alignContent};

  @media all and (max-width: 600px) and (min-width:0) , (min-width:601px) {
    width: ${props => (props.xs ? `calc(${props.xs}*(100%/12) )` : "auto")};
  }
  @media all and (max-width: 960px) and (min-width:601px) , (min-width:961px) {
    width: ${props => (props.sm ? `calc(${props.sm}*(100%/12) )` : props.xs)};
  }
  @media all and (max-width: 1280px) and (min-width:961px) , (min-width:1281px) {
    width: ${props => (props.md ? `calc(${props.md}*(100%/12) )` : props.xs)};
  }
  @media all and (max-width: 1920px) and (min-width:1280px) , (min-width:1921px) {
    width: ${props => (props.lg ? `calc(${props.lg}*(100%/12) )` : props.xs)};
  }
  @media (min-width:1922px) {
    width: ${props => (props.xl ? `calc(${props.xl}*(100%/12) )` : props.xs)};
  }

  
`;

const Wrapper = styled.section`
  padding: 4em;
  background: gray;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  &:hover {
    cursor: pointer;
  }
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const BrandedButton = styled.button`
  color: ${props => props.themeColor};
  &:hover {
    color: ${props => props.themeHoverColor};
  }
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const StyledHeading = styled.div`
  font-size: ${({ size }) => 4 / size}em;
  font-weight: 300;
  margin: 0;
  text-align: ${props => props.align};
`;

const Typography = ({ variant = "h1", children, align = "inherit" }) => {
  let newVariant = variant;
  let size = newVariant.split("");
  size = size[1];

  if (variant === "subtitle1" || variant === "subtitle2") {
    newVariant = "h6";
    size = 5;
  } else if (variant === "body1" || variant === "body2") {
    newVariant = "p";
    size = 5;
  }

  return (
    <StyledHeading as={`${newVariant}`} size={size} align={align}>
      {children}
    </StyledHeading>
  );
};

export {
  Title,
  Wrapper,
  Button,
  TomatoButton,
  Input,
  BrandedButton,
  Rotate,
  ErrorMsg,
  Grid,
  Typography
};
