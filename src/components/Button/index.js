import StyledButton from './styles';

const Button = ({ title, ...rest }) => (
  <StyledButton type="button" {...rest}>{title}</StyledButton>
);

export default Button;
