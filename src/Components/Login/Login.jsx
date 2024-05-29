
'use client'
import { useContext, useEffect, useState } from 'react'
import {  } from 'phosphor-react'
import { GoogleLogo,At ,Fingerprint,Pen ,User ,Image,Eye,EyeSlash} from 'phosphor-react'
import { Button, Card, Divider, Icon, Input, Label } from 'keep-react'
import Logo from "../../Images/white.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Auth from '../../Firebase/firebase.config';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate(); 
const { setLoading,setUser,setModelHead ,tokenCrate, setModelMessage,openSuccessModal,openErrorModal} = useContext(AuthContext)
useEffect(() => {
  document.title ="ShareBite | Login";
}, []);
  const[visible,setVisible] = useState(true)
  const eysToggle = () =>{
    setVisible(!visible)

   }



  const handleLogin = Event =>{
    Event.preventDefault() ;
    const form = Event.target ; 
  
    const email = form.email.value ;
    const password = form.password.value ;
    console.log(email,password) ;



    signInWithEmailAndPassword(Auth,email,password)
    .then (res=> {
      setLoading(true)
      setUser(res.user)
      const currentUser = res.user.uid ;
      tokenCrate(currentUser)
      console.log("login succesfully" , res.user) ; 
      setModelHead("Login Sucsessfull") ;
      setModelMessage( `wellcome ${res.user.displayName}`)
      openSuccessModal()
      
     
setLoading(false)
form.reset()
console.log("before navigate")
  navigate(location?.state?location.state : '/')
  console.log("after navigate")

    })
    .catch(err =>{
      const error = err.message ;
      setModelHead("ERROR") ;
      setModelMessage(error) ;
      openErrorModal()
    })

  }












  

const GoogleProvider = new GoogleAuthProvider()
const GoogleLogin = ()=>{
  signInWithPopup(Auth,GoogleProvider)
  .then(res => {
    setLoading(true)
   
    const currentUser = res.user.uid ;
      tokenCrate(currentUser)
    console.log(currentUser)
    setUser(res.user)
    navigate(location?.state?location.state : '/')
    setLoading(false);
    setModelHead("Login Sucsessfull") ;
    setModelMessage( `wellcome ${res.user.displayName}`)
    openSuccessModal(); 
    

  })
.catch(error => {
  const err = error.message ;
  console.log(err);
  setModelHead("ERROR") ;
  setModelMessage(error) ;
  openErrorModal()
})

}





    return (
        <div className="bg-slate-800 text-slate-200  bannarBG  ">
            <br />
            <div  className="mx-auto container   justify-center items-center md:px-7 w-full min-h-[85vh] ">
           
           

            <Card className="max-w-lg mx-auto mt-[5%] bg-transparent border-none rounded-none">
      <Card.Content className="space-y-3">
        <Card.Header>
        <Card.Title className='mb-6'><img className="  w-24 " src={Logo} alt="" /></Card.Title>
          <Card.Title className='ab text-3xl  text-slate-200'> Sign in to ShareBite</Card.Title>
          <Card.Description className='text-lg py-4 text-slate-400'>Didnt have any account? <Link to="/register"><span className=' text-blue-400'>Register</span></Link></Card.Description>
        </Card.Header>
       
        <form onSubmit={handleLogin} className="space-y-2">
          <fieldset className="space-y-1 mb-6"  >
            <Label  htmlFor="email" className='text-lg font-light  text-slate-300'>Email*</Label>
            <div className="relative ">
              <Input required id="email" type="email" placeholder="Enter email" className="ps-11 min-h-14 rounded-md bg-slate-700 text-slate-200 text-lg " />
              <Icon>
                <At size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>




          <fieldset className="space-y-1 mb-6">
            <Label htmlFor="password" className='text-lg font-light  text-slate-300'>Password*</Label>
            <div className="relative">
              <Input  required id="password" placeholder="Enter password" type={visible?"password":"text"}  className="ps-11 min-h-14 rounded-md bg-slate-700 text-slate-200 text-lg" />
              <Icon>
                <Fingerprint size={19} color="#AFBACA" />
              </Icon>
              <div  onClick={eysToggle} className=' text-[#69707a] cursor-pointer absolute right-3 top-[30%]'>
                      {
                        visible? <EyeSlash  size={22} color="#69707a" />:  <Eye size={22} color="#69707a" />
                      }
                   
                    </div>
            </div>
          </fieldset>




       
 













          <br />
          <Button type='submit' className="!mt-3 block w-full min-h-14 rounded-md bg-blue-600 text-xl text-white" size="xs"  variant="outline">
            Log in
          </Button>
           
        <Divider>Or</Divider>
        <div className="flex items-center justify-between gap-3 ">
          <Button onClick={GoogleLogin} size="xs" variant="outline" type='button'  className="w-full  bg-slate-600 text-white border-white min-h-14">
            <GoogleLogo size={20} className="mr-1.5" />
            Google
          </Button>
        
        </div>
        </form>
      </Card.Content>
    </Card>






            
        </div>
        </div>
    );
};

export default Login;









