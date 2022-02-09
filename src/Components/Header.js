import React, {useState} from 'react';
import styled from 'styled-components';

import { Icon } from '@iconify/react';


function Header() {

    const[accountStatus, setaccountNav] = useState(false)

  return(

    <Container>

            <RightMenu>
                <a href="#">Post Art</a>
                <a href="#">Most Popular</a>
                
                <CustomMenu icon="ic:baseline-account-circle" onClick={()=>setaccountNav(true)} />


            </RightMenu>
            <AccountNav show={accountStatus}>

            <CloseWrapper>
                <CustomClose icon="ci:close-small" onClick={()=>setaccountNav(false)} />
            </CloseWrapper>
            

                <li><a href="#">Create Account</a></li>
                <li><a href="#">Log in</a></li>
                <li><a href="#">Profile</a></li>

                


            </AccountNav>




            
    </Container>


  ) 
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px; 
    top:0;
    left:0; 
    right: 0; 
    z-index: 1;

    background-color:gray;

`

const RightMenu= styled.div`
        display:flex;
    align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right: 60px;
    position:relative;
    left:350px;

}



`
const CustomMenu = styled(Icon)`
    cursor:pointer;
    font-size: 35px;
    position: fixed;
    right:5%;

    
`




const AccountNav = styled.div`
     position:fixed;
    top:7.6%;
    bottom:0;
    right:0;
    background:white;
    width:100px;
    z-index:16;
    list-style:none;
    padding: 20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props=> props.show ? 'translateX(0)': 'translateX(100%)'};

    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);


    }
   
    a { 
        font-size: 600;

    }

  
   

`

const CustomClose = styled(Icon)`
    cursor:pointer;
    

`

const CloseWrapper = styled.div`
     display:flex;
    justify-content:flex-end;
`





export default Header;
