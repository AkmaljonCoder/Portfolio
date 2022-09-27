import React, { useState } from 'react'
import {Container} from './style'
import Paginationn from '@mui/material/Pagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pagination = ({postPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];
    const [numberr, setNumber] = useState(1);

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
    };

  return (
    <Container>
        <button className='ext-button' onClick={()=>{numberr==1? console.log('first page') : setNumber(numberr-1);numberr==1? paginate(numberr) : paginate(numberr-1)}}>
            <ArrowBackIcon/>
        </button>
        {/* <Paginationn id='pagination' variant="outlined" count={pageNumbers.length} onChange={(e)=>paginate(e.target.textContent)} /> */}
        {pageNumbers.map(number => (
            <button className='pagi-button' style={{backgroundColor:numberr==number? '#FEB918' : 'rgb(0,0,0,0)',color:numberr==number? 'white' : '#667085',transition:'all ease 0.6s'}} key={number} onClick={() =>{paginate(number);setNumber(number)}}>
                {number}
            </button>
        ))}
        <button className='ext-button' onClick={()=>{numberr==pageNumbers.length? console.log('last page') : setNumber(numberr+1);numberr==pageNumbers.length? paginate(numberr) : paginate(numberr+1)}}>
            <ArrowForwardIcon/>
        </button>
    </Container>
  )
}

export default Pagination