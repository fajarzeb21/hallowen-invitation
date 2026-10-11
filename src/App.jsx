
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import invitationData from "./data/InvitationData";

function App() {
  return (
    <div
      className="app"
      style={{
        "--dark": invitationData.colors.background,
        "--orange": invitationData.colors.accent,
        "--cream": invitationData.colors.text,
      }}
    >
      <Navbar />

      <main>
        <Hero />
        <Invitation />
        <Countdown />
      </main>

      <Footer />
    </div>
  );
}

export default App;

