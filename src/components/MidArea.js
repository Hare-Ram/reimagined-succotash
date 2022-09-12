import React, {useRef, useState} from "react";
import getCardFor from "../factories/cardFactory";
import Icon from "./Icon";

export default function MidArea(props) {
  const [
    droppedCards,
    setDroppedCards,
  ] = useState([]);

  const handleDrop = (e) => {
    e.stopPropagation();

    // Add dropped card to droppedCards array to be processed later
    setDroppedCards([ ...droppedCards, e.dataTransfer.getData('text/plain') ]);
  
    return false;
  }

  const handleDragOver = (e) =>  {
    e.preventDefault();
    return false;
  }

  const handleDragEnter = (e) => {
    // console.log('Drag Enter');
  }

  const handleDragLeave = (e) => {
    // console.log('Drag Leave');
  }

  const handleFlagClick = () => {
    const {onFlagClicked} = props;

    if (onFlagClicked) {
      onFlagClicked(droppedCards);
    }
  }

  const containerElem = useRef(null);

  return (
    <div
      ref={containerElem}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className="flex-1 h-full overflow-auto">
      <div onClick={handleFlagClick} className="flex flex-row flex-end cursor-pointer justify-end">
        <Icon
          name="flag"
          size={15}
          className="text-green-600 mx-2" />
      </div>
      {
        droppedCards.length ?
        droppedCards.map(card => React.createElement(getCardFor(card)))
        : "Drop a card from left to start."
      }
    </div>);
}
