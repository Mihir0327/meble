import React, { useState } from 'react'
import DropdownListItem from './dropdownListItem';

const NavItem = ({ data, handleOnclickMenu, selectedMenuIndex }: { data: any, handleOnclickMenu: any, selectedMenuIndex: any }) => {

    const { title, submenu, icon } = data;





    return (
        <div className="block lg:flex">
            {/* <button className="flex" onClick={handleOnclickMenu}>{data.title} */}
            <button className="flex" onClick={() => handleOnclickMenu(data.id)} >{title}
                {
                    submenu ? <svg className="item-center -mr-1 ml-2 h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg> : ''
                }</button>
            {(selectedMenuIndex == Number(data.id)) && <div className="absolute flex items-center justify-center rounded-b-lg w-[6rem] mx-10 z-20 bg-white translate-y-7 -translate-x-10">
                <ul>
                    {/* {icon && submenu.map((({list} : {list:any}) => <DropdownList list={list}/>))} */}
                    {submenu.map((listItem: any,index:number) => {
                        return (
                            <DropdownListItem key={index} listItem={listItem} />
                        )
                    })}
                    {/* <DropdownData list={submenu} /> */}
                </ul>


            </div>}
        </div>
    )
}

export default NavItem;