import logo from './logo.svg';
import './App.css';
import { Button, Flex } from 'antd';
import 'antd/dist/reset.css';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      {/* <h1>Analyzinn Solutions</h1> */}
      {/* <Button type="primary">Primary Button</Button> */}
      <Nav />
    </div>
  );
}

export default App;
