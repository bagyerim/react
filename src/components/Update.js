import React, { useState } from 'react';

const Update = ({ title: initialTitle, body: initialBody, onUpdate }) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(title, body);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
