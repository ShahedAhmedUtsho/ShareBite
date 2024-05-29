
"use client";
import {  Badge, Table  } from "keep-react";
import PropTypes from 'prop-types'
const RecTable = ( {allCraft}) => {
  https://test-tau-green-45.vercel.app/
  // https://test-tau-green-45.vercel.app/
  return (
    <div className="mt-20 ">
        <Table showCheckbox={false} showBorder={false} striped={true} className="  hidden md:table">
      <Table.Caption className="dark:bg-slate-800">
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600 dark:text-slate-300">All My request</p>
            <Badge size="xs" color="secondary" className="py-[0.2em] px-[0.8em]">
              {allCraft?.length}
            </Badge>
          </div>
          <div  className="flex items-center gap-5">
           
            
            
          </div>
        </div>
      </Table.Caption>
      <Table.Head className="dark:bg-slate-700">
      <Table.HeadCell>Serial</Table.HeadCell>
        <Table.HeadCell>food Name</Table.HeadCell>
        <Table.HeadCell className="min-w-[152px]">donatior name</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]">expired_date</Table.HeadCell>
        <Table.HeadCell className="min-w-[240px]">Status</Table.HeadCell>
       
       
      </Table.Head>



      <Table.Body className="divide-gray-25 dark:bg-slate-300  rounded-none  divide-y">


        
         {
            allCraft?.map((aCraft ,index)=>    <Table.Row key={aCraft?._id} >


            <Table.Cell className="dark:bg-slate-700 rounded-none">
                <p>{index + 1}</p>
              </Table.Cell>


              <Table.Cell className="dark:bg-slate-700  dark:text-slate-400">
                <p>{aCraft?.food_name}</p>
              </Table.Cell>


              <Table.Cell className="dark:bg-slate-700 dark:text-slate-400">
                <p>{aCraft?.donator_username} </p>
              </Table.Cell>


              <Table.Cell className="dark:bg-slate-700 dark:text-slate-400">
                <p>{aCraft?.expired_date}  </p>
              </Table.Cell>


              <Table.Cell className="dark:bg-slate-700 rounded-none dark:text-slate-400"> {aCraft?.request_time}</Table.Cell>
              
             
            </Table.Row>
     )
         }
     

      </Table.Body>

      



    </Table>
    <div className="h-10 w-full rounded-b-xl mt-2 bg-white dark:bg-slate-700"></div>








    <Table showCheckbox={false} showBorder={false} striped={true} className=" dark:!bg-transparent  md:hidden mt-10" >
      <Table.Caption className=" bg-transparent">
        <div className="my-5 flex items-center justify-between  pr-3">
          <div className="flex items-center ">
            <p className=" py-2 px-3  text-xl  font-semibold  dark:text-metal-100 text-metal-600"> all request</p>
            <Badge  color="secondary" className="bg-red-200 dark:bg-transparent  dark:text-fuchsia-300 dark:border-[1px]  dark:border-fuchsia-300 text-[8px]  px-[1em]">
            {allCraft?.length}
            </Badge>
          </div>

          <div className="flex items-center gap-5">
            
           
            
          </div>
        </div>
      </Table.Caption>
</Table>


{
            allCraft?.map((aCraft ,index)=>    <Table key={aCraft._id} showCheckbox={false} showBorder={false} striped={true} className=" dark:!bg-transparent  md:hidden  border-b-[1px] mb-4 border-slate-300" >

            <Table.Body className="divide-gray-25 divide-y bg-transparent " >
            <Table.Row className=" dark:!bg-transparent flex    w-screen items-center ">
               
               
               <Table.Cell className=" ">
                 <p className="font-semibold">Serial No :</p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
               {index+1}
                 </Table.Cell>
               
               
               
              
             </Table.Row>
            </Table.Body>
      
            <Table.Body className="divide-gray-25 divide-y dark:!bg-transparent">
            <Table.Row className=" flex dark:!bg-transparent justify-between    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p>Food Name :  </p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
              {aCraft?.food_name}
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
           
            <Table.Body className="divide-gray-25 divide-y">
            <Table.Row className=" flex justify-between dark:!bg-transparent    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p> expired date :</p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
               {aCraft?.expired_date}
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
            <Table.Body className="divide-gray-25 divide-y dark:!bg-transparent">
            <Table.Row className=" flex dark:!bg-transparent justify-between    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p> request time  :  </p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
              {aCraft?.request_time}
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
            <Table.Body className="divide-gray-25 divide-y">
            <Table.Row className=" flex justify-between dark:!bg-transparent    w-screen items-center">
               <Table.Cell className="font-semibold">
                 <p> donator name </p>
               </Table.Cell>
      
               <Table.Cell className=" text-right ">
               <p>{aCraft?.donator_username} </p>
                 </Table.Cell>
             </Table.Row>
            </Table.Body>
      
      
      
            <Table.Body className="divide-gray-25 divide-y mt-5">
            <Table.Row className="bg-white flex  justify-end dark:!bg-transparent">
            <Table.Cell>
                     
           </Table.Cell>
              
             </Table.Row>
            </Table.Body>
      
      
      
      
            
          
      
      
          </Table>
     )
         }






    </div>
    
  )
}

RecTable.propTypes = {
    allCraft : PropTypes.array
}
export default RecTable