import React from 'react';
import Icon from "../Icon";

const WhenFlagClicked = () => {
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', 'WHEN_FLAG_CLICKED');
    }
    return (
        <div
            onDragStart={handleDragStart}
            draggable="true"
            className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            {"When "}
            <Icon name="flag" size={15} className="text-green-600 mx-2" />
            {"clicked"}
        </div>
    );
}

export default WhenFlagClicked;