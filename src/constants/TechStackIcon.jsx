import React from 'react'

export default function TechStackIcon(props) {
    return (
        <div className="
            flex 
            items-center 
            gap-x-1
            border-solid
            border
            border-slate-500
            m-1
            p-2
            rounded-md
            ">
            {props.icon}
            <div>
                <h3 className="text-base font-semibold leading-7 tracking-tighttext-zinc-800 dark:text-zinc-100">
                    {props.name}
                </h3>
            </div>
        </div>
    )
}
