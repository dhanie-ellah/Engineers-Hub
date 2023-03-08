import React from 'react'
import PostJobForm from './PostJobForm'
import MyJobList from './MyJobList'

const PostJobBody = () => {
  return (
    <div className=' flex gap-5 w-[80%] m-auto py-10 lg:flex-col-reverse lg:w-[90%]'>
      <PostJobForm />
      <MyJobList/>
    </div>
  )
}

export default PostJobBody