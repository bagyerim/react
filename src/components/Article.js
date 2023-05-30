import React from 'react';

const Article = ({ title, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
};

export default Article;
