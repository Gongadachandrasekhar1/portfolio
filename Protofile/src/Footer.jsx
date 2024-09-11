import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Footer() {
  return (
    <footer className="footer container-fluid bg-dark text-center text-light d-flex justify-content-evenly align-items-center flex-wrap">
      <p>&copy;Copywrite</p>&nbsp;&nbsp;
      <p>
        <EmailIcon />
        <a
          className="text-decoration-none text-light"
          href="mailto:gongadachandu770299@gmail.com"
        >
          gongadachandu770299@gmail.com
        </a>
      </p>
      &nbsp;&nbsp;
      <p>
        <LocalPhoneIcon />
        7893399798
      </p>
    </footer>
  );
}
