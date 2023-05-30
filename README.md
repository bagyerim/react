# react
### 코드 리뷰
reviwer: 예은님

### 1. Creat.js
     html,css,js를 클릭하면 title,body,button이 그냥 한 줄로 생기는 일이 발생함.
     
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
  
  이 코드를 p로 묶어줌으로 해결하였음.
       <p><input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      </p>
      <p><textarea
        placeholder="Body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea></p>
      <p><button type="submit">Create</button></p>
      
### 2. index.js
src파일에 components 파일을 추가하여 Header.js, Article.js 등을 추가하였는데, 이때 추가한 index.js 파일은 없어도 react앱을 주석처리해도 잘 돌아가는 것을 확인함.
 export { default as Header } from './Header';
 export { default as Nav } from './Nav';
 export { default as Article } from './Article';
 export { default as Create } from './Create';
 export { default as Update } from './Update';
(export로 내보내는 것.)

### 3.App.js
import React, { useState } from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Article from './components/Article.js';
import Create from './components/Create.js';
import Update from './components/Update.js';
올려주신 양식을 보기 이전에 만들어버려서 보다 가독성이 떨어졌음.

import {useState} from 'react';
import {Header, Nav, Article, Create, Update} from "./components";
로 코드를 바꾸어 가독성을 높임.




  

