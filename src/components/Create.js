import React, { useState } from 'react';

const Create = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, body);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

export default Create;
