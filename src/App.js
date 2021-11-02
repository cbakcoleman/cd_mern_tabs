import './App.css';
import {useState} from 'react';
import Tab from './components/Tab';

function App() {

  const [tabList, setTabList] = useState([
    {tabNum: "tab1",
    tabContent: "Tab 1 content is showing here."},
    {tabNum: "tab2",
    tabContent: "Tab 2 content is showing here."},
    {tabNum: "tab3",
    tabContent: "Tab 3 content is showing here."}
  ])



  return (
    <div className="App">
      <Tab tabList={tabList}/>
    </div>
  );
}

export default App;
