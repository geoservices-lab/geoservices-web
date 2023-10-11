import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SubMenu from './SubMenu';

const MobileNavigation = () => {
    const [isExpanded, setExpandStatus] = useState(false);

    const oilAndGasMenu = [
        {
            label: 'Exploration',
            url: '/exploration',
        },
        {
            label: 'Laboratory',
            url: '/oil_and_gas/geolab',
        },
        {
            label: 'Software',
            url: '/oil_and_gas/software',
        },
        {
            label: 'Services',
            url: '/oil_and_gas/services',
        },
        {
            label: 'Training',
            url: '/training',
        },
    ];

    const coalMenu = [
        {
            label: 'Exploration',
            url: '/exploration',
        },
        {
            label: 'Laboratory',
            url: '/coal/laboratory',
        },
        {
            label: 'Services',
            url: '/coal/services',
        },
        {
            label: 'Training',
            url: '/training',
        },
    ];

    const menus = [
        {
            id: 0,
            label: 'Oil and Gas',
            url: '#',
            subMenu: oilAndGasMenu
        },
        {
            id: 1,
            label: 'Coal and Minerals',
            url: '#',
            subMenu: coalMenu
        },
        {
            id: 2,
            label: 'Geothermal',
            url: '/geothermal'
        },
        {
            id: 3,
            label: 'Trade and Services',
            url: '/trade_and_services'
        },
        {
            id: 4,
            label: 'Career',
            url: '/career'
        },
        {
            id: 5,
            label: 'About Us',
            url: '/about-us'
        },
        {
            id: 6,
            label: 'Contact Us',
            url: '/contact-us'
        },
    ];

    const MainMenu = ({ label, url }: any) => {
        return (
            <a href={url} className={'flex justify-between'}>
                {label}
            </a>
        );
    }

    const MenuItem = ({ label, url, subMenu }: any) => (
        <li className={'p-4 ml-2'}>
            {subMenu ? <SubMenu label={label} subMenu={subMenu} /> : <MainMenu label={label} url={url} />}
        </li>
    );

    const renderMenu = () => (
        <div>
            <ul>
                {menus.map((item) => <MenuItem
                    label={item.label}
                    url={item.url}
                    subMenu={item.subMenu}
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
