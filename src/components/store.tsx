import {
    faBox,
    faClipboardUser,
    faSpinner,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import CameraPic from '../resources/Nikon-Z9-main-1024x768.jpg';

const products = [
    {
        key: 0,
        title: 'Digital Camera',
        quantity: 16,
        price: 30,
        score: 4.9,
    },
    {
        key: 1,
        title: 'Airpod pro',
        quantity: 16,
        price: 30,
        score: 4.9,
    },
    {
        key: 2,
        title: 'Toy Car',
        quantity: 16,
        price: 30,
        score: 4.9,
    },
    {
        key: 3,
        title: 'Airpod Max',
        quantity: 16,
        price: 30,
        score: 4.9,
    },
    {
        key: 4,
        title: 'Sunglass',
        quantity: 16,
        price: 30,
        score: 4.9,
    },
    {
        key: 5,
        title: 'Joystick',
        quantity: 16,
        price: 30,
        score: 4.9,
    },
    {
        key: 6,
        title: 'Wrist watch',
        quantity: 16,
        price: 30,
        score: 4.9,
    },
];

const Store = () => (
    <div className="bg-sky-50 pb-8">
        <div className="p-16 flex flex-wrap ">
            {products.map((productProps) => (
                <ProductCard {...productProps} />
            ))}
        </div>
        <ShowMore />
    </div>
);

export default Store;

type ProductCardPropType = {
    key: number;
    title: string;
    quantity: number;
    price: number;
    score: number;
};

const ProductCard = ({
    title,
    quantity,
    price,
    score,
}: ProductCardPropType) => (
    <div className="flex-1 rounded-2xl shadow-sm hover:shadow-md hover:ring-2 mx-3 my-4 min-w-[100%] max-w-[100%] md:min-w-[46%] md:max-w-[46%] lg:min-w-[31%] lg:max-w-[31%] xl:min-w-[22%] xl:max-w-[22%]">
        <img
            src={CameraPic}
            className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="p-6 bg-white rounded-b-2xl">
            <div className="flex">
                <div>
                    <h3 className="font-medium text-lg">{title}</h3>
                    <div className="flex mt-2">
                        <FontAwesomeIcon
                            icon={faBox}
                            className="text-gray-400"
                        />
                        <p className="text-gray-500 font-medium text-sm ml-4">
                            {quantity} unit left
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center border border-2 border-green-500 rounded-lg px-2 py-1 ml-auto text-green-500 h-fit">
                    <span className="font-bold text-sm">{`$${price}`}</span>
                    <span className="text-xs">/Day</span>
                </div>
            </div>
            <hr className="font-bold my-4" />
            <div className="flex justify-between">
                <span className="text-green-500 font-medium hover:cursor-pointer">
                    Book now
                </span>
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-400"
                    />
                    <span className="ml-1">{score}</span>
                </div>
            </div>
        </div>
    </div>
);

const ShowMore = () => (
    <div className="bg-white w-48 rounded-lg p-3 text-sm font-medium mx-auto text-center">
        <FontAwesomeIcon icon={faSpinner} className="text-gray-500" />
        <span className="ml-3">Show more</span>
    </div>
);
