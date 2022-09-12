import React from 'react';
import Icon from "../Icon";

const MoveACWXDegrees = () => {
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', 'TURN_ACW_X_DEGREES');
    }
    return (
        <div
            onDragStart={handleDragStart}
            draggable="true"
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            {"Turn "}
            <Icon name="undo" size={15} className="text-white mx-2" />
            {"15 degrees"}
        </div>
    );
}

export default MoveACWXDegrees;