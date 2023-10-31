import React from 'react';

function WebEmbed({ src }) {
  return (
    <iframe 
      src={src} 
      style={{ width: '100%', height: '100%', border: 'none' }} 
      title="Embedded Site in React Native"
    />
  );
}

export default WebEmbed;
