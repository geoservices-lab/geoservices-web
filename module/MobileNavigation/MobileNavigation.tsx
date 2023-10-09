import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MobileNavigation = () => {
    const [isExpanded, setExpandStatus] = useState(false);
    const [isSubMenuActive, setActiveSubmenu] = useState(false);
    const [subMenuIndex, setSubMenuIndex] = useState();

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
            url: '/oil_and_gas/training',
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
            url: '/coal/training',
        },
    ];

    const menus = [
        {
            id: 0,
            label: 'Oil and Gas',
            url: '/oil_and_gas',
            subMenu: oilAndGasMenu
        },
        {
            id: 1,
            label: 'Coal and Minerals',
            url: '/coal',
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

    const renderSubmenu = (subMenu) => {
        return (
            <ul
                className={'mt-4'}
                style={{
                    backgroundColor: 'gainsboro'
                }}
            >
                {subMenu.map((item: any, index: number) => (
                        <li key={index} className={'p-4 ml-2'}>
                            <a href={item.url ? item.url : '#'}>
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        );
    }

    const expandSubMenu = (id: number) => {
        setActiveSubmenu(!isSubMenuActive);
    }

    const MenuItem = ({ label, url, subMenu, id }: any) => (
        <li className={'p-4 ml-2'}>
            <a href={subMenu ? '#' : url} className={'flex justify-between'} onClick={() => expandSubMenu(id)}>
                {label}
                {subMenu && !isSubMenuActive && <FaChevronDown size={18} />}
                {subMenu && isSubMenuActive && <FaChevronUp size={18} />}
            </a>
            {subMenu && renderSubmenu(subMenu)}
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
