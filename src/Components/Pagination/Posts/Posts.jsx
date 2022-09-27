import React,{useState,useEffect} from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import { Card, CardsWr, Container , Download , Share, TitleWr } from './style';

import Rating from '@mui/material/Rating';

const Posts = ({posts}) => {

  return (
    <Container>
      <TitleWr>
        <h1>Our Delicious Dish</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
      </TitleWr>
      <CardsWr>
        {posts.map((item,index)=>{
          return(
            <Card key={index}>
              <div id='img-div'>
                <img src={item.img} alt="" />
              </div>
              <Rating id='rating' name="half-rating-read" value={item.rate} precision={0.5} readOnly />
              <h2>{item.name}</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting....
              </p>
              <div id='bottom-panel'>
                <h3>${item.price}</h3>
                <div id='buttons'>
                  <Download>
                    <AddShoppingCartIcon className='icons' style={{color:'white'}}/>
                  </Download>
                  <Share>
                    <ShareIcon className='icons' style={{color:'white'}}/>
                  </Share>
                </div>
              </div>
            </Card>
          )
        })}
      </CardsWr>
    </Container>
  )
}

export default Posts