const Button = ({ props, href }) => {
  return (
    <a href={href} className='carder text-black'>
      {props}
    </a>
  );
};

export default Button;
