import pageLogo from "@/assets/images/logo.svg";

export const PageLogo = () => {
  return (
    <a href='/'>
      <img src={pageLogo} alt='Page Logo - X and O' />
    </a>
  );
};
