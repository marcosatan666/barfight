import React from 'react';

export  default  class App extends React.Component {
    render() {
        return (
            <div>
                <div className="neon">
                    <div className="padding"/>
                    <div className="lines"/>
                    <div className="padding"/>
                    <div className="text">
                        <h1>bar fight</h1>
                    </div>
                </div>
                <div>
                    <h1 style={{marginBottom: '15px'}}>Что такое <span style={{color: "#00FF66"}}>bar fight</span>?</h1>
                </div>
            </div>
        )
    }
}

// class App extends React.Component {
//
//     render() {
//     return (
//         <div>
//             <div className="mainline">
//                 <div className="neon">
//                     <p className="latteart">latte art battle</p>
//                     <p className="barfight" style={{marginTop:'57px', marginLeft:'70px'}}>bar fight</p>
//                 </div>
//                 <div className="line1">
//                 </div>
//                 <div className="line2">
//                 </div>
//                 <div className="line3">
//                 </div>
//             </div>
//             <div style={{display:"flex"}}>
//                 <div className="text">
//                     <h1 style={{marginBottom:'15px'}}>Что такое <span style={{color: "#00FF66"}}>bar fight</span>? </h1>
//                     <p style={{margin: '0 10px'}}>Мы - не просто крутейшие турниры и баттлы
//                         в барной сфере,это целая тусовка и она
//                         не только для БАРных ребят. Мы это делаем,
//                         чтобы показать <span style={{color: "#BD00FF"}}>мир бара</span> всем!
//                         Мы те,кто объединяет людей,позволяет показать
//                         себя , заработать на том,что ты <span style={{color: "#BD00FF"}}>умеешь</span>
//                         и сделать тебя ещё <span style={{color: "#00FF66"}}>круче</span> и даже <span style={{color: "#00FF66"}}>популярнее!</span></p>
//                 </div>
//
//             </div>
//
//
//           <div className="gradient">
//             {/*<div className="neon" >*/}
//             {/*        <h1>bar fight</h1>*/}
//             {/*</div>*/}
//             {/*  <div style={{display:"flex"}}>*/}
//             {/*      <div className="first">*/}
//             {/*            <h1 className="kaef">Кайфуй от искусства*/}
//             {/*                потребления</h1>*/}
//             {/*            <p className="description">Первый в Минске конкурс между*/}
//             {/*                баристами и барменами. Тут должно*/}
//             {/*                быть описание что такое Bar Fight*/}
//             {/*                и в чем его суть. Бла бла бла это текст*/}
//             {/*                я хз что тут писать.*/}
//             {/*                Мы ждем тебя</p>*/}
//             {/*            <button className="button">Подробнее...</button>*/}
//             {/*      </div>*/}
//             {/*      <img style={{flex:"2"}} src={milk} />*/}
//               </div>
//           {/*      <div className="milk">*/}
//           {/*          <img src={milk} />*/}
//           {/*      </div>*/}
//           {/*      <h1 className="textback1" id="a">LATTE-ART BATTLE</h1>*/}
//           {/*      <h1 className="textback2" id="b">COMING SOON</h1>*/}
//           {/*        <div className="latte2">*/}
//           {/*            <img src={latte2} />*/}
//           {/*        </div>*/}
//           {/*        <div className="latte3">*/}
//           {/*            <img src={latte3} />*/}
//           {/*        </div>*/}
//           {/*        <div className="latte1">*/}
//           {/*            <img src={latte1} />*/}
//           {/*        </div>*/}
//           {/*        <h1 className="textbig1" id="c">LATTE-ART BATTLE</h1>*/}
//           {/*        <h1 className="textbig2" id="d">COMING SOON</h1>*/}
//           </div>
//     )
//   }
// }