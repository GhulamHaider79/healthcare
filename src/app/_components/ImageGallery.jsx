import React from 'react';

const ImageGallery = () => {
  const images = [
    {
      src: 'https://www.shutterstock.com/image-vector/vector-human-brain-on-white-600nw-1928125664.jpg',
      label: 'Human Brain'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_AfQ4FNOvNFGG3zR5aapAVw7LS7wX_5LYQ&s',
      label: 'Abstract Art'
    },
    {
      src: 'https://img.freepik.com/premium-vector/kidney-icon-vector-illustration_665655-11545.jpg',
      label: 'Kidney'
    },
    {
      src: 'https://us.123rf.com/450wm/moodboard/moodboard1304/moodboard130405145/19213570-blue-eye-on-white-background.jpg',
      label: 'Eyes'
    },
    {
      src: 'https://st2.depositphotos.com/2498595/5605/v/950/depositphotos_56057369-stock-illustration-ear-flat-blue-simple-icon.jpg',
      label: 'Ear'
    },
    {
      src: 'https://thumbs.dreamstime.com/b/blue-stomach-silhouette-white-background-blue-flat-silhouette-sign-symbol-stomach-organ-isolated-white-background-153913473.jpg',
      label: 'stomach'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image, index) => (
        <div key={index} className="w-48 border-2 border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-48 object-cover" />
          <div className="text-center mt-2 text-gray-800 font-semibold">{image.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
