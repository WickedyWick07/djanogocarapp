
import { useState, useEffect } from 'react';
import axios from 'axios';


  
function Header()
    {
        return (<>
            <div className='header__container'>,
                <h1> Welcome</h1>
                <nav>
                    <ul>
                        <li>home</li>
                        <li>contact us</li>
                        <li>about us</li>
                    </ul>
                </nav>


            </div>
        </>)

   
    }
  
  export default Header;
  