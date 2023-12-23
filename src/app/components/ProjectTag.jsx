import React from 'react'

export const ProjectTag = ({name, onClick, isSelected} ) => {
    const buttonStyles = isSelected ? 'border-primary text-white' : 'border-slate-600 text-[#ADB7BE] hover:border-white'
  return (
    <button onClick={() => onClick(name)} className={`${buttonStyles} w-full md:w-fit rounded-full border-2 px-5 py-1 text-xl cursor-pointer`}>{name}</button>
  )
}
