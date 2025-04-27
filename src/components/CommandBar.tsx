// src/components/CommandBar.tsx

import React, { useState } from 'react';

type CommandBarProps = {
    onSubmitCommand: (command: string) => void; // Callback function to pass the command up to the parent
};

const CommandBar: React.FC<CommandBarProps> = ({ onSubmitCommand }) => {
    const [command, setCommand] = useState<string>('');

    const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(e.target.value);
    };

    const handleCommandSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitCommand(command); // Pass the command to the parent
        setCommand(''); // Clear input after submission
    };

    return (
        <form onSubmit={handleCommandSubmit} className="bg-terminal-dark text-terminal-green p-4 w-full">
            <span>&gt;</span>
            <input
                type="text"
                value={command}
                onChange={handleCommandChange}
                className="bg-transparent border-none outline-none text-terminal-green ml-2 w-3/4"
                placeholder="Type your command..."
            />
        </form>
    );
};

export default CommandBar;
