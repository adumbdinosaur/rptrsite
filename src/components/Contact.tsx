import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="space-y-2">
            <p>Contact:</p>
            <div>
                <a href='mailto:william@rptr.dev' className="text-terminal-green hover:text-green-300">E-mail</a>
                <p></p>
                <a
                    href="https://github.com/adumbdinosaur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:text-green-300"
                >
                    GitHub
                </a>
                <p></p>
                <a
                    href="https://www.linkedin.com/in/william-heywood-ba727235b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:text-green-300"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Contact;
