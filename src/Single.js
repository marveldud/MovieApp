import React from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
  const {id} = useParams();
  return (
    <div>
      Single Page {id}
    </div>
  )
}

export default Single
