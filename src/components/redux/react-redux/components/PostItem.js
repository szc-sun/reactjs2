import React from 'react'

const PostItem = (props) =>{
	const { entity, onClickDeleteButton } = props
	return (
		<div key={entity.id}>
			<div>
				{entity.title}
			</div>
			<button
				type="button"
				onClick={()=>onClickDeleteButton(entity.id)}
			>
delete
			</button>
		</div>
	)
}
export default PostItem