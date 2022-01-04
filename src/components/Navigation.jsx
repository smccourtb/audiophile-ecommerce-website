import { FooterNav, Link, NavBar } from "../styles/shared-styles";

const Navigation = ({ footer }) => {
  return (
    <>
      {footer ? (
        <FooterNav>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Headphones</Link>
          <Link href={"#"}>Speakers</Link>
          <Link href={"#"}>Earphones</Link>
        </FooterNav>
      ) : (
        <NavBar>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Headphones</Link>
          <Link href={"#"}>Speakers</Link>
          <Link href={"#"}>Earphones</Link>
        </NavBar>
      )}
    </>
  );
};
export default Navigation;
