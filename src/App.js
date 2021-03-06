import React from 'react';

export  default  class App extends React.Component {
    render() {
        return (
            <div style={{paddingBottom: "calc(100vw - 97vw)"}}>
                <div className="neon">
                    <div className="padding"/>
                    <div className="lines"/>
                    <div className="padding"/>
                    <div className="text">
                        <h1>bar fight</h1>
                    </div>
                </div>
                <div className="divLogoSVG">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" className="logoSVG">
                        <g>
                            <path id="svg-1" className="st0" d="M1045.25,512.45c-1.69,26.41-10.57,37.61-10.57,37.61l-33.23,45.39c0,0-62.66-24.79-76.23-1   c-13.57,23.79-10.21,45.2-10.21,45.2s4.22,7.42-11.72,29.61c-15.94,22.19-297.03,372.97-315.06,411.16s72.5,139.96,124.94,81.06   s325.9-419.11,325.9-419.11s57.84-1.25,62.12-23.35c4.28-22.1-33.38-71.7-33.38-71.7l51.97-66.43l6.98-62.79   c0,0,106.85-18.15,168.47-109.37c14.44-21.37,26.39-46.76,33.91-76.86c-33.65-55.92-33.65-55.92-33.65-55.92   s11.17-20.39,4.84-34.16s-23.3-38.71-23.3-38.71l-23.61,6.2c0,0-71.21-95.62-261.56,71.65"/>
                            <path id="svg-2" className="st0" d="M869.66,1255l-162.54,85.26c0,0-24.97,25.96-54.1-15.93c-29.12-41.9-438.56-686.18-438.56-686.18   s-15.91-3.09-11.17-21.3s-34.67-97.59,56.39-202.54c-39.53-95.04-88.3-215.26-88.3-215.26s-9.41-17.94,51.12-49.69   s68.38-35.87,68.38-35.87s56.1-26.57,71.22-5.92c15.12,20.65,115.29,192.53,115.29,192.53s124.77-18.28,201.07,61.77   c0,0,34.07,5,15.88,30.27c23.15,55.04,70.63,167.35,70.63,167.35"/>
                        </g>
                    </svg>
                </div>
                <div>
                    <h1 style={{marginBottom: "calc(100vw - 98vw)", textAlign: "center", fontSize: "1.1em", padding: "0 calc(100vw - 97vw)"}}>Что такое <span style={{color: "#00FF66"}}>bar fight</span>?</h1>
                    <p style={{padding: "0 calc(100vw - 97vw)", textAlign: "justify"}}>Мы – не просто крутейшие турниры и баттлы в барной сфере, это целая тусовка и она не только для БАРных ребят. Мы это делаем, чтобы показать <span style={{color: "rgb(212,95,255)"}}>мир бара</span> всем! Мы те, кто объединяет людей, позволяет показать себя, заработать на том, что ты <span style={{color: "rgb(212,95,255)"}}>умеешь</span> и сделать тебя ещё <span style={{color: "#00FF66"}}>круче</span> и даже <span style={{color: "#00FF66"}}>популярнее</span>!</p>
                </div>
            </div>
        )
    }
}

