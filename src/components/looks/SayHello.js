import React from 'react';

const SayHello = () => {
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', 'SAY_HELLO');
    }

    return (
        <div
            onDragStart={handleDragStart}
            draggable="true"
            className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            {"Say Hello"}
        </div>
    );
}

export default SayHello;