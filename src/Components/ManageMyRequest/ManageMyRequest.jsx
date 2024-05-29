





'use client'

import { useQuery } from '@tanstack/react-query';
import { Button,Spinner } from 'keep-react'

import { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RecTable from '../RecTable/RecTable';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Warning } from 'phosphor-react';
import Roket from "../../Images/Animation - 1715760264227.json";
import Lottie from 'lottie-react';
const ManageMyRequest = () => {
    useEffect(() => {
        document.title ="ShareBite | My request for";
      }, []);
    const {user} =useContext(AuthContext);
    const { isLoading, error, data : requested_Foods } = useQuery({
        queryKey : ['requested_Foods'] ,
        queryFn : async()=>{
            const response = await fetch(`https://test-tau-green-45.vercel.app/requestfoods/${user.uid}`,{credentials:'include'}); 

            return response.json();
        }
    } );
    
    if (isLoading) return <div className=' min-h-40  flex justify-center items-center'><Spinner></Spinner></div>;
    if (error) return <div className=' min-h-40  flex justify-center items-center'>
    <Warning size={30}></Warning>
            
          </div>;

    


if(requested_Foods?.length === 0) {

    return <div className=' min-h-96 flex justify-center items-center w-full'>
      
        <div className='mx-auto min-w-96 text-slate-600 min-h-52 flex flex-col gap-4 justify-center text-xl font-semibold ab capitalize items-center p-4 rounded-xl bg-slate-300'>
        <div className=' w-full overflow-hidden'>
     <Lottie animationData={Roket} className=' w-full h-28 ' ></Lottie>
     </div>
        <p >you Didnt request anything</p>
       <Link to="/">
       <Button color="primary" size='sm'>
       Home
      </Button>
       </Link>
        </div>

    </div>
    

}
    return (
        <div className='bannarBG bg-black'>
            <br />
            <div className='container mx-auto'>
            <RecTable allCraft={requested_Foods}></RecTable> 
            </div>
        </div>
      
    );
};





export default ManageMyRequest;