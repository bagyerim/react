import React from 'react';

function Header(props) {
  const linkStyle = {
    textDecoration: 'none', // 밑줄 제거
    color: 'inherit', // 원래 스타일 유지
  };

  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
          style={linkStyle} // 스타일 적용
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

export default Header;
