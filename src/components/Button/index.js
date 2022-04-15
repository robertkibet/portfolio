import StyledButton from './styles';

const Button = ({ title, type = 'button', ...rest }) => (
  <StyledButton type={type} {...rest}>{title}</StyledButton>
);

export default Button;
