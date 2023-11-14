import React from 'react'

const CoursesTypeSelection = (props) => {
    const { id, type, setcourseType } = props;
    const changeType = () => {
        setcourseType(type);
    }
    return (
      <button className=' border-b-2 border-transparent py-1 text-base focus:border-white' onClick={changeType}>{type}</button>
  )
}

export default CoursesTypeSelection
