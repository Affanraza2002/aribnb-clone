import React from 'react';
import { useLocation } from 'react-router-dom';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';


export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a beautiful pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is an ancient castle!'
    },
    {
        label: 'Caves',
        icon: GiCaveEntrance,
        description: 'This property is in a spooky cave!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property offers camping activities!'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in an arctic environment!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in a barn!'
    },

];

const Categories = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <div>
            <div
                className="pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          width-[100%]
          
          text-[#5c5c5c]  px-6"
            >
                {categories.map((item) => (
                    <>
                        <div
                            className={`
                                    flex 
                                    flex-col 
                                    items-center 
                                    justify-center 
                                    gap-2
                                    p-3
                                    pt-1
                                    border-b-2
                                    border-white
                                    hover:border-b-2
                                    hover:border-black
                                    hover:text-black
                                    transition
                                    cursor-pointer
                                `}
                        >
                            <item.icon  className="text-[25px] "/>
                            <div className="font-medium text-sm ">
                                {item.label}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Categories;
