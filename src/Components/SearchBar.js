import React from 'react'
import styled from 'styled-components'

import { Icon } from '@iconify/react';


function SearchBar({placeholder, data}) {
  return (
    <SearchContainer>
        <SearchInputs>
            
            <input  typeof='text' placeholder={placeholder}/>
        <a><SearchIcon icon="charm:search" /></a>

        </SearchInputs>
        
        

        <DataResult></DataResult>



    </SearchContainer>

  )
}


const SearchContainer = styled.div`
   input { 
        border:1;
        border-radius: 2px;
        border-top-right-radius: 10px;
        border-bottom-right-radius:10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        font-size:14px;
        padding:15px;
        height:10px;
        width:250px;
    }
`

const SearchInputs = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
  

`
const SearchIcon = styled(Icon)`
    height:50px;
    width:30px;
    padding: 10px 12px;
    background-color: white;
   

`

const DataResult= styled.div`
    

`


export default SearchBar