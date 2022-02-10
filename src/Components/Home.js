import React from 'react';
import styled from 'styled-components';


function Home() {
  return( 
  
  
    <Container>

        <LogoText>
        <h1>DEX</h1>
        </LogoText>
       
    </Container>
    
    
    
    
    
    )
}

const Container = styled.div`
    height:100vh;
    width:100vw;


`
const LogoText = styled.div`
    text-align: center;
    margin-top: 12vh;
    font-size: 20px;
    font-style: italic;
    color:purple;

`

export default Home;
