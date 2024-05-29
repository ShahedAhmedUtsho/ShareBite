
"use client";
import axios from "axios";
import {  Badge, Button,  Table ,Modal } from "keep-react";

import { useState } from 'react'
import {  Warning } from "phosphor-react";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const ManTable = ( {allCraft,refetch}) => {
    const [isOpen, setIsOpen] = useState(false)
const {openSuccessModal,setModelHead,setModelMessage,} =useContext(AuthContext)

const [deleteId,setDeleteId] =useState("")

    const handleDelete = (id)=>{
       

        axios.delete(`https://test-tau-green-45.vercel.app/foods/${id}`)
        .then(() => {
          
          setModelHead("removed")
          setModelMessage("food deleted successfully")
          openSuccessModal()
          refetch()

          
        })
        .catch(error => {
          console.error('Error delete food:', error);
        });
    };
    

    const openModal = () => {
      setIsOpen(true)
    }
    const closeModal = () => {
      setIsOpen(false)
    }
  return (
    <div className="mt-20 ">
        <Table showCheckbox={false} showBorder={false} striped={true} className="  hidden md:table">
      <Table.Caption className="dark:bg-slate-800">
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600 dark:text-slate-300"> my added food</p>
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
       
        <Table.HeadCell className="min-w-[100px]">expired_date</Table.HeadCell>

        <Table.HeadCell className="min-w-[50px] "></Table.HeadCell>
       
       
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
                <p>{aCraft?.expired_date}  </p>
              </Table.Cell>


              <Table.Cell className="dark:bg-slate-700 justify-end items-center flex gap-3 rounded-none dark:text-slate-400"> 
              <Link to={`/update/${aCraft._id}`} >
              <Button size="sm" className="text-xs capitalize bg-slate-500 text-slate-100"> update</Button>
              </Link>
             
              <Button  onClick={()=>{openModal(),setDeleteId(aCraft._id)}}  size="sm" color="error" variant="outline" className="text-xs capitalize text"> delete</Button>
              </Table.Cell>
           
              
             
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
            <p className=" py-2 px-3  text-xl  font-semibold  dark:text-metal-100 text-metal-600">All Craft</p>
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
           
      
      
      
            <Table.Body className="divide-gray-25 divide-y mt-5">
            <Table.Row className="bg-white flex  justify-end dark:!bg-transparent">
            <Table.Cell className="flex gap-2">
           <Link to={`/update/${aCraft._id}`}> <Button  size="sm" className="text-xs capitalize bg-slate-500 text-slate-100"> update</Button></Link>
              <Button  onClick={()=>{openModal(),setDeleteId(aCraft._id)}} size="sm" color="error" variant="outline" className="text-xs capitalize text"> delete</Button>
           </Table.Cell>
              
             </Table.Row>
            </Table.Body>
      
      
      
      
            
          
      
      
          </Table>
     )
         }




<Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <Warning  size={28} className=" text-red-400" />
          </Modal.Icon>
          <Modal.Content>
            <div className="!mb-6">
              <h3 className="mb-2 text-body-1 font-medium text-metal-900"> warring</h3>
              <p className="text-body-4 font-normal text-metal-600">
               I want to delete this food? It cant be undone !
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={()=>{handleDelete(deleteId) ,closeModal()  }} size="sm" color="error">
             Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>

    </div>
    
  )
}

ManTable.propTypes = {
    allCraft : PropTypes.array ,
    refetch :PropTypes.func
}


export default ManTable;