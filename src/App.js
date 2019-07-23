import React from 'react';
import './App.css';
import Side from './Side.js';
import { Layout } from 'element-react';

function App() {
  return (
    <div className="App">
      <Layout.Row>
        <Layout.Col span="4">
          <Side/>
        </Layout.Col>
      </Layout.Row>
    </div>
  );
}

export default App;
