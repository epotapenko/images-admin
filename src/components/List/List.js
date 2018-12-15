import React from 'react';
import Type from 'prop-types';

import Image from '../Image/Image';

const List = ({
    list,
    selectedImageId,
    isAppSave,
    onEdit,
    onDelete,
    onSelect
}) => {
    const generatedList = list.map(item => {
        if( typeof item === "object" ) {
            return (
                <Image 
                    key={item.id}
                    image={item}
                    selectedImageId={selectedImageId}
                    isAppSave={isAppSave}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onSelect={onSelect}
                />
            )
        }

        return [];
        
    })

    return generatedList;
};

List.propTypes = {
    list: Type.array.isRequired,
    selectedImageId: Type.string.isRequired,
    onEdit: Type.func,
    onDelete: Type.func,
    onSelect: Type.func
}

export default List;