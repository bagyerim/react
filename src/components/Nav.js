import React from 'react';

const Nav = ({ topics, onChangeMode }) => {
  const listItemStyle = {
    marginBottom: '10px',
  };

  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none', // 밑줄 스타일 제거
  };

  return (
    <nav>
      <ul>
        {topics.map((topic, index) => (
          <li key={topic.id} style={listItemStyle}>
            <button
              onClick={() => onChangeMode(topic.id)}
              style={buttonStyle}
            >
              {index + 1}. {topic.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
