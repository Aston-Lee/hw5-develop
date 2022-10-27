
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarData1 } from './SidebarData.js';
import './SideBar.css';
import { IconContext } from 'react-icons';

export default function SideBar() {
    const [sidebar, setSidebar] = useState(false);
    
    // console.log(localStorage.getItem("newuser"))
    const [sidearray, setsidearray] = useState(SidebarData)

    const removeItem = (index) => {
        setsidearray([
                   ...sidearray.slice(0, index),
                   ...sidearray.slice(index + 1)
                 ]);
      }


    const showSidebar = () => setSidebar(!sidebar);

    

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {sidearray.map((item, index) => {
                            if (localStorage.getItem("newuser") === 0) { // old user
                                return (
                                    <div className='profile-container' key={index} >

                                        <img className={item.cName} src={item.icon} /> 
                                        <div className='profile-text'>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className='profile-status'>
                                            <span>{item.status}</span>
                                        </div>
                                        <div>
                                            {/* <button onClick={removeItem({index})} className='unfollow-Button' >unfollow</button> */}
                                        </div>
                                        
                                    </div>
                                );
                            } else {  // new user
                                return (
                                    <div className='profile-container' key={0} >

                                        <img className={item.cName} src={item.icon} /> 
                                        <div className='profile-text'>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className='profile-status'>
                                            <span>{item.status}</span>
                                        </div>
                                        <div>
                                            <button onClick={(e) => removeItem(index, e)} className='unfollow-Button' >unfollow</button>
                                        </div>
                                        
                                    </div>
                                );
                            }
                            
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
