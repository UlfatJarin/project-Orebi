import React, { useState } from 'react'
import Brebcumb02 from '../component/layer/Brebcumb02'
import Container from '../component/layer/Container'
import Tittle from '../component/layer/Tittle'
import Input from '../component/layer/Input'
import CheckBox from '../component/layer/CheckBox'
import Button from '../component/layer/Button'

const SignIn = () => {
    let Division = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"];

    const District = ["Bandarban", "Barguna", "Barisal", "B Brahmanbaria", "Brahmanbaria", "Chandpur", "Chandpur", "Chattogram", "Chuadanga", "Cox's Bazar", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Halda", "Jamalpur", "Jashore", "Jatiyo", "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Narsingdi", "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"];


    const [SignInInfo , setSignInInfo] =useState({
        firstname:"",
        lastname:"",
        email:"",
        number:"",
        address1:"",
        address2:"",
        city:"",
        post:"",
        division:"",
        district:"",
        Password:"",
        Repeatpassword:"",
        agree: false

    });
    
    console.log(SignInInfo);

    const OnChangeSignUp  =(event)=>{
        const {id, value , checked} = event.target;
        setSignInInfo({
            ...SignInInfo,
            [id]: id === "agree" ? checked : value,
        })
        
    }
    


    return (
        <div className='py-32'>
            <Container>
                <Brebcumb02 />
                <div>
                    <div className='flex flex-col gap-y-14'>
                        <div className='pb-14 border-b border-[#F0F0F0]'>
                            <p className='w-[644px] font-DM leading-7  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        </div>
                        <div className='border-b border-[#F0F0F0]'>
                            <Tittle title='Your Personal Details' />
                            <div className='flex flex-wrap gap-x-10 gap-y-6 mb-[69px]'>
                                <Input valuei={SignInInfo.firstname}  id='firstname' type='text' placeholder='First Name' LabelText='First Name' onChange={OnChangeSignUp} >
                                {/* <p className='absolute top-full font-DM text-red-500 text-[10px] '>{fNameErr}</p> */}
                                </Input>

                                <Input valuei={SignInInfo.lastname}  id='lastname' type='text' placeholder='Last Name' LabelText='Last Name' onChange={OnChangeSignUp}>
                                {/* <p className='absolute top-full font-DM text-red-500 text-[10px] '>{lNameErr}</p> */}
                                </Input>
                                <Input valuei={SignInInfo.email}  id='email' type='email' placeholder='company@domain.com' LabelText='Email address' onChange={OnChangeSignUp} >
                                {/* <p className='absolute top-full font-DM text-red-500 text-[10px] '>{emailErr}</p> */}
                                </Input>
                                <Input  valuei={SignInInfo.number}  id='number' type='number' placeholder='Your phone number' LabelText='Telephone' onChange={OnChangeSignUp} >
                                {/* <p className='absolute top-full font-DM text-red-500 text-[10px] '>{numberErr}</p> */}
                                </Input>
                            </div>
                        </div>
                        <div className=' border-b border-[#F0F0F0]'>
                            <Tittle title='New Customer' />
                            <div className='flex flex-wrap gap-x-10 gap-y-6 mb-[69px]'>
                                <Input id='address1' valuei={SignInInfo.address1} type='text' LabelText='Address 1 ' placeholder='4279 Zboncak Port Suite 6212' onChange={OnChangeSignUp}/>
                                <Input id='address2' valuei={SignInInfo.address2} type='text' LabelText='Address 2 ' placeholder='—'  onChange={OnChangeSignUp}/>
                                <Input id='city'     valuei={SignInInfo.city}     type='text' LabelText='City '      placeholder='Your city' onChange={OnChangeSignUp} />
                                <Input id='post'     valuei={SignInInfo.post}     type='text' LabelText='Post Code'  placeholder='05228' onChange={OnChangeSignUp} />
                                <div className=' w-[507px] pb-2 border-b border-[#F0F0F0] flex flex-col'>
                                    <label className='font-DM font-bold leading-6 py-1 text-textcolor' htmlFor="Division">Division</label>
                                    <select className='bg-transparent' name="" id="division" value={SignInInfo.division} onChange={OnChangeSignUp}>
                                        <option className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize' value="Please select"></option>
                                        {
                                            Division.map((item, index) => (
                                                <option className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize ' key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className=' w-[507px] pb-2 border-b border-[#F0F0F0] flex flex-col bg-transparent'>
                                    <label className='font-DM font-bold leading-6 py-1 text-textcolor' htmlFor="District">District</label>
                                    <select className='bg-transparent' name="" id="district" value={SignInInfo.district} onChange={OnChangeSignUp}>
                                        <option className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize bg-none' value="Please select"></option>
                                        {
                                            District.map((item, index) => (
                                                <option className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize bg-none' key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className=' border-b border-[#F0F0F0]'>
                            <Tittle title='Your Password' />
                            <div className='flex flex-wrap gap-x-10 gap-y-6 mb-[69px]'>
                                <Input valuei={SignInInfo.Password}  id='Password' type='password' LabelText=' Password' placeholder='Password' onChange={OnChangeSignUp}>
                                {/* <p className='absolute top-full font-DM text-red-500 text-[10px] '>{passwordErr}</p> */}
                                </Input>
                                <Input  valuei={SignInInfo.Repeatpassword}  id='Repeatpassword' type='password' LabelText='Repeat Password ' placeholder='Repeat password' onChange={OnChangeSignUp} >
                                {/* <p className='absolute top-full font-DM text-red-500 text-[10px] '>{repeatpassErr}</p> */}
                                </Input>
                            </div>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4 items-center'>
                                <CheckBox type='checkbox' id='agree' value10={SignInInfo.agree} onChange={OnChangeSignUp} />
                                <p className='font-DM text-sm text-textcolor2'>I have read and agree to the Privacy Policy</p>
                            </div>
                            <div  className='flex gap-4 items-center'>
                                <p className='font-DM text-sm text-textcolor2 mr-4'> Subscribe Newsletter</p>
                                <CheckBox type='radio' name='subscribe' />
                                <p className='font-DM text-sm text-textcolor2 mr-3'>Yes</p>
                                <CheckBox type='radio' name='subscribe' />
                                <p className='font-DM text-sm text-textcolor2'>No</p>
                            </div>
                            <Button  className='max-w-[200px]' btntext='Sign up'/>

                        </div>
                    </div>
                </div>






            </Container>

        </div>
    )
}

export default SignIn