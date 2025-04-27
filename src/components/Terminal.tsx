// src/components/Terminal.tsx

import React from 'react';

type Props = {
    content: React.ReactNode;
};

const Terminal: React.FC<Props> = ({ content }) => {
    return (
        <div className="flex flex-col flex-1 relative">
            {/* Display content */}
            <div className="overflow-y-auto p-6 flex-1">{content}</div>

            {/* Command Bar */}
            <div className="absolute bottom-0 left-0 w-full bg-terminal-dark text-terminal-green p-4">
                {/* The CommandBar content here will be inside this div if we render it directly */}
            </div>
        </div>
    );
};

export default Terminal;
