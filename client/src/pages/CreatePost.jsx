import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
import './CreatePost.css'; // Import the CSS file

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
    // console.log('Generate button clicked');
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log('Form submitted');
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="create-section">
      <div>
        <h1 className="create-title">Create</h1>
        <p className="create-description">
          Create imaginative and visually stunning images generated through DALL-E AI and share them with the community.
        </p>
      </div>

      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-fields">
          <FormField
            LabelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="image-preview">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="image"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="image placeholder"
              />
            )}

            {generatingImg && (
              <div className="image-overlay">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="button-container">
          <button
            type="button"
            onClick={generateImage}
            className="generate-button"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className="share-section">
  <p className="share-text">
    ** Once you have created the image you want, you can share it with others in the community **
  </p>
  <button
    type="submit"
    className="share-button"
  >
    {loading ? 'Sharing...' : 'Share with the Community'}
  </button>
</div>

      </form>
    </section>
  );
};

export default CreatePost;
