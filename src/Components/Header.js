import React, {useState} from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Container>
            <Menu>
                <p><a>Post Art</a></p>
                <p><a>Most Popular</a></p>
            </Menu>   
        
        </Container>
    )
}

export default Header


const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
background-color:grey;
align-items:center;
justify-content:space-between; 
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;


`

const Menu = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    


`