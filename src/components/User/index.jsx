import React from 'react'
import "./User.css"

export const User = ({ data }) => {
	return (
		<div className="parentdiv">
			<div className='childiv'>
				<div>{data.full_name}</div>
                <div>{data.age}</div>
                <div>{data.country}</div>
                <img src={data.img} alt="" className="img"/>
			</div>
		</div>
	)
}

