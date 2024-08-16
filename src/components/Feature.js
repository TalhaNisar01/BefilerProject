import React from 'react';
import '../App.css';

const FeaturedVideos = () => {
  const videos = [
    {
      title: "Tax Filing, NTN Registration, ...",
      description:
        "Befiler is Pakistan's only online tax solution which all the wealth reconciliation realtime fo...",
      embedUrl: "https://www.youtube.com/embed/iN5ZwB8OqNY",
    },
    {
      title: "Tax Filing is easy with Befiler's App!",
      description:
        "Register your NTN or file your tax return with Befiler's App within minutes. Its fast, simple, ...",
      embedUrl: "https://www.youtube.com/embed/VgZK3sh9KpE",
    },
    {
      title: "Benefits of Tax Filing | Why bec...",
      description:
        "The video explains why a person should file the tax return and become tax filer to have his/he...",
      embedUrl: "https://www.youtube.com/embed/4onMfOE0bq0",
    },
    {
      title: "Befiler.com - Hassle Free way of...",
      description:
        "Wasim Akram talks about Befiler.com as a most convenient way to file returns in 3 easy steps....",
      embedUrl: "https://www.youtube.com/embed/pexIO1SMR3k",
    },
  ];

  return (
    <div className="featured-videos-container">
      <h2 className="featured-videos-title">Featured Videos</h2>
      <div className="featured-videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-details">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
