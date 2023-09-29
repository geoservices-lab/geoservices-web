import React from "react";
import {BsFillTelephoneFill, BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs';
import {FaFax} from 'react-icons/fa';
import {MdAttachEmail} from 'react-icons/md';

const Footer = () => {
    const logo = "/assets/logo2.png";

    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
                    <div className="desktop:flex desktop:justify-between grid grid-cols-1 space-y-4">
                        <div>
                            <a href="/" className="flex items-center">
                                <img src="/assets/logo2.png" className="h-14" alt="Geoservices Logo" />
                            </a>
                            <br /><br />
                            <div className="inline-flex items-center space-x-5">
                                <a href="https://www.instagram.com/geoservices.id/">
                                    <BsInstagram className="text-[18px]" color="gray"/>
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.linkedin.com/company/pt-geoservices/">
                                    <BsLinkedin className="text-[18px]" color="gray"/>
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                {/* can we connect to open direct to email or somethin? */}
                                <a href="https://www.youtube.com/@ptgeoservices8715">
                                    <BsYoutube className="text-[24px]" color="gray"/>
                                    <span className="sr-only">Youtube</span>
                                </a>
                            </div>
                            <div className="desktop:pt-16 pt-4 space-y-2 text-gray">
                                <p className="font-medium text-[18px]">Contact us</p>
                                <p className="inline-flex items-center"><span className="mr-4"><MdAttachEmail className="text-[18px]"/></span>info@geoservices.co.id</p>
                            </div>
                        </div>
                        <div className="mobile:pt-32"></div>
                        <div className="flex items-center gap-8 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <div>
                                <p className="font-medium pb-4">Jakarta</p>
                                <p className="text-gray">
                                    Jl. Minangkabau Barat No. 34, <br />
                                    Jakarta, 12970.
                                    <br /><br />
                                    <p className="inline-flex items-center"><span className="mr-4"><BsFillTelephoneFill/></span>(021) 830 5555, 831 8989</p>
                                    <br />
                                    <p className="inline-flex items-center"><span className="mr-4"><FaFax/></span>
                                        (021) 831 1454
                                    </p>
                                </p>
                            </div>
                            <div>
                                <p className="font-medium pb-4">Bandung</p>
                                <p className="text-gray">
                                    Jl. Setiabudi No. 81, <br />
                                    Bandung, 40153.
                                    <br /><br />
                                    <p className="inline-flex items-center"><span className="mr-4"><BsFillTelephoneFill/></span>(022) 203 1316, 203 5436</p>
                                    <br />
                                    <p className="inline-flex items-center"><span className="mr-4"><FaFax/></span>
                                        (022) 203 8090
                                    </p>
                                </p>
                            </div>
                        </div>

                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023 - PT Geoservices</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
