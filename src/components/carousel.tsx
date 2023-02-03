import * as React from 'react';
import BlurOilPaint from '../resources/blue-oil-paint.jpeg';
import AmazonLogo from '../resources/amazon-dark-logo-png-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faUser,
    faStar,
    faCertificate,
    IconDefinition,
    faComment,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

const StoreData = {
    location: 'London, United Kingdom',
    scores: 4.9,
    reviews: 125,
    followers: 995,
    ratings: 0.83,
};

const infos: InfoPropType[] = [
    { key: 0, icon: faLocationDot, description: StoreData.location },
    { key: 1, icon: faUser, description: `${StoreData.followers} Followers` },
    {
        key: 2,
        icon: faStar,
        description: `${StoreData.scores} (${StoreData.reviews} reviews)`,
    },
    {
        key: 3,
        icon: faCertificate,
        description: `${Math.round(
            StoreData.ratings
        )}% Positive seller ratings`,
    },
];

const Carousel = () => (
    <div className="flex flex-col items-center bg-sky-100">
        <img src={BlurOilPaint} className="h-48 w-full object-cover" />
        <div className="-mt-28 w-4/5 bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row">
                <img
                    src={AmazonLogo}
                    className="md:w-1/6 lg:w-2/12 xl:w-1/12 rounded-lg object-cover"
                />
                <div className="ml-8 flex-1">
                    <h1 className="text-lg font-semibold">Home Deport Store</h1>
                    <div className="flex flex-wrap">
                        {infos.map((infoProp) => (
                            <Info {...infoProp} />
                        ))}
                    </div>
                </div>
                <div>
                    <Button icon={faComment} title="Contact" />
                    <Button
                        icon={faPlus}
                        title="Follow store"
                        highlight={true}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Carousel;

type InfoPropType = {
    key: React.Key;
    icon: IconDefinition;
    description: string;
};

const Info = ({ icon, description }: InfoPropType) => (
    <div className="flex w-1/2 py-2">
        <FontAwesomeIcon icon={icon} className="text-sm mr-3 text-gray-600" />
        <p className="font-light text-xs">{description}</p>
    </div>
);

type ButtonPropType = {
    icon: IconDefinition;
    title: string;
    highlight?: boolean;
};

const Button = ({ icon, title, highlight }: ButtonPropType) => (
    <button
        className={`border rounded-lg px-5 py-2 text-xs font-medium shadow-xs ml-3 ${
            highlight ? 'text-white bg-green-500' : ''
        }`}
    >
        <FontAwesomeIcon
            icon={icon}
            className={`text-sm mr-3  ${
                highlight ? 'text-white' : 'text-gray-600'
            }`}
        />
        {title}
    </button>
);
