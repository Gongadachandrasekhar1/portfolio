import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function Footer() {
  return (
    <footer className="text-center footer container-fluid bg-dark d-flex justify-content-evenly align-items-center flex-wrap">
      <ul className="mt-3">
        <li>&copy;Copywrite</li>&nbsp;&nbsp;
        <li>
          <EmailIcon />
          <a
            className="text-decoration-none "
            href="mailto:gongadachandu770299@gmail.com"
          >
            gongadachandu770299@gmail.com
          </a>
        </li>
        &nbsp;&nbsp;
        <li>
          <LocalPhoneIcon />
          7893399798
        </li>
      </ul>
      {/* <ul>
        <li className="">
          <button className="btn" href="#">
            <ArrowCircleUpIcon />
          </button>
        </li>
      </ul> */}
    </footer>
  );
}
