import { FC } from 'react';
import Editor from "./Editor";
import { Layout} from 'antd';


import './App.css';


const App: FC = () => {

  return (
    <div className="App">
      <Layout style={{height: "100%"}}>
        <Editor />
      </Layout>
    </div>
  );
}

export default App;
