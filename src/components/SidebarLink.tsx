import React from 'react';

type SidebarLinkProps = {
    label: string;
    component: string;
    onClick: (component: string) => void;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, component, onClick }) => {
    return (
        <button
            onClick={() => onClick(component)}
            className="text-terminal-green text-left font-terminal hover:text-green-300 focus:outline-none w-full text-sm py-2 px-4"
        >
            {label}
        </button>
    );
};

export default SidebarLink;
