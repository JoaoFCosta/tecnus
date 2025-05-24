import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="text-white py-4 footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <h2 className="fs-3 fw-bold mb-2">Tecnus Saturn</h2>
            <Link
              to="/terms"
              className="small text-decoration-none text-white textLink"
            >
              Política de privacidade e<br />
              termos de uso
            </Link>
          </div>

          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <p className="mb-3 textLink">
              Entre em contato conosco pelas
              <br />
              redes sociais
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.instagram.com/facampenact/"
                target="_blank"
                className="text-decoration-none"
                style={{ color: "#e263c9" }}
              >
                <FaInstagram
                  style={{
                    borderColor: "#e263c9",
                    width: "40px",
                    height: "40px",
                  }}
                />
                <span className="visually-hidden">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/enactusfacamp/?originalSubdomain=br"
                target="_blank"
                className="text-decoration-none"
                style={{ color: "#e263c9" }}
              >
                <PiLinkedinLogoLight
                  style={{
                    borderColor: "#e263c9",
                    width: "40px",
                    height: "40px",
                  }}
                />
                <span className="visually-hidden">LinkedIn</span>
              </a>
              <Link
                href="https://www.instagram.com/facampenact/"
                target="_blank"
                className="text-decoration-none"
                style={{ color: "#e263c9" }}
              >
                <FaInstagram
                  style={{
                    borderColor: "#e263c9",
                    width: "40px",
                    height: "40px",
                  }}
                />
                <span className="visually-hidden">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <p className="fw-medium textLink">Enactus - FACAMP</p>
            <p className="small textLink">
              Av. Alan Turing, 805 - Cidade
              <br />
              Universitária, Campinas - SP, 13083-898
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
