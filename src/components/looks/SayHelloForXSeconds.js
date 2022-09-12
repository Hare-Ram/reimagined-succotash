import React from 'react';

const SayHelloForXSeconds = () => {
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', 'SAY_HELLO_FOR_X_SECONDS');
    }

    return (
        <div
            onDragStart={handleDragStart}
            draggable="true"
            className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            { "Say Hello for 2 seconds." }
        </div>
    );
}

export default SayHelloForXSeconds;