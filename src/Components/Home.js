import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';


function Home() {
  return( 
  
  
    <Container>

        <LogoText>
        <h1>DEX</h1>
        </LogoText>
       
       <SearchBar placeholder="Search for Art" />
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
    font-size: 25px;
    font-style: italic;
    color:purple;

`

export default Home;
