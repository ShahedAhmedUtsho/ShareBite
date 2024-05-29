'use client'
import  { useContext, useEffect } from "react";
import {   useNavigate, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { Button, Badge ,Drawer,Label,Textarea,Icon,Input} from 'keep-react';
import { 
    AddressBook,
    Star,
X


} from 'phosphor-react'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import moment from "moment/moment";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const FoodDetails = () => {
  const param =useParams() ;
const query = `${param.FoodID}-queryKey`
  const navigate = useNavigate();  
    const [isOpen, setIsOpen] = useState(false)
    const {user,setModelHead,setModelMessage,openSuccessModal} =useContext(AuthContext)
   
    useEffect(() => {
      document.title ="ShareBite |food details";
    }, []); 
//  fetching data 

    const params = useParams();

    
    const { isLoading, error, data: food } = useQuery({
        queryKey: [query],
        queryFn: async () => {
            const response = await fetch(`https://test-tau-green-45.vercel.app/foods/${params.FoodID}`);
            return response.json();
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    

//  fetching data 



// request for food 

const handleRequest = event => {
  event.preventDefault() ;
  const form = event.target ; 
  const photoURL = food.photoURL ;
  const food_name = food.food_name ;

  
 
  const additional_notes = form.r_additional_notes.value;
  
  const food_quantity = food.food_quantity ;
  const pickup_location = food.pickup_location ;
 const expired_date =food.expired_date ;

 const request_time = moment().format('LLL') ;



 
  const food_id = food._id ;
  const donator_email = food.donator_email;
  const donator_username = food.donator_username;
const status = "requested" ;
  const donator_photoURL = food.donator_photoURL ; 
const user_email = user.email;
const user_id = user.uid;


  const req_Food = {expired_date ,
  user_email,
  request_time,
      photoURL,food_name,additional_notes,
      food_quantity,pickup_location,
      donator_email,donator_photoURL,food_id,donator_username ,status,user_id
      
  

  }

    const RequestURL = "https://test-tau-green-45.vercel.app/requestfoods" ;


    axios.post(RequestURL,req_Food)
    .then(data=>{
      console.log(data.data)
      setModelHead("Food Request successfully") ;
      setModelMessage(" go to request page to see your request ") ;
      openSuccessModal() ;
      form.reset() ;
      navigate('/myfoodrequest') ;

      axios.delete(`https://test-tau-green-45.vercel.app/foods/${food_id}`)
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Error deleting food:', error);
        
      });










  })
  .catch(error=>{
      console.log(error,"from post server catch")
  })






















  console.log(req_Food)

   
    
  };
// request for food 











    return (
        <div className="container mx-auto my-5 md:my-10 lg:my-20">
            <div className='md:border-2 md:rounded-xl  mx-auto max-w-96 md:max-w-none flex flex-col text-slate-300 bg-slate-700 border-black relative overflow-hidden min-h-96' key={food._id}>
                <div className="md:grid md:grid-cols-5">
                    <div className='bg-black w-full col-span-2 mx-auto overflow-hidden '>
                        <img src={food.photoURL} alt="" className='w-full object-cover h-full ' />
                    </div>

                    <div className="w-full  col-span-3 flex flex-col">
                        <div className="info w-full px-2  ">
                            <div className='py-3 w-full flex justify-between items-center pr-2 mt-auto'>
                                <p className='text-xl font-semibold text-slate-200 ab'>{food.food_name}</p>
                                <Badge className='bg-slate-900 text-slate-300' size="sm">{food.status}</Badge>
                            </div>
                            <p className='text-lg pb-4 ab'>For: <span className='pl-2 text-green-400 font-semibold'>{food.food_quantity}</span> Person</p>
                            <p className='text-lg pb-4 ab'>Pickup: <span className='pl-2 text-green-400 font-semibold'>{food.pickup_location}</span></p>
                            <p className='text-lg pb-4 ab'>Expired: <span className='pl-2 text-green-400 font-semibold'>{food.expired_date}</span></p>
                            <p className='text-lg pb-4 font-bold ab'>Notes: <br /><span className='pl-2 text-slate-200 font-light text-base'>{food.additional_notes}</span></p>
                        </div>
                        <div className="mt-auto md:p-4">
                            <p className='text-lg pb-4 font-bold ab ml-2'>Donar :</p>
                            <div className='w-full h-20 flex justify-between items-center pr-2'>
                                <div className='grid grid-cols-5 gap-2 items-center'>
                                    <img src={food.donator_photoURL} alt="" className='rounded-full md:max-w-20 md:max-h-20 max-h-14 max-w-14 col-span-1 p-2' />
                                    <div className='col-span-4'>
                                        <h2 className='lg:text-lg text-sm'>{food.donator_username}</h2>
                                        <h2 className='lg:text-lg text-xs'>{food.donator_email}</h2>
                                    </div>
                                </div>
                               
                                <Button onClick={() => setIsOpen(!isOpen)} color="primary" className='max-h-12 text-xs rounded-lg'> Request</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




























            <Drawer  position="bottom" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Content className=" w-full p-2 h-full ">
        <div className='w-full min-h-[90vh] bg-slate-800  bannarBG'>
        <X size={25} onClick={() => setIsOpen(false)} className=" text-slate-200 absolute top-8 right-8" />
    <br />
    <h2 className='md:text-3xl text-slate-300
     text-center mt-5'>   <span style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}

       
          <Typewriter
            words={['Request for Food']}
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
     <form  onSubmit={handleRequest}  className="mx-auto relative  mt-[2%] max-w-5xl space-y-2 my-20 rounded-lg border   p-8  shadow-md bg-[#00000034] ">
    
        <div className="bg-black md:w-2/4 h-24 md:h-36  mx-auto rounded-lg"> 
        <img className="w-full h-full rounded-xl   object-cover" src={food.photoURL} alt="" />


        </div>
        <div className='grid grid-cols-3 gap-2 md:p-3'>




      <fieldset className="space-y-1">
        <Label className=' text-xs md:text-sm text-slate-400' htmlFor="food_name">food name</Label>
        <div className="relative">
          <Input disabled id="food_name" name='food_name' placeholder="Enter food name" defaultValue={food.food_name} type="text" className="ps-11 max-h-10 text-xs  rounded-sm text-slate-200 bg-slate-700  " />
          <Icon>
            <AddressBook size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


      <fieldset className="space-y-1">
        <Label className='text-xs md:text-sm  text-slate-400' htmlFor="food_id">food id</Label>
        <div className="relative">
          <Input disabled id="food_id" name='food_id' placeholder="Enter food name" defaultValue={food._id} type="text" className="ps-11  max-h-10 text-xs rounded-sm text-slate-200 bg-slate-700  " />
          <Icon>
            <AddressBook size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label className=' text-xs md:text-sm text-slate-400' htmlFor="donator_name"> donator Name</Label>
        <div className="relative">
          <Input disabled id="donator_name" name='donator_name' placeholder="donator_name" defaultValue={food?.donator_username} type="text" className="ps-11  max-h-10 text-xs rounded-sm text-slate-200 bg-slate-700  " />
          <Icon>
            <AddressBook size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>

      <fieldset className="space-y-1">
        <Label className='text-xs md:text-sm  text-slate-400' htmlFor="donator_email"> Donator email</Label>
        <div className="relative">
          <Input disabled id="donator_email" name='donator_email' placeholder="donator email" defaultValue={food?.donator_email} type="text" className="ps-11  max-h-10 text-xs rounded-sm text-slate-200 bg-slate-700  " />
          <Icon>
            <AddressBook size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>


     


     

      
      <fieldset className="space-y-1">
        <Label className='text-slate-400 text-xs md:text-sm ' htmlFor="pickup_location">pickup_location  </Label>
        <div className="relative">
          <Input disabled name='pickup_location' defaultValue={food.pickup_location} id="pickup_location" placeholder="Enter pickup_location" type="text" className="ps-11  max-h-10 text-xs rounded-sm bg-slate-700 text-slate-200 " />
          <Icon>
            <Star size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label className='text-slate-400 text-xs md:text-sm' htmlFor="expired_date"> expired date  </Label>
        <div className="relative">
          <Input disabled name='expired_date' defaultValue={food.expired_date} id="expired_date" placeholder="Enter expired_date" type="text" className="ps-11  max-h-10 text-xs rounded-sm bg-slate-700 text-slate-200 " />
          <Icon>
            <Star size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>



      <fieldset className="space-y-1">
        <Label className='text-slate-400 text-xs md:text-sm' htmlFor="time">Request time</Label>
        <div className="relative">




        <Input  name='time' disabled defaultValue={moment().format('LLL')} id="time" placeholder="Enter pickup_location" type="text" className="ps-11 rounded-sm  max-h-10 text-xs bg-slate-700 text-slate-200 " />
          <Icon>
            <Star size={19} color="#AFBACA" />
          </Icon>

         
         
        </div>
      </fieldset>
       
      

      <fieldset className="space-y-1">
        <Label className='text-slate-400 text-xs md:text-sm' htmlFor="user_Email">user_Email</Label>
        <div className="relative">




        <Input  name='time' disabled defaultValue={user.email} id="time" placeholder="Enter pickup_location" type="email" className="ps-11 rounded-sm  max-h-10 text-xs bg-slate-700 text-slate-200 " />
          <Icon>
            <Star size={19} color="#AFBACA" />
          </Icon>

         
         
        </div>
      </fieldset>

      
      <fieldset className="space-y-1">
        <Label className='text-slate-400 text-xs md:text-sm' htmlFor="Status">Status</Label>
        <div className="relative">




        <Input  name='time' disabled defaultValue={food.status} id="Status" placeholder="Enter Status" type="text" className="ps-11 rounded-sm  max-h-10 text-xs bg-slate-700 text-slate-200 " />
          <Icon>
            <Star size={19} color="#AFBACA" />
          </Icon>

         
         
        </div>
      </fieldset>

     





        </div>
        <div className=''>


<div>


{/* Status */}



</div>


     
</div>







    <fieldset className="space-y-1.5   col-span-3">
      <Label className='text-xs md:text-sm text-slate-400
      
      ' htmlFor="r_additional_notes"> request additional_notes</Label>
      <Textarea className='rounded-sm text-slate-200 bg-slate-700'  defaultValue={food.additional_notes} name='r_additional_notes' id="r_additional_notes" placeholder="Enter r_additional_notes" />
     
    </fieldset>



       


    
      <Button   size="sm" color="secondary" type="submit" className='px-8'>
      Request
      </Button>
    </form>
    
   </div>
       
            
        </Drawer.Content>
      </Drawer>
        </div>
    );
};

export default FoodDetails;
