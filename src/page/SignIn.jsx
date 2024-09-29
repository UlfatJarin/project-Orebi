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


    let [fName, setfName] = useState('');
    let [fNameErr, setfNameErr] = useState('');

    let [lName, setlName] = useState('');
    let [lNameErr, setlNameErr] = useState('');

    let [email, setemail] = useState('');
    let [emailErr, setemailErr] = useState('');

    let [number, setnumber] = useState('');
    let [numberErr, setnumberErr] = useState('');

    let [password, setpassword] = useState('');
    let [passwordErr, setpasswordErr] = useState('');

    let [repeatpass, setrepeatpass] = useState('');
    let [repeatpassErr, setrepeatpassErr] = useState('');

    let managefName = (element)=>{
        setfName(element.target.value);
        setfNameErr('')
    }

    let managelName = (element)=>{
        setlName(element.target.value);
        setlNameErr('')
    }

    let manageemail = (element)=>{
        setemail(element.target.value);
        setemailErr('')
    }

    let managenumber= (element)=>{
        setnumber(element.target.value);
        setnumberErr('')
    }

    let managepassword= (element)=>{
        setpassword(element.target.value);
        setpasswordErr('')
    }
    let managerepeatpass= (element)=>{
        setrepeatpass(element.target.value);
        setrepeatpassErr('')
    }

    let manageSubmit = ()=>{
        if(!fName){
            setfNameErr('First Name is requred');
        }
        if(!lName){
            setlNameErr('Last Name is requred');
        }
        if(!email){
            setemailErr('Email is requred');
        }
        if(!number){
            setnumberErr('Number is requred');
        }
        if(!password){
            setpasswordErr('Password is requred');
        }
        if(!repeatpass){
            setrepeatpassErr('Repeat Password is requred');
        }
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
                                <Input valuei={fName} onChange={managefName} id='firstname' type='text' placeholder='First Name' LabelText='First Name' >
                                <p className='absolute top-full font-DM text-red-500 text-[10px] '>{fNameErr}</p>
                                </Input>

                                <Input valuei={lName} onChange={managelName} id='lastname' type='text' placeholder='Last Name' LabelText='Last Name'>
                                <p className='absolute top-full font-DM text-red-500 text-[10px] '>{lNameErr}</p>
                                </Input>
                                <Input valuei={email} onChange={manageemail} id='email' type='email' placeholder='company@domain.com' LabelText='Email address' >
                                <p className='absolute top-full font-DM text-red-500 text-[10px] '>{emailErr}</p>
                                </Input>
                                <Input  valuei={number} onChange={managenumber} id='number' type='number' placeholder='Your phone number' LabelText='Telephone' >
                                <p className='absolute top-full font-DM text-red-500 text-[10px] '>{numberErr}</p>
                                </Input>
                            </div>
                        </div>
                        <div className=' border-b border-[#F0F0F0]'>
                            <Tittle title='New Customer' />
                            <div className='flex flex-wrap gap-x-10 gap-y-6 mb-[69px]'>
                                <Input id='address1' type='text' LabelText='Address 1 ' placeholder='4279 Zboncak Port Suite 6212' />
                                <Input id='address2' type='text' LabelText='Address 2 ' placeholder='—' />
                                <Input id='city' type='text' LabelText='City ' placeholder='Your city' />
                                <Input id='post' type='text' LabelText='Post Code' placeholder='05228' />
                                <div className=' w-[507px] pb-2 border-b border-[#F0F0F0] flex flex-col'>
                                    <label className='font-DM font-bold leading-6 py-1 text-textcolor' htmlFor="Division">Division</label>
                                    <select className='bg-transparent' name="" id="Division">
                                        <option className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize' value="Please select">Please select</option>
                                        {
                                            Division.map((item, index) => (
                                                <option className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize ' key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className=' w-[507px] pb-2 border-b border-[#F0F0F0] flex flex-col bg-transparent'>
                                    <label className='font-DM font-bold leading-6 py-1 text-textcolor' htmlFor="District">District</label>
                                    <select className='bg-transparent' name="" id="Division">
                                        <option className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize bg-none' value="Please select">Please select</option>
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
                                <Input valuei={password} onChange={managepassword} id='Password' type='password' LabelText=' Password' placeholder='Password' >
                                <p className='absolute top-full font-DM text-red-500 text-[10px] '>{passwordErr}</p>
                                </Input>
                                <Input  valuei={repeatpass} onChange={managerepeatpass} id='Repeat password' type='password' LabelText='Repeat Password ' placeholder='Repeat password' >
                                <p className='absolute top-full font-DM text-red-500 text-[10px] '>{repeatpassErr}</p>
                                </Input>
                            </div>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4 items-center'>
                                <CheckBox type='checkbox' />
                                <p className='font-DM text-sm text-textcolor2'>I have read and agree to the Privacy Policy</p>
                            </div>
                            <div  className='flex gap-4 items-center'>
                                <p className='font-DM text-sm text-textcolor2 mr-4'> Subscribe Newsletter</p>
                                <CheckBox type='radio' name='subscribe' />
                                <p className='font-DM text-sm text-textcolor2 mr-3'>Yes</p>
                                <CheckBox type='radio' name='subscribe' />
                                <p className='font-DM text-sm text-textcolor2 '>No</p>
                            </div>
                            <Button onClick={manageSubmit} className='max-w-[200px]' btntext='Sign up'/>

                        </div>
                    </div>
                </div>






            </Container>

        </div>
    )
}

export default SignIn