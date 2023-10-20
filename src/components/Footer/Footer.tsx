import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ContainerIconsStyles, FooterGeneralStyles, IconsStyles, ParagraphStyles, TitleSyle } from "./Footer";

export const Footer = () => {
  return (
    <footer>
      <div style={FooterGeneralStyles}>
        <h2 style={TitleSyle}>Rick and Morty | Anthony Simbaña</h2>
        <div style={ContainerIconsStyles}>
          <a style={IconsStyles} href="https://github.com/AnthonySimbana" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a style={IconsStyles} href="https://www.linkedin.com/in/anthony-simba%C3%B1a-45a410245/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a style={IconsStyles} href="https://www.instagram.com/anthojosue05/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p style={ParagraphStyles}>Derechos de autor © 2023 Rick y Morty</p>

      </div>
    </footer>
  );
};
