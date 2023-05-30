import React, { useState } from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Article from './components/Article.js';
import Create from './components/Create.js';
import Update from './components/Update.js';

const App = () => {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'javascript is ...' },
  ]);

  const handleTopicClick = (topicId) => {
    setMode('READ');
    setId(topicId);
  };

  const handleCreate = (title, body) => {
    const newTopic = { id: nextId, title: title, body: body };
    const newTopics = [...topics, newTopic];
    setTopics(newTopics);
    setMode('READ');
    setId(nextId);
    setNextId(nextId + 1);
  };

  const handleUpdate = (title, body) => {
    const newTopics = [...topics];
    const updatedTopic = { id: id, title: title, body: body };
    const topicIndex = newTopics.findIndex((topic) => topic.id === id);
    newTopics[topicIndex] = updatedTopic;
    setTopics(newTopics);
    setMode('READ');
  };

  let content = null;
  let contextControl = null;
  let topic = null;

  switch (mode) {
    case 'WELCOME':
      content = <Article title="Welcome" body="Hello, WEB" />;
      break;
    case 'READ':
      topic = topics.find((topic) => topic.id === id);
      content = <Article title={topic.title} body={topic.body} />;
      contextControl = (
        <li>
          <a
            href={'/update/' + id}
            onClick={(event) => {
              event.preventDefault();
              setMode('UPDATE');
            }}
          >
            Update
          </a>
        </li>
      );
      break;
    case 'CREATE':
      content = <Create onCreate={handleCreate} />;
      break;
    case 'UPDATE':
      topic = topics.find((topic) => topic.id === id);
      content = (
        <Update
          title={topic.title}
          body={topic.body}
          onUpdate={handleUpdate}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div>
      <Header
        title="React"
        onChangeMode={() => {
          setMode('WELCOME');
        }}
      />
      <Nav topics={topics} onChangeMode={handleTopicClick} />

      {content}

      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode('CREATE');
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
};

export default App;

