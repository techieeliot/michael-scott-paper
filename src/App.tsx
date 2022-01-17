import { FC } from 'react';
import { Routes, Route} from "react-router-dom";
import Selector from "./Selector"
import Editor from "./Editor";
import { Layout} from 'antd';


import './App.css';


const App: FC = () => {

  return (
    <div className="App">
      <Layout style={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={<Selector />} />
          <Route path="editor" element={<Editor />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
