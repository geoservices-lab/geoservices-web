import React from 'react'

const posts = [
    {
      name: 'Laboratorium Penguji',
      tittle: 'LP-336-IDN',
      imageUrl: "../assets/KAN Logo.png",
    },
    {
    name: 'Laboratorium Penguji',
    tittle: 'LP-1364-IDN',
    imageUrl: "../assets/KAN Logo.png",
    },
    {
        name: 'Laboratorium Penguji',
        tittle: 'LP-548-IDN',
        imageUrl: "../assets/KAN Logo.png",
        },
        {
            name: 'Laboratorium Penguji',
            tittle: 'LP-072-IDN',
            imageUrl: "../assets/KAN Logo.png",
            },
    {
    name: 'Lembaga Inspeksi',
    tittle: 'LI-055-IDN',
    imageUrl: "../assets/KAN Logo.png",
    },
    {
    name: 'Lembaga Inspeksi',
    tittle: 'LI-115-IDN',
    imageUrl: "../assets/KAN Logo.png",
    },
]

const ISO = () => {
    return (
        <>
        <div className="py-8 mx-auto max-w-7xl px-8">
        <h1 className="mb-4 text-[18pt] tracking-wide font-bold text-peach text-center capitalize">ISO Certification</h1>
        <div className="text-justify font-light text-darkGray text-[12pt] space-y-4">
            <p>Quality Control is a very important element that we value in order to give the best service to our clients. As proof of our concern for quality, Geoservices have been certified with ISO 9001:2015, ISO/IEC 17025:2017, and ISO/IEC 17020:2012.</p>
            <p>Geoservices always pays attention to the standardization of safety and health of its employees. One way to do this is to ensure that the company meets applicable safety standards. Currently, Geoservices has obtained safety certification such as ISO 45001:2018 and CSMS (Contractor Safety Management System).</p>
            <ul>
                <li>
                    a. ISO 9001:2015 Quality Management System
                </li>
                <li>
                    b. ISO 45001:2018 Occupational Health and Safety Management System
                </li>
                <li>
                    c. ISO/IEC 17025:2017 Genera Requirements For The Competence of Testing and Calibration Laboratories
                </li>
                <li>
                    d. ISO/IEC 7020:2012 General Criteria For The Operation of Various Types of Bodies Performing Inspection
                </li>
                <li>
                    e. ISO 27001:2013 Information Security Management System
                </li>
            </ul>
        </div>
        <br />
        <div className='grid desktop:grid-cols-5 grid-cols-2 gap-8 py-4'>
            <img src="../assets/ISO-9001-Logo-UKAS-1.png" alt=""/>
            <img src="../assets/ISO-45001-Logo_UKAS-1.png" alt=""/>
            <img src="../assets/KAN Logo.png" alt="" />
            <img src="../assets/KAN Logo.png" alt="" />
        </div>

        <div className='grid desktop:grid-cols-4 grid-cols-2 gap-8'>
            
        </div>
        <div className='grid desktop:grid-cols-4 grid-cols-2 gap-8'>
        {posts.map((post) => (
            <div className='items-center text-center'>
            <img src={post.imageUrl} alt="" className='scale-110'/>
                <div className='-mt-4 desktop:-mt-6 font-bold text-gray text-[12pt]'>
                    <p>{post.name}</p>
                    <p>{post.tittle}</p>
                </div>            
            </div>
        ))}
        </div>
        
        </div>
        </>
    )
}

export default ISO