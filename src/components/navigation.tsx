import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

const Navigation = () => (
    <div className="bg-sky-100 flex h-full px-16">
        <NavItem title="Store home" active={true} />
        <NavItem title="All products" />
        <NavItem title="Offers" />
        <NavItem title="Reviews" />
        <Input />
    </div>
);

export default Navigation;

type NavItemPropType = {
    title: string;
    active?: boolean;
};

const NavItem = ({ title, active }: NavItemPropType) => (
    <div
        className={`${
            active ? 'border-b-2 border-green-300 ' : ''
        }h-full flex flex-col justify-center hover:cursor-pointer pt-10 pb-4`}
    >
        <div
            className={`${
                active ? 'text-green-400 font-medium' : 'text-gray-600'
            } px-4 text-center text-sm `}
        >
            {title}
        </div>
    </div>
);

const Input = () => (
    <div className="relative mb-0 ml-auto mt-6">
        <div className="absolute top-3.5 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-500 dark:text-gray-400"
            />
        </div>
        <input
            type="text"
            id="input-group-1"
            className="bg-gray-50  text-gray-900 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search in store"
        />
    </div>
);
