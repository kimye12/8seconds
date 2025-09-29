import "./MovSection.css";
import video from "../../../assets/video.webm";

export default function MovSection() {
  return (
    <section id="mov-section">
      <h2>엔하이픈 선우의 여름 기록</h2>
      <div className="videoPlayer">
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
