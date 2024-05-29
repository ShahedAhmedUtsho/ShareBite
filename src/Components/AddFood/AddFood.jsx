



'use client'
import { format } from 'date-fns'
import { 
     Image,
     AddressBook,
     CurrencyCircleDollar,
     Star,
     Calendar


 } from 'phosphor-react'
import { Button, Icon, Input, Label,Textarea,Radio ,DatePicker,Popover } from 'keep-react'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

import { Typewriter } from 'react-simple-typewriter'
import axios from 'axios'


 const AddFood = () => {
    const [date, setDate] = useState(null)

    const [sub,setSub] = useState("available");

  useEffect(() => {
    document.title ="PP - Add Art & Craft"
   
   }, [])
    const {user, openErrorModal, setModelMessage,
        setModelHead,
        openSuccessModal,} = useContext(AuthContext)

      
    const handleCraft = event =>{
        event.preventDefault() ;
        const form = event.target ; 
        const photoURL = form.photoURL.value ;
        const food_name = form.food_name.value ;
    
        
       
        const additional_notes = form.additional_notes.value ;
        const food_quantity = form.food_quantity.value ;
        const pickup_location = form.pickup_location.value ;
       const expired_date = date ? format(date ?? new Date(), 'PPP') : null ;
if(expired_date === null){
    setModelHead('Error') 
    setModelMessage('Set expired date') ;
    openErrorModal()

    
    return 

}




       
        const donator_uid = user.uid ;
        const donator_email = user.email;
        const donator_username = user.displayName;
     const status = sub ;
        const donator_photoURL = user.photoURL ; 
   
        const newFood = {expired_date ,
           
            photoURL,food_name,additional_notes,
            food_quantity,pickup_location,
            donator_email,donator_photoURL,donator_uid,donator_username ,status
            
         

        }
        




axios.post('https://test-tau-green-45.vercel.app/foods',newFood)

.then(data=>{
    console.log(data.data)
    setModelHead("Food added successfully") ;
    setModelMessage(" go to Available to see added food  ")
    openSuccessModal()
    form.reset()
})
.catch(error=>{
    console.log(error,"from post server catch")
})






//mongodb & server connection 





    }
  return (
   <div className='w-full min-h-[90vh] bg-slate-800  bannarBG'>
    <br />
    <h2 className='md:text-4xl text-slate-300
     text-center mt-[6%]'> Add your  <span style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Food']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span> </h2>
     <form  onSubmit={handleCraft} className="mx-auto mt-[2%] max-w-5xl space-y-2 my-20 rounded-lg border   p-8   shadow-md bg-[#00000034] ">
        <div className='grid md:grid-cols-3 gap-4 md:p-3'>




      <fieldset className="space-y-1">
        <Label className='  text-slate-400' htmlFor="food_name">food name</Label>
        <div className="relative">
          <Input required id="food_name" name='food_name' placeholder="Enter food name" type="text" className="ps-11 rounded-sm text-slate-200 bg-slate-700  " />
          <Icon>
            <AddressBook size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      
      <fieldset className="space-y-1">
        <Label className=' text-slate-400' htmlFor="photoURL">photoURL</Label>
        <div className="relative">
          <Input  required name='photoURL' placeholder="Enter photoURL" className="ps-11 text-slate-200 bg-slate-700 rounded-sm" />
          <Icon>
            <Image size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


     


      <fieldset className="space-y-1">
        <Label className='text-slate-400 ' htmlFor="food_quantity">food_quantity (Per Person) </Label>
        <div className="relative bg-slate-700 ">
          <Input required name='food_quantity' id="food_quantity" placeholder="Enter food_quantity" type="number" className="ps-11 rounded-sm bg-slate-700 text-slate-200 " />
          <Icon>
            <CurrencyCircleDollar size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>

      
      <fieldset className="space-y-1">
        <Label className='text-slate-400' htmlFor="pickup_location">pickup_location  </Label>
        <div className="relative">
          <Input required name='pickup_location' id="pickup_location" placeholder="Enter pickup_location" type="text" className="ps-11 rounded-sm bg-slate-700 text-slate-200 " />
          <Icon>
            <Star size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>




      <fieldset className="space-y-1">
        <Label className='text-slate-400 ' htmlFor="expired_date">expired_date</Label>
        <div className="relative">



        <Popover showArrow={false} placement="bottom-start"  >
      <Popover.Action asChild  >
        <Button type='button'
          className="justify-start gap-2 w-full   rounded-sm max-h-12 border border-metal-50 px-2 text-left text-body-4 font-normal bg-slate-700  hover:bg-slate-600 text-slate-200 active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar className='bg-slate-700 text-slate-200' size={20} color="#AFBACA" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </Popover.Action>
      <Popover.Content className="z-50 max-w-min">
        <DatePicker className='bg-slate-500' mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </Popover.Content>
    </Popover>



         
         
        </div>
      </fieldset>
      



  





        </div>
        <div className=''>


<div>
<legend className="mb-5 text-body-3 text-slate-400   "> status <span className='text-slate-300'>({sub})</span></legend>

{/* Status */}

<div className='flex gap-10 mb-5 '>
<div className='grid grid-cols-3 gap-2 '>


      <fieldset onClick={()=>setSub("available")}  className="flex  text-slate-400 items-center gap-2">
        <Radio id="available" name="country"  className='  ' />
        <Label className='text-slate-400' htmlFor="available">available</Label>
      </fieldset>


      <fieldset onClick={()=>setSub("requested")} className="flex text-slate-400 items-center gap-2">
        <Radio id="requested" className='   ' name="country" />
        <Label className='text-slate-400' htmlFor="requested">requested</Label>
      </fieldset>


      <fieldset onClick={()=>setSub("coming_soon")} className="flex text-slate-400 items-center gap-2">
        <Radio id="coming_soon" name="country" className='  ' />
        <Label className='text-slate-400' htmlFor="coming_soon">coming_soon</Label>
      </fieldset>


</div>

    
</div>

</div>


     
</div>




<fieldset className="space-y-1.5   col-span-3">
      <Label className=' text-slate-400
      
      ' htmlFor="short_description">additional_notes</Label>
      <Textarea className='rounded-sm text-slate-200 bg-slate-700' required name='additional_notes' id="additional_notes" placeholder="Enter additional_notes" />
     
    </fieldset>



       


    
      <Button size="sm" color="secondary" type="submit" className='px-8'>
      Add
      </Button>
    </form>
   </div>
  )
}














export default AddFood;