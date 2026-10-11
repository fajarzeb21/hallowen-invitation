
import invitationData from "../data/InvitationData";

function Invitation() {
  return (
    <section className="invitation-section" id="invitation">
      <p className="section-label">✦ YOU ARE INVITED ✦</p>

      <h2>
        Something Wicked
        <br />
        <span>This Way Comes</span>
      </h2>

      <p className="section-description">
        A magical evening of mysterious shadows, spooky decorations,
        and unforgettable Halloween memories.
      </p>

      <div className="invitation-card">
        <div className="card-decoration">✦ ✧ ✦</div>

        <p className="card-small">
          YOU'RE CORDIALLY INVITED TO
        </p>

        <p className="host-label">HOSTED BY</p>

        <h3>{invitationData.hostName}</h3>

        <h4>{invitationData.partyName}</h4>

        <div className="card-divider">☠</div>

        <p className="card-details">
          {invitationData.eventDate} · {invitationData.eventTime}
        </p>

        <p className="card-location">
          📍 {invitationData.eventLocation}
        </p>

        <p className="card-message">
          {invitationData.invitationMessage}
        </p>

        <a href="#countdown" className="card-button">
          {invitationData.buttonText}
        </a>

        <p className="card-footer">
          COME FOR THE CANDY, STAY FOR THE FRIGHT
        </p>
      </div>
    </section>
  );
}

export default Invitation;

