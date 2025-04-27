import React from 'react';

type ListProps = {
    map: Record<string, React.ComponentType<any>>;
};

const List: React.FC<ListProps> = ({ map }) => {
    const renderTree = (map: Record<string, React.ComponentType<any>>, indent: string = '') => {
        let treeStr = '';

        Object.keys(map).forEach(key => {
            treeStr += `${indent}- ${key}\n`;
        });

        return treeStr;
    };

    const treeView = renderTree(map);
    const convertNewlinesToBreaks = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className="text-terminal-green">
            {convertNewlinesToBreaks(treeView)}
        </div>
    );
};

export default List;
