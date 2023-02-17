import logo from "../Assets/Images/logo-no-background.png"

const Logo = ({logoClass}) => {
  return <img src={logo} alt='Voting app logo' className={logoClass} />;
};
export default Logo;
