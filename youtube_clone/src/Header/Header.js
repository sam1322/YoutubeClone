import React , {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AvatarIcon from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Header() {
    const [search,setSearch]=useState('')
    
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon />
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Youtube_Logo_2005.png/250px-Youtube_Logo_2005.png" 
                    alt="" 
                />
            </Link>
                
            </div>
            <div className="header__input">
                <input 
                    placeholder="Search" 
                    onChange={e=>setSearch(e.target.value)} 
                    value={search} 
                    type="text"
                />
                <Link to={`/search/${search}`}>
                    <SearchIcon className='header__inputButton'/>
                </Link>
            </div>
            
            <div className='header__icons'>
                <VideoCallIcon className='header__icon'/>
                <AppsIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <AvatarIcon
                alt="Sriram"
                src="https://yt3.ggpht.com/HpvKb5taROdpbxirwipmNeaYMSXYWmUpnNBbs6xC9CCyGb0raHm2nIaehBuMnYtsn8z3Q4CKlQ=s88-c-k-c0x00ffffff-no-rj-mo"    
                />
            </div>
        </div>
    )
}

export default Header
