import React, { useState, useEffect, useRef } from 'react';

import sportsDay from '../../assets/sports_day.jpeg'; 
import scienceExhibition from '../../assets/science_exhibition.jpeg';
import culturalFest from '../../assets/cultural_fest.jpeg';
import classroom from '../../assets/classroom.jpeg';
import library from '../../assets/library.jpeg';
import annualFunction from '../../assets/anual_function.mp4';
import schoolTour from '../../assets/tour.mp4';

const galleryData = {
  photos: [
    { src: sportsDay, alt: 'Students participating in various sports events.' },
    { src: scienceExhibition, alt: 'Students presenting their science projects.' },
    { src: culturalFest, alt: 'Students performing in the cultural fest.' },
    { src: classroom, alt: 'A glimpse of our interactive classrooms.' },
    { src: library, alt: 'Students reading and studying in the school library.' },
  ],
  videos: [
    { src: schoolTour, title: 'Virtual tour of Springdale Public School.' },
    { src: annualFunction, title: 'Highlights from the Annual Function 2023.' },
  ],
};

const Gallery = () => {
  const [selectedType, setSelectedType] = useState('photos');
  const videoRefs = useRef([]);

  useEffect(() => {
    if (selectedType === 'videos' && videoRefs.current.length > 0) {
      videoRefs.current[0].play();
    }
  }, [selectedType]);

  const handleVideoClick = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index) {
        video.pause();
      }
    });
    videoRefs.current[index].play();
  };

  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Gallery</h1>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 font-medium rounded ${selectedType === 'photos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedType('photos')}
          >
            Photos
          </button>
          <button
            className={`px-4 py-2 mx-2 font-medium rounded ${selectedType === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedType('videos')}
          >
            Videos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedType === 'photos' &&
            galleryData.photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{photo.alt}</p>
                </div>
              </div>
            ))}

          {selectedType === 'videos' &&
            galleryData.videos.map((video, index) => (
              <div key={index} className="relative group">
                <video
                  ref={el => (videoRefs.current[index] = el)}
                  src={video.src}
                  controls
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onClick={() => handleVideoClick(index)}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{video.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
