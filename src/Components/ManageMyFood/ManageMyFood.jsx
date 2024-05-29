
'use client'
// 
import { useQuery } from '@tanstack/react-query';
import { Button } from 'keep-react'

import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ManTable from './ManTable/ManTable';
import { Warning } from 'phosphor-react';
import { Spinner } from 'keep-react'
import Roket from "../../Images/Animation - 1715760264227.json";
import Lottie from 'lottie-react';
const ManageMyFood = () => {
    useEffect(() => {
        document.title ="ShareBite | Manage food";
      }, []);
    const {user} =useContext(AuthContext) ;
    const { isLoading, error, data : requested_Foods ,refetch } = useQuery({
        queryKey : ['manage_Foods'] ,
        queryFn : async()=>{
            const response = await fetch(`https://test-tau-green-45.vercel.app/manage/${user.uid}` , {credentials :"include"}); 

            return response.json();
        }
    });

   
    if (isLoading) return <div className=' min-h-40  flex justify-center items-center'><Spinner></Spinner></div>;
    if (error) return <div className=' min-h-40  flex justify-center items-center'>
    <Warning size={30}></Warning>
            
          </div>;




if(requested_Foods.length === 0) {

    return <div className=' min-h-96 flex justify-center items-center w-full'>
        <div className='mx-auto min-w-96 text-slate-600 min-h-52 flex flex-col gap-4 justify-center text-xl font-semibold ab capitalize items-center p-4 rounded-xl bg-slate-300'>
     <div className=' w-full overflow-hidden'>
     <Lottie animationData={Roket} className=' w-full h-28 ' ></Lottie>
     </div>
        <p >you Didnt Add anything</p>
       <Link to="/addfood">
       <Button color="primary" size='sm'>
       Add
      </Button>
       </Link>
        </div>

    </div>

}
    return (
        <div className='bannarBG bg-slate-700'>
            <br />
            <div className='container mx-auto'>
                <ManTable refetch={refetch} allCraft={requested_Foods}></ManTable>
           
            </div>
        </div>
      
    );
};






export default ManageMyFood;