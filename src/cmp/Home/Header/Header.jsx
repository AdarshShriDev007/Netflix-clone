import React, { useEffect, useState } from 'react';
import {auth,signOut} from "../../../firebase";

const Header = () => {

    const [fade,setFade] = useState(false);

    const fadeHeader = ()=>{
        if(window.scrollY > 100)
        {
            setFade(true);
        }
        else{
            setFade(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',fadeHeader);
        return ()=>{
            window.removeEventListener('scroll',fadeHeader);
        } 
    },[]);

  return (
    <>
        <div className={`header ${fade && "fade_header"}`}>
            <div className='header_content'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo' />
                <img title='Logout' onClick={()=>signOut(auth)} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            </div>
        </div>
    </>
  )
}

export default Header;