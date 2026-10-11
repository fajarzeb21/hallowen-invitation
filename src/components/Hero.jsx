import invitationData from "../data/InvitationData";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="moon"></div>

      <div className="hero-content">
        <p className="eyebrow">
          ✦ THE NIGHT OF MYSTERY ✦
        </p>

        <h1>
          A LITTLE
          <br />
          <span>SPOOKY</span>
          <br />
          A LOT OF FUN
        </h1>

        <p className="hero-description">
          {invitationData.invitationMessage}
        </p>

       
        <p className="hero-note">
          OCTOBER 31 · A NIGHT TO REMEMBER
        </p>
      </div>

      <div className="floating-decoration pumpkin-one">🎃</div>
      <div className="floating-decoration pumpkin-two">🦇</div>
      <div className="floating-decoration pumpkin-three">✦</div>

      <div className="hero-bottom">
        <span>WELCOME TO THE DARK SIDE</span>
        <a href="#invitation">SCROLL TO EXPLORE ↓</a>
      </div>
    </section>
  );
}

export default Hero;