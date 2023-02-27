import React from 'react'

function DropdownData(props: { list: any;id:number }) {
  return (
    <>
    
    <div className="absolute w-70% h-70% mx-10 z-20 bg-white translate-y-7 -translate-x-10">
        {
            props.list.map((dt: { subtitle: any; },index:number) => {
                return (

        <ul key={index}>
            <li > <h1 >{dt.subtitle}</h1></li>
        </ul>
                )
            })
        }
      
    </div>
    </>
  )
}

export default DropdownData;