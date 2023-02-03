import * as React from 'react';

const Header = () => (
    <div className="pl-16 h-16 bg-white flex items-center">
        <LogoText title="Frenter" />
        <div className="flex h-full">
            <NavItem title="Business Global" active={true} />
            <NavItem title="Rentals" />
            <NavItem title="Settings" />
        </div>
    </div>
);

type LogoTextPropType = {
    title: string;
};

const LogoText = ({ title }: LogoTextPropType) => (
    <div className="mr-24 text-gray-800 font-display font-bold text-xl italic">
        {title}
    </div>
);

type NavItemPropType = {
    title: string;
    active?: boolean;
};

const NavItem = ({ title, active }: NavItemPropType) => (
    <div
        className={`${
            active ? 'border-b-2 border-green-300 ' : ''
        }h-full flex flex-col justify-center hover:cursor-pointer`}
    >
        <div
            className={`${
                active ? 'text-green-500 font-medium' : 'text-gray-600'
            } px-4 text-center text-sm `}
        >
            {title}
        </div>
    </div>
);

export default Header;
