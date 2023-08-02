import bootstrapLogo from "../assets/brand/bootstrap-logo.svg";

const Logo = () => {
  return (
    <>
      <a
        href="#"
        className="d-flex align-items-center link-body-emphasis text-decoration-none"
      >
        <img
          className="me-2"
          src={bootstrapLogo}
          alt="bootstrapLogo"
          width={40}
          height={32}
        />
        <span className="fs-4">Pricing example</span>
      </a>
    </>
  );
};

export default Logo;
