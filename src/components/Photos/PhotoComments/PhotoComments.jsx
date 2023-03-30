import React, { useContext, useEffect, useRef, useState } from 'react'
import { LoginContext } from '../../../contenxt/LoginProvider/LoginProvider'
import { PhotosContext } from '../../../contenxt/PhotosProvider/PhotosProvider'
import { PhotoCommentsForm } from '../PhotoCommentsForm/PhotoCommentsForm'
import { PhotoCommentContainer } from './style'

export const PhotoComments = ({ id }) => {
  const { dataCommentModal, getComment } = useContext(PhotosContext)

  const { login } = useContext(LoginContext)

  useEffect(() => {
    async function Comment() {
      const response = await getComment(id)
    }

    Comment()
  }, [id])

  return (
    <>
      <PhotoCommentContainer>
        {dataCommentModal?.map((post, index) => (
          <li key={index}>
            <b>{post.comment_author}: </b>
            <span>{post.comment_content}</span>
          </li>
        ))}
      </PhotoCommentContainer>
      {login && <PhotoCommentsForm id={id} />}
    </>
  )
}
