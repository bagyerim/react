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
  
  이 코드를 <p>로 묶어줌으로 해결.
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
src파일에 components 파일을 추가하여 Header.js, Article.js 등을 추가하였는데, 이때 추가한 index.js 파일은 없어도 react앱을 주석처리해도 잘 돌아가는 것을 확인.
// export { default as Header } from './Header';
// export { default as Nav } from './Nav';
// export { default as Article } from './Article';
// export { default as Create } from './Create';
// export { default as Update } from './Update';
(export로 내보내는 것.)



  

