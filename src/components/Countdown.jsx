
import { useEffect, useState } from "react";
import invitationData from "../data/InvitationData";

function getTimeLeft() {
  const eventDateTime = new Date(
    `${invitationData.eventDate}T${invitationData.eventTime}:00`
  );

  const difference = eventDateTime.getTime() - Date.now();

  if (Number.isNaN(eventDateTime.getTime()) || difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section" id="countdown">
      <p className="section-label">
        ✦ THE WITCHING HOUR APPROACHES ✦
      </p>

      <h2>The Night Is Near</h2>

      <p className="countdown-description">
        Prepare your costume. Gather your friends.
        The spooky celebration is getting closer!
      </p>

      {timeLeft ? (
        <div className="countdown-boxes">
          <div className="countdown-box">
            <strong>{timeLeft.days}</strong>
            <span>DAYS</span>
          </div>

          <div className="countdown-box">
            <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
            <span>HOURS</span>
          </div>

          <div className="countdown-box">
            <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
            <span>MINUTES</span>
          </div>

          <div className="countdown-box">
            <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
            <span>SECONDS</span>
          </div>
        </div>
      ) : (
        <p className="event-passed">
          🎃 The spooky celebration has arrived!
        </p>
      )}

      <a href="#home" className="primary-button">
        Back to the Shadows ↑
      </a>
    </section>
  );
}

export default Countdown;

