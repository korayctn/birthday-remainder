import React from 'react'

export const List = ({people}) => {
  return (
    <>
        <h3>List Component</h3>
        {people.map((item,index)=>{
            const {id,name,age,image} = item;
            return <div className='person' key={index}>
                <img src={image} alt={image}/>
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </div>
        })}
    </>
  )
}

