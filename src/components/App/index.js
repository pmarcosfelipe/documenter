import React from "react";
import { Layout } from "element-react";

import Side from "./components/Side";
import Contents from "./components/Contents";
import Paginate from "./components/Paginate";

import "./style.scss";

function App() {
  return (
    <div className="App">
      <Layout.Row>
        <Layout.Col span="4">
          <Side />
        </Layout.Col>
        <Layout.Col span="20">
          <Contents />
          <Paginate />
        </Layout.Col>
      </Layout.Row>
    </div>
  );
}

export default App;
