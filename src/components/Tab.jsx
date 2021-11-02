import React, {useState} from 'react';
import './styles.css';

const Tab = (props) => {
    const [clickedTab, setClickedTab] = useState(0);
    const [tabIndex, setTabIndex] = useState("");
    const tabClicker = (idx) => {
        console.log("Clicked tab at idx=", idx);
        setClickedTab(idx);
        setTabIndex(idx);
        console.log("Tab Index is:" + tabIndex);
    }

    return (
        <div>
            {
                props.tabList.map((tab, idx) => {
                    return (
                        <div>
                            <button
                                onClick={() => tabClicker(idx)}
                                class="tabLink" key={idx}>
                                {tab.tabNum}
                            </button>
                        </div>
                    );
                })
            }
            <div class="tabCard">
                {
                    <p>{props.tabList[tabIndex].tabContent}</p>
                }
                
            </div>
        </div>
    )
}

export default Tab