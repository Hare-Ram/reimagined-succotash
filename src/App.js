import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const spriteRef = React.createRef();

  const handleFlagClicked = (cards) => {
    processCards(cards);
  }

  const processCards = (cards) => {
    console.log(cards);
    let currentX = 0;
    let currentDeg = 90;
    for (const card of cards) {
      switch (card) {
        case 'MOVE_X_STEPS':
          spriteRef.current.style.transform = `translate(${currentX + 10}px, 0px)`;
          currentX += 10;
          break;

        case 'TURN_ACW_X_DEGREES':
          spriteRef.current.style.transform = `rotate(${currentDeg-15}deg)`;
          currentDeg -= 15;
          break;

        case 'TURN_CW_X_DEGREES':
          spriteRef.current.style.transform = `rotate(${currentDeg+15}deg)`;
          currentDeg += 15;
          break;

        case 'SAY_HELLO':
          spriteRef.current.appendChild(document.createTextNode("Hello"));
          break;

        case 'SAY_HELLO_FOR_X_SECONDS':
          const textnode = document.createTextNode("Hello");
          spriteRef.current.appendChild(textnode);
          setTimeout(() => {
            textnode.remove();
          }, 2000)
          break;
        case '':

          break;

        case '':

          break;
  
        case '':
  
          break;
        case '':
  
          break;
      
        default:
          break;
      }
    }
  }


  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar />
          <MidArea onFlagClicked={handleFlagClicked} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea ref={spriteRef} />
        </div>
      </div>
    </div>
  );
}
