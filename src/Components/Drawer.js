import { Icon } from '@iconify/react';
import React from 'react';
import Body from './Body';
import logo from '../Assets/logo2.png'

const Drawer = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Body />

            </div>
            <div className="drawer-side border-r-2 shadow-lg">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-72 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li className='w-[188px] mb-16'><a className='p-0 m-0' href='/'><img src={logo} alt="" /></a></li>
                    <li><a href='/'><Icon icon="ant-design:home-filled" />DASHBOARD</a></li>
                    <li><a href='/'><Icon icon="dashicons:welcome-widgets-menus" />MENU ITEM 3</a></li>
                    <li><a href='/'><Icon icon="el:star-alt" />MENU ITEM 4</a></li>
                    <li><a href='/'><Icon icon="el:star-alt" />MENU ITEM 5</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Drawer;