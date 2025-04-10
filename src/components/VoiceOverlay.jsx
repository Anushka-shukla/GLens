import './styles/VoiceOverlay.css';

const VoiceOverlay = () => {
  return (
    <div className="voice-overlay">
      <div className="google-dots">
        <span className="dot red" />
        <span className="dot blue" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>
    </div>
  );
};

export default VoiceOverlay;
