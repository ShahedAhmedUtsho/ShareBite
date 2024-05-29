
'use client'
import { Button, Empty } from 'keep-react'
import { Link } from 'react-router-dom'

 const ErrorPage = () => {
  return (
    <Empty>
      <Empty.Image>
      <img className='w-[80vw]' src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg" alt="" />
      </Empty.Image>
      <Empty.Title>404 Not Found</Empty.Title>
      <Empty.Description>
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Empty.Description>
      <Link to="/"><Button variant="outline">Go to home</Button></Link>
    </Empty>
  )
}
 

export default ErrorPage