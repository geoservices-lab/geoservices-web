import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNavigation = () => {
    const [isExpanded, setExpandStatus] = useState(false);

    const menus = [
        {
            label: 'Oil and Gas',
            url: '/oil_and_gas'
        },
        {
            label: 'Coal and Minerals',
            url: '/coal'
        },
        {
            label: 'Geothermal',
            url: '/geothermal'
        },
        {
            label: 'Trade and Services',
            url: '/trade_and_services'
        },
        {
            label: 'Career',
            url: '/career'
        },
        {
            label: 'About Us',
            url: '/about-us'
        },
        {
            label: 'Contact Us',
            url: '/contact-us'
        },
    ];

    const MenuItem = ({ label, url }: any) => (
        <li className={'p-4 ml-2'}>
            <a href={url ? url : '#'}>
                {label}
            </a>
        </li>
    );

    const renderMenu = () => (
        <div>
            <ul>
                {menus.map((item) => <MenuItem
                    label={item.label}
                    url={item.url}
                />)}
            </ul>
        </div>
    );

    return (
        <div className={`fixed w-full ${isExpanded ? 'h-full' : 'h-auto'} desktop:hidden bg-white z-40 top-0 left-0`}>
            <div className={"flex justify-between p-4"}>
                <a href="/" className="flex items-center">
                    <img src="/assets/logo2.png" className="h-14" alt="Geoservices Logo" />
                </a>
                <button className={"mt-1"} onClick={() => setExpandStatus(!isExpanded)}>
                    {isExpanded ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isExpanded && renderMenu()}
        </div>
    )
}

export default MobileNavigation;
