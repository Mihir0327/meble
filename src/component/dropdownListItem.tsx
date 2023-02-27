import React from 'react'

const DropdownListItem = ({ listItem }: { listItem: any }) => {

    const { subtitle } = listItem;
    return (
        <li className='my-2'>{subtitle}</li>
    )
}

export default DropdownListItem