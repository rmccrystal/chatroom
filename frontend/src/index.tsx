import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chatroom from "./components/chatroom/chatroom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

ReactDOM.render(
  <React.StrictMode>
    <Chatroom />
  </React.StrictMode>,
  document.getElementById('root')
);
