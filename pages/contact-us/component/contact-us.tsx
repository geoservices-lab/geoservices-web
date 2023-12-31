import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea, Select } from 'flowbite-react';

const ContactUs = () => {
    return(
        <>
        <div className='flex mobile:flex-col justify-between max-w-7xl mx-auto pt-14 mobile:px-8'>
            <div className='desktop:hidden'>
                <img src="../assets/Laboratory of PT Geoservices.png" alt=""/>
            </div>
            <div className='desktop:flex-initial desktop:w-1/2'>
                <h1 className="font-bold text-[#E68E67] desktop:text-[36px] text-[24px] mt-[20px] uppercase">Contact Us</h1>
                <br /><br />
                <form className="flex flex-col gap-4">
                    <div>
                        <div>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="clientName"
                                value="Name"
                            />
                            </div>
                        <TextInput
                        id="clientName"
                        required
                        type="text"
                        />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="clientEmail"
                            value="Email"
                        />
                        </div>
                        <TextInput
                        id="clientEmail"
                        required
                        type="email"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="clientCompany"
                            value="Company"
                        />
                        </div>
                        <TextInput
                        id="clientCompany"
                        required
                        type="text"
                        />
                    </div>
                    <div
                        className="mb-2 block"
                        id="select">
                        <div className="mb-2 block">
                            <Label
                            htmlFor="businessUnit"
                            value="Select Business Unit (optional)"
                            />
                        </div>
                    <Select
                        id="businessUnit">
                        <option>
                        Choose business unit
                        </option>
                        
                        <option>
                        Coal Laboratory
                        </option>
                        <option>
                        Drilling
                        </option>
                        <option>
                        Engineering, Procurement & Construction 
                        </option>
                        <option>
                        Enviromental Laboratory
                        </option>
                        <option>
                        Equipment and Services
                        </option>
                        <option>
                        Exploration
                        </option>
                        <option>
                        Gological Laboratory
                        </option>
                        <option>
                        Geothermal
                        </option>
                        <option>
                        Mineral Laboratory
                        </option>
                        <option>
                        Inspection Services
                        </option>
                        <option>
                        Siesmic
                        </option>
                        <option>
                        Software
                        </option>
                        <option>
                        Training
                        </option>
                    </Select>
                    </div>
                    <div
                        className="mb-2 block"
                        id="textarea"
                        >
                        <div className="mb-2 block">
                            <Label
                            htmlFor="comment"
                            value="Your message"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required
                            rows={4}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
            <div className='ml-16 mobile:hidden'>
                <img src="../assets/Laboratory of PT Geoservices.png" alt=""/>
            </div>
        </div>
        </>
    )
}

export default ContactUs