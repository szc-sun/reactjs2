import React from 'react'
import PostItem from './PostItem'

const PostList = (props) =>{
	const { entities, onClickDeleteButton } = props
	return (
		<div>
			{
				entities.map((item)=>(
					<PostItem
						key={item.id}
						entity={item}
						onClickDeleteButton={onClickDeleteButton}
					/>
				))
			}
		</div>
	)
}
export default PostList