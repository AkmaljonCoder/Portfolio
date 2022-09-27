import React from 'react'
import { Button, Container, ImageDiv, MiniTitle, Paragraph, TextField, Title, Wrapper } from './style'

const Blog = () => {
  return (
    <Wrapper>
        <Container>
            <ImageDiv></ImageDiv>
            <TextField>
                <MiniTitle>Our Target</MiniTitle>
                <Title>
                We Earn Your Trust and are Diligent in Your Case
                </Title>
                <Paragraph>
                When an unknown printer took a galley 
                of type and scrambled it to make a type 
                specimen book. It has survived not only 
                five centuries, but also the leap into 
                electronic typesetting,
                </Paragraph>
                <Paragraph>
                It was popularised in the 1960s with 
                the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus 
                PageMaker including versions of Lorem Ipsum.
                </Paragraph>
                <Button>Order Now</Button>
            </TextField>
        </Container>
    </Wrapper>
  )
}

export default Blog