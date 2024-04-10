
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState({ preview: '', data: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', image.data);
    const response = await fetch('http://localhost:3001/upload',{
      method: 'POST',
      body: formData,
    });
    if (response) setStatus(response.statusText);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {status && <p>{status}</p>}
      {image.preview && <img src={image.preview} alt="preview" />}
    </div>
  );
}

export default App;