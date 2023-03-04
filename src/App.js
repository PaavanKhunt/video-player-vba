import React, { useState, useRef } from 'react';
const urls = [
  {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    cover: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
  },
  {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/339px-Big_buck_bunny_poster_big.jpg',
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  const handleEnd = () => {
    const total = urls.length;
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      ref.current.load();
      ref.current.play();
    }
  };

  const onMouseEnter = () => {
    ref.current.play();
  };

  const onMouseLeave = () => {
    ref.current.pause();
  };

  const handleVideoChange = (index) => {
    setCurrentIndex(index);
    ref.current.load();
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'black',
      }}
    >
      <div>
        <div
          style={{
            position: 'absolute',
            right: 0,
            zIndex: 100,
          }}
        >
          <div>
            <span style={{ color: 'white' }}>
              {currentIndex + 1}/{urls.length}
            </span>
          </div>
        </div>
        <video
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={ref}
          muted="muted"
          style={{ height: 400, width: 400, objectFit: 'cover' }}
          controls
          onEnded={handleEnd}
          poster={urls[currentIndex].cover}
        >
          <source src={urls[currentIndex].url} />
        </video>
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 12,
            left: 0,
            zIndex: 100,
            paddingInline: 10,
            paddingBlock: 12,
            display: 'flex',
            margin: 'auto',
            justifyContent: 'space-evenly',
            width: 60,
          }}
        >
          {urls.map((_, index) => (
            <button
              onClick={() => handleVideoChange(index)}
              disabled={index === currentIndex}
              style={{
                outline: 'none',
                height: 12,
                width: 12,
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: index === currentIndex ? '#1e90ff' : 'white',
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
