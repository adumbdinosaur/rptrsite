import { Dispatch, SetStateAction } from 'react';
import List from '../components/List';
import componentsMap from '../components/componentsMap';

export const handleEasterEggs = (
    command: string,
    setEasterEgg: Dispatch<SetStateAction<React.ReactNode | null>>,
    setSidebarVisible: Dispatch<SetStateAction<boolean>>,
    setSelectedComponent: (componentKey: string) => void
) => {
    const lowerCaseCommand = command.toLowerCase().replace(/\s+/g, '');

    if (lowerCaseCommand === 'dance') {
        setEasterEgg(
            <div className="text-terminal-green animate-pulse" >
                🕺💃 Time to Dance! The terminal is alive! 🕺💃
            </div>
        );
    } else if (lowerCaseCommand === 'ls') {
        setEasterEgg(<List map={componentsMap} />);
    } else if (lowerCaseCommand === 'hide') {
        setEasterEgg(<div className="text-terminal-green" > </div>);
        setSidebarVisible((prevState) => !prevState);
    } else if (lowerCaseCommand.substring(0, 2) === 'cd') {
        if (lowerCaseCommand.length === 2) {
            setSelectedComponent('Home')
            return
        }
        setEasterEgg(
            <div className="text-terminal-green" > {lowerCaseCommand.substring(2)} is not a valid directory </div>
        );
    } else if (lowerCaseCommand === '?') {
        setEasterEgg(
            <div className="text-terminal-green">
                <div>home</div>
                <div>projects</div>
                <div>about</div>
                <div>contact</div>
                <div>hide</div>
                <div>ls</div>
                <div>dance</div>
                <div>cd</div>
                <div>?</div>
            </div>
        );
    } else {
        const componentKey = Object.keys(componentsMap).find(
            (key) => key.toLowerCase() === lowerCaseCommand
        );
        if (componentKey) {
            setEasterEgg(null);
            setSelectedComponent(componentKey);
        } else {
            setEasterEgg(<div className="text-terminal-green" > Command not recognized. Try typing "dance"! </div>);
        }
    }
};
