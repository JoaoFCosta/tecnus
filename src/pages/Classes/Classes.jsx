import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaGear } from "react-icons/fa6";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { TbRewindBackward10 } from "react-icons/tb";
import { TbRewindForward10 } from "react-icons/tb";

const courseNames = {
  "google-drive": "Google Drive",
  "google-docs": "Google Docs",
  "google-gmail": "Google Gmail",
  "google-planilhas": "Google Planilhas",
  "google-apresentacao": "Google Apresentação",
  "google-classroom": "Google Classroom",
  seguranca: "Segurança",
  "excel-iniciante": "Excel Iniciante",
  "excel-intermediario": "Excel Intermediário",
  "direitos-consumidor": "Direitos do Consumidor",
  "banco-dados": "Banco de Dados",
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export default function Classes() {
  const { id } = useParams();
  const location = useLocation();
  const videoRef = useRef(null);
  const trackRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [captionsEnabled, setCaptionsEnabled] = useState(true);
  const [volume, setVolume] = useState(1); // volume de 0 a 1
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowVolumeSlider(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleVideoClick = (e) => {
    // Previne que cliques em elementos filhos (ex: botões) disparem o toggle
    if (e.target.tagName.toLowerCase() === "video") {
      togglePlay();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const video = videoRef.current;
    video.volume = newVolume;
    video.muted = newVolume === 0;
    setIsMuted(newVolume === 0);
    setVolume(newVolume);
  };

  const match = location.pathname.match(/(?:curso|class)\/([^/]+)\/aula/);
  const courseKey = match ? match[1] : null;
  const courseTitle =
    courseNames[courseKey] || courseKey || "Curso desconhecido";

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const rewind10Seconds = () => {
    const video = videoRef.current;
    video.currentTime = Math.max(0, video.currentTime - 10);
  };

  const forward10Seconds = () => {
    const video = videoRef.current;
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
  };

  const toggleCaptions = () => {
    if (trackRef.current) {
      const showing = trackRef.current.mode === "showing";
      trackRef.current.mode = showing ? "disabled" : "showing";
      setCaptionsEnabled(!showing);
    }
  };

  const changePlaybackRate = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="text-header-color fw-bold text-center">{courseTitle}</h1>

        <div className="d-flex justify-content-center my-5">
          <div className="video-container">
            <video
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
              onClick={handleVideoClick}
              className="video-player"
              poster="https://via.placeholder.com/720x405?text=Prévia+do+Vídeo"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              <track
                ref={trackRef}
                label="Português"
                kind="subtitles"
                srcLang="pt"
                src="https://www.w3schools.com/html/mov_bbb_subtitled.vtt"
                default
              />
              Seu navegador não suporta o elemento de vídeo.
            </video>

            {/* TOPO DIREITO */}
            <div className="top-right-icons">
              <button
                onClick={toggleCaptions}
                className="icon-btn"
                title="Legendas"
              >
                <MdOutlineSubtitles className="text-gray-700 fs-3" />
              </button>
              <div className="position-relative">
                <button
                  onClick={() => setShowSettings((prev) => !prev)}
                  className="icon-btn"
                  title="Configurações"
                >
                  <FaGear className="text-gray-700 fs-4" />
                </button>
                {showSettings && (
                  <div className="settings-dropdown">
                    <div className="d-flex gap-4">
                      <div>
                        <strong>Velocidade:</strong>
                        <ul className="list-unstyled">
                          {[0.25, 0.5, 0.75, 1, 1.5, 2].map((r) => (
                            <li key={r}>
                              <button
                                onClick={() => changePlaybackRate(r)}
                                className="dropdown-item"
                              >
                                {r === 1 ? "Normal" : `${r}x`}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CONTROLES INFERIORES */}
            <div className="video-controls d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <button onClick={togglePlay} className="btn btn-dark btn-sm">
                  {isPlaying ? "❚❚" : <FaPlay />}
                </button>
                <button
                  onClick={rewind10Seconds}
                  className="btn btn-dark btn-sm"
                  title="Voltar 10s"
                >
                  <TbRewindBackward10 />
                </button>
                <button
                  onClick={forward10Seconds}
                  className="btn btn-dark btn-sm"
                  title="Avançar 10s"
                >
                  <TbRewindForward10 />
                </button>
                <div
                  className="position-relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                      setShowVolumeSlider((prev) => !prev);
                    }}
                    className="btn btn-dark btn-sm"
                    title="Volume"
                  >
                    {isMuted || volume === 0 ? "🔇" : "🔊"}
                  </button>

                  {showVolumeSlider && (
                    <div className="volumeChange position-absolute bg-gray-500 rounded-3 d-flex justify-content-center align-items-center">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                      />
                    </div>
                  )}
                </div>
              </div>
              <input
                type="range"
                className="form-range mx-2 flex-grow-1"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => {
                  const video = videoRef.current;
                  const newProgress = Number(e.target.value);
                  video.currentTime = (newProgress / 100) * video.duration;
                  setProgress(newProgress);
                }}
              />
              <div className="text-white small">
                {formatTime(videoRef.current?.currentTime || 0)} /{" "}
                {formatTime(videoRef.current?.duration || 0)}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center">
          Conteúdo da aula {id} do curso {courseTitle}.
        </p>
      </div>
      <Footer />
    </>
  );
}
