import invitationData from "../data/InvitationData";

function Footer() {
  const shareMessage = `🎃 You're invited to ${invitationData.partyName}!

📅 Date: ${invitationData.eventDate}
🕒 Time: ${invitationData.eventTime}
📍 Location: ${invitationData.eventLocation}

Join us for a spooky night! 👻

${window.location.href.split("#")[0]}`;

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    shareMessage
  )}`;

  return (
    <footer className="footer" id="footer">
      <a href="#home" className="logo">
        🎃 {invitationData.brandName}
      </a>

      <p>
        Made for magical nights and delightfully spooky memories.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Share on WhatsApp ↗
      </a>

      <span>
        © 2026 {invitationData.brandName} · ENTER AT YOUR OWN RISK
      </span>
    </footer>
  );
}

export default Footer;