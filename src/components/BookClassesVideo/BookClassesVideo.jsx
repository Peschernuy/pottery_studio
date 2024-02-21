import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoModal from "../VideoModal/VideoModal";
import playBtn from "../../assets/images/classes/btn_play.png";
import "./bookClassesVideo.scss";

const BookClasses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "https://youtu.be/dQw4w9WgXcQ?si=p9SRSUlBYeLeZSQ6";

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const toggleVideoPlayback = () => setIsOpen(!isOpen);

  return (
    <section className="book__section">
      <div className="book__wrapper">
        <h1 className="book__title--1">VISIT OUR WEEKEND</h1>
        <div className="book__inner">
          <div className="book__inner--video">
            <p className="book__inner--text">weekend of artistic exploration</p>
            <h4 className="book__inner--date">december 23, 2023</h4>
            <button className="book__inner--btn" onClick={toggleVideoPlayback}>
              <img src={playBtn} alt="Open video" />
            </button>
            <VideoModal
              isOpen={isOpen}
              onClose={handleCloseModal}
              isPlaying={isOpen}
            >
              <div className="book__video--wrapper">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${videoId}`}
                  width="860px"
                  height="640px"
                  controls
                  playing={isOpen}
                />
              </div>
            </VideoModal>
          </div>
        </div>
        <h1 className="book__title--2">POTTERY CLASSES</h1>
      </div>
    </section>
  );
};

export default BookClasses;
