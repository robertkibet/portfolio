import StyledButton from './styles';

const Button = (props) => {
  const { title, type = 'button', ...rest } = props;
  return (
    <StyledButton type={type} {...rest}>{title}</StyledButton>
  );
};

export default Button;
