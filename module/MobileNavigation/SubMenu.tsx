import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SubMenu = ({ label, subMenu }: any) => {
    const [isSubMenuActive, setActiveSubmenu] = useState(false);
    const expandSubMenu = () => {
        setActiveSubmenu(!isSubMenuActive);
    }

    const renderSubMenu = (subMenu: any) => (
        isSubMenuActive && <ul className={'mt-4'} style={{ backgroundColor: 'gainsboro' }}>
            {subMenu && subMenu.map((item: any, index: number) => (
                <li key={index} className={'p-4 ml-2'}>
                    <a href={item.url ? item.url : '#'}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <a href={'#'} className={'flex justify-between'} onClick={() => expandSubMenu()}>
                {label}
                {subMenu && !isSubMenuActive && <FaChevronDown size={18} />}
                {subMenu && isSubMenuActive && <FaChevronUp size={18} />}
            </a>
            {subMenu && renderSubMenu(subMenu)}
        </div>
    )
}

export default SubMenu;
