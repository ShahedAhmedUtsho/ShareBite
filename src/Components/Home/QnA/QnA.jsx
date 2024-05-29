

'use client'
import { Accordion } from 'keep-react'

export const  QnA = () => {
  return (
    <Accordion openFirstPanel={true} className="space-y-4 px-3 container mx-auto md:mb-10 mb-5 lg:mb-20 *:rounded-md ">
        <h2 className='mx-auto  md:text-2xl'>QnA:</h2>
      <Accordion.Panel>
        <Accordion.Container className='bg-slate-800'>
          <Accordion.Title >Q. How does the ShareBite platform work? </Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className='bg-slate-800'>
        Explain the basic functionality of the platform, including how users can sign up, create profiles, share recipes, and interact with other members.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container className='bg-slate-800'>
          <Accordion.Title className='bg-slate-800'>Q. Is the platform free to use?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className='bg-slate-800'>
        Please platform is absolutely free
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container className='bg-slate-800'>
          <Accordion.Title>Q. How can I donate food to those in need through this platform?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className='bg-slate-800'>
        Describe the process for users to donate excess food items or meals to individuals or organizations in their local community. Include information on drop-off locations, pickup services, and any guidelines for acceptable donations.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel >
        <Accordion.Container className='bg-slate-800'>
          <Accordion.Title>Q. Are there specific organizations or causes supported by the platform?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className='bg-slate-800'>
        Highlight any partnerships with local charities, shelters, or food banks where donated food items are distributed. Provide details on how users can contribute directly to these organizations through the platform.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container className='bg-slate-800'>
          <Accordion.Title>Q. Can I request food assistance for myself or someone in need?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className='bg-slate-800'>
        Explain how individuals facing hunger or food insecurity can request assistance through the platform. Provide instructions on how to submit a request, including any required documentation or verification steps.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container className='bg-slate-800'>
          <Accordion.Title>Q. What types of food items are commonly donated through the platform?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className='bg-slate-800'>
        Provide examples of typical food donations, such as non-perishable items, fresh produce, cooked meals, and surplus goods from restaurants or grocery stores. Encourage users to consider donating a variety of food items to meet diverse needs.
        </Accordion.Content>
      </Accordion.Panel>
     
    
    </Accordion>
  )
}


export default QnA;