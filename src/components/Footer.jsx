
import invitationData from "../data/InvitationData";

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        🎃 {invitationData.brandName}
      </a>

      <p>
        Made for magical nights and delightfully spooky memories.
      </p>

      <a
        href={invitationData.etsyUrl}
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        {invitationData.preorderText}
      </a>

      <span>
        © 2026 {invitationData.brandName} · ENTER AT YOUR OWN RISK
      </span>
    </footer>
  );
}

export default Footer;

