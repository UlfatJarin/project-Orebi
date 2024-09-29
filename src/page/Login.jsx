import React, { useState } from 'react'
import Container from '../component/layer/Container'
import Brebcumb from '../component/Brebcumb'
import Input from '../component/layer/Input'
import Tittle from '../component/layer/Tittle'
import Button from '../component/layer/Button'

const Login = () => {

    let[email,setemail]=useState('');
    let[emailerr,setemailerr]=useState('');

    let[password,setpassword]=useState('');
    let[passworderr,setpassworderr] =useState('');
    
    let manageemail=(element)=>{
        setemail(element.target.value);
        setemailerr('');
    }

    let managepassword=(element)=>{
        setpassword(element.target.value);
        setpassworderr('');
    }
    let managelogin=()=>{
        if(!email){
            setemailerr('Email is requred');
        }
        if(!password){
            setpassworderr('Password is requred');
        }
        
    }


  return (
    <div>
        <Container className='py-32' >
            <Brebcumb />

            <div className='pb-[62px] border-b border-[#F0F0F0]'>
                 <p className='w-[644px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>

                <Tittle className='pt-14' title='Returning Customer'/>
            <div className='flex  gap-10 '> 
                <Input onChange={manageemail} valuei={email} id='email' className='' type='email' LabelText='Email address' placeholder='company@domain.com' >
                <p  className='absolute top-full left-0 text-xs text-red-600' >{emailerr}</p>
                </Input>
                <Input valuei={password} onChange={managepassword} id='password' className='' type='password' LabelText='Password' placeholder='...........' >
                <p className='absolute top-full left-0 text-xs text-red-600'>{passworderr}</p>
                </Input>
            </div>
            <div className=' pt-7 pb-16 border-b border-[#F0F0F0]'>
            <Button onClick={managelogin} className='md:px-20' btntext='Log in'/>
            </div>

                <Tittle className='pt-14' title='New Customer'/>
                 <p className='w-[644px] pb-12 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                 <Button className='md:px-20' btntext='Continue'/>
        </Container>
    </div>
  )
}

export default Login