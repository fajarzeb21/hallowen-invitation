import invitationData from "../data/InvitationData";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        🎃 {invitationData.brandName}
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#invitation">Invitation</a>
        <a href="#countdown">Countdown</a>
      </div>

      <a href="#invitation" className="nav-button">
        View Invitation ↗
      </a>
    </nav>
  );
}

export default Navbar;