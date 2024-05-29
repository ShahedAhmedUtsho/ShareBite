
'use client'
import { At ,Fingerprint ,ChatTeardropDots,Eye,EyeSlash } from 'phosphor-react'
import { Button, Card, Icon, Input, Label } from 'keep-react'
import Logo from "../../Images/white.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Auth from '../../Firebase/firebase.config';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
 const location = useLocation()
  const navigate = useNavigate(); 
const { setLoading,openErrorModal,setModelHead,setModelMessage,openSuccessModal,user,logOut} = useContext(AuthContext)
  const[visible,setVisible] = useState(true)
  const eysToggle = () =>{
    setVisible(!visible)

   }


   useEffect(() => {
    document.title ="ShareBite | Register";
  }, []);
  
const handleRegister = Event =>{
  Event.preventDefault() ;
  const form = Event.target ; 
  if(user){
  


    setModelHead("Error");
  setModelMessage("you are already logged in")
  openErrorModal()
    Event.target.reset()
    return
  }
  const email = form.email.value ;










  const userName = form.username.value ; 
  const password = form.password.value ;

  if (password.length < 6) {
    setModelMessage("Password must have at least 6 characters.");
setModelHead("ERROR")
openErrorModal()
    return ;
    
} else if (!/[A-Z]/.test(password)) {
  setModelMessage("Password must have one uppercase letter.");
  setModelHead("ERROR")
  openErrorModal()
    return;
} else if (!/[a-z]/.test(password)) {
  setModelMessage("Password must have  one lowercase letter.");
  setModelHead("ERROR")
  openErrorModal()
    return;
} 
  const photoURL = form.photoURL.value
  console.log(email,password,userName,photoURL)




















createUserWithEmailAndPassword(Auth,email,password)
.then(res=> {
  setLoading(true)

  console.log("okey login ",res.user)

  updateProfile(Auth.currentUser,{
    displayName: userName,
    
    photoURL: photoURL



  }).then(() => {
   

setModelHead("registration complete")
setModelMessage("Account creation is successful")
openSuccessModal()

logOut()
navigate("/login")




  }).catch((error) => {
    console.log(error.message , " update error")
  });


}







)
.catch(error => {
  const err = error.message ; 
  console.log(err)
})






}










    return (
       <div className='md:grid grid-cols-5  '>

<div className="bg-slate-800 bannarBG  col-span-3 text-slate-200    ">
            <br />
            <div  className="mx-auto md:container     justify-center items-center md:px-7 w-full lg:min-h-[85vh] md:min-h-[70vh]">
           
           

            <Card className="max-w-xl mx-auto border-none mt-[5%] bg-transparent  rounded-none">
      <Card.Content className="space-y-3">
        <Card.Header>
        <Card.Title className='mb-5'><img className="  w-20 " src={Logo} alt="" /></Card.Title>
          <Card.Title className='ab text-2xl  text-slate-200'>Create a account</Card.Title>
          <Card.Description className='text-base py-2 text-slate-400'>Already have a account? <Link to="/login"><span className=' text-blue-400'>Login</span></Link></Card.Description>
        </Card.Header>
       
        <form onSubmit={handleRegister} className="space-y-2">
       <div className='md:grid grid-cols-2 gap-4'>
       <fieldset className="space-y-1 mb-6"  >
            <Label htmlFor="username" className='text-base font-light  text-slate-300'>Name*</Label>
            <div className="relative ">
              <Input required id="username" type="text" placeholder="Name" className="ps-11 min-h-12 rounded-md bg-slate-700 text-slate-200 text-base " />
              <Icon>
                <At size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1 mb-4"  >
            <Label htmlFor="photoURL" className='text-base font-light  text-slate-300'>photoURL*</Label>
            <div className="relative ">
              <Input required id="photoURL" type="text" placeholder="photoURL" className="ps-11 min-h-12 rounded-md bg-slate-700 text-slate-200 text-base " />
              <Icon>
                <At size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
         
       </div>
        
          <fieldset className="space-y-1 mb-4"  >
            <Label htmlFor="email" className='text-base font-light  text-slate-300'>Email*</Label>
            <div className="relative ">
              <Input required id="email" type="email" placeholder="Enter email" className="ps-11 min-h-12 rounded-md bg-slate-700 text-slate-200 text-base " />
              <Icon>
                <At size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          
          <fieldset className="space-y-1 mb-4">
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
          <Button className="!mt-3 block w-full min-h-14 rounded-md bg-blue-600 text-xl text-white" size="xs"  variant="outline">
           Create account
          </Button>
           
       
        </form>
      </Card.Content>
    </Card>






            
        
        </div>
</div>
<div className=' gap-2 col-span-2 regBox md:flex p-10 flex-col justify-center items-center    hidden  bg-slate-900'>


    <div className=' text-slate-300  flex flex-col  relative gap-8 ab'>
    <ChatTeardropDots className='border-2 p-3 w-18 rounded-xl bg-slate-800 h-18    ' size={52} />
<p className='lg:text-2xl text-base'>Welcome to our food-sharing community! Were thrilled youve chosen to join us in making a difference. <br className='mt-5' /> Lets work together to ensure no one goes hungry.</p>
<div className='grid grid-cols-5 gap-2  items-center'>
    
    <img src="https://avatars.githubusercontent.com/u/155211922?v=4" alt="" className='rounded-full  col-span-1 p-2 ' />
    <div className=' col-span-4'>
        <h2 className='lg:text-xl text-base'>Shahed Ahmed Utsho</h2>
        <p className='lg:text-base text-sm text-slate-400'>Front-End Devaloper</p>
    </div>
</div>
    </div>

</div>
       </div>
    );
};

export default Register;









