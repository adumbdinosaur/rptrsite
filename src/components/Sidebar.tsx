import React from 'react';
import SidebarLink from './SidebarLink';

type Props = {
    onSelect: (componentName: string) => void;
    setEasterEgg: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
};

const Sidebar: React.FC<Props> = ({ onSelect, setEasterEgg }) => {
    const links = [
        { label: 'home.txt', component: 'Home', list: true },
        { label: 'projects.txt', component: 'Projects', list: true },
        { label: 'about.txt', component: 'About', list: true },
        { label: 'contact.nfo', component: 'Contact', list: true },
    ];

    const handleLinkClick = (link: string) => {
        onSelect(link);
        setEasterEgg(null);
    };

    return (
        <div className="w-64 bg-sidebar-bg h-full p-4 flex flex-col space-y-4">
            {links.map((link) => (
                <SidebarLink
                    key={link.label}
                    label={link.label}
                    component={link.component}
                    onClick={() => handleLinkClick(link.component)}
                />
            ))}
        </div>
    );
};

export default Sidebar;
