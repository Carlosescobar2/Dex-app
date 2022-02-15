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

        <HomeImages>
            <img src="/images/DexFrontImage.jpeg" />
            <img src="/images/astronautPic.png" />
            <img src="/images/EyePieaceHome.png" />
         

        </HomeImages>       

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
const HomeImages = styled.div`
    display: grid;
    margin-left: 300px;
    grid-template-columns: repeat(2, 400px); 
    grid-column-gap: 40px;
    grid-row-gap: 20px;
    img{ 
        height:100%;
        width:100%;
    }
`

export default Home;
