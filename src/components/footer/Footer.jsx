import styles from "./Footer.module.css";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoLight } from "react-icons/pi";


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <h2 className="fs-3 fw-bold mb-2">Tecnus Saturn</h2>
            <p className={`small ${styles.text}`}>
              Política de privacidade e<br />
              termos de uso
            </p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <p className={`mb-3 ${styles.text}`}>
              Entre em contato conosco pelas
              <br />
              redes sociais
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link
                href="#"
                className="text-decoration-none"
                style={{ color: "#e263c9" }}
              >
                <FaInstagram
                  style={{
                    borderColor: "#e263c9",
                    width: "24px",
                    height: "24px",
                  }}
                />
                <span className="visually-hidden">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-decoration-none"
                style={{ color: "#e263c9" }}
              >
                <PiLinkedinLogoLight
                  style={{
                    borderColor: "#e263c9",
                    width: "24px",
                    height: "24px",
                  }}
                />
                <span className="visually-hidden">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-decoration-none"
                style={{ color: "#e263c9" }}
              >
                <FaInstagram
                  style={{
                    borderColor: "#e263c9",
                    width: "24px",
                    height: "24px",
                  }}
                />
                <span className="visually-hidden">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <p className={`fw-medium ${styles.text}`}>Enactus- FACAMP</p>
            <p className={`small ${styles.text}`}>
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
