import Image from "next/image"
import { FaBars, FaTimes } from "react-icons/fa";
import { MouseEvent, useState } from "react"
import NavItem from "./nav-item";
import { Popover, Menu } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navMenu = [
    {
        id: 0,
        title: 'Furniture',
        icon: true,
        submenu: [
            {
                subtitle: "item 11"
            },
            {
                subtitle: "item 12"
            },
            {
                subtitle: "item 13"
            },
            {
                subtitle: "item 14"
            },
            {
                subtitle: "item 15"
            },
            {
                subtitle: "item 16"
            },
        ]
    },
    {
        id: 1,
        title: 'cupboard',
        icon: true,
        submenu: [
            {
                subtitle: "item 21"
            },
            {
                subtitle: "item 22"
            },
            {
                subtitle: "item 23"
            },
            {
                subtitle: "item 24"
            },
            {
                subtitle: "item 25"
            },
            {
                subtitle: "item 26"
            },
        ]
    },
    {
        id: 2,
        title: 'Beds',
        icon: true,
        submenu: [
            {
                subtitle: "item 31"
            },
            {
                subtitle: "item 32"
            },
            {
                subtitle: "item 33"
            },
            {
                subtitle: "item 34"
            },
            {
                subtitle: "item 35"
            },
            {
                subtitle: "item 36"
            },
        ]
    },
    {
        id: 3,
        title: 'Cabinet',
        icon: true,
        submenu: [
            {
                subtitle: "item 41"
            },
            {
                subtitle: "item 42"
            },
            {
                subtitle: "item 43"
            },
            {
                subtitle: "item 44"
            },
            {
                subtitle: "item 45"
            },
            {
                subtitle: "item 46"
            },
        ]
    },
    {
        id: 4,
        title: 'Court Cupboard',
        icon: false,
    },
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState(false)
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1)
    const onClickMenu = () => {
        setOpen(!open)
    }
    const handleOnclickMenu = (index: number) => {
        if (selectedMenuIndex == index) {
            setSelectedMenuIndex(-1)
        } else {
            setSelectedMenuIndex(index)
        }
      
    }
    return <>
        <div>
            <nav className="flex flex-row justify-between bg-neutral-300 p-2  text-md font-semibold  ">
                <div className="logo ml-5">
                    <Image alt="logo" src={"/logo.webp"} width={100} height={100} />
                </div>
                <div className="flex lg:hidden items-center justify-end">
                    <button onClick={onClickMenu} type="button" className="inline-flex items-center justify-center rounded-md p-2 mr-3 text-gray-400 hover:bg-gray-400 hover:text-white
                     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        {
                            open ? <FaBars />
                                : <FaTimes />
                        }
                    </button>
                </div>
                <div className="navContent hidden lg:flex items-center justify-end mr-[5%] space-x-5 ">
                    {
                        navMenu.map((data: any, index) => {
                            return (
                                <NavItem data={data} key={data.id} handleOnclickMenu={handleOnclickMenu} selectedMenuIndex={selectedMenuIndex} />
                            )
                        })
                    }
                </div>
            </nav>
            {
                !open && <div className="absolute mx-6 rounded-md -translate-y-3 z-[5] h-auto w-[90%] bg-orange-200 lg:hidden ">
                    {

                        navMenu.map((data, index) => {
                            return (
                                <div key={index} className="flex flex-row font-semi bold m-3 text-black items-center justify-center">
                                    {
                                        <NavItem  data={data} key={data.id} handleOnclickMenu={handleOnclickMenu} selectedMenuIndex={selectedMenuIndex} />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    </>
}