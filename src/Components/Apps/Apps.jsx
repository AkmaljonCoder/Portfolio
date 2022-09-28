import React from 'react'
import { ButtonWr, Container, ImageWr, Paragraph, TextField, Title } from './style'
import Google from '../../Assets/App_icons/Google_play.png'
import AppStore from '../../Assets/App_icons/App_store.png'

const Apps = () => {
  return (
    <Container>
        <TextField>
            <Title>To Get 15% Discount Download The App</Title>
            <Paragraph>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s.
            </Paragraph>
            <ButtonWr>
                <img src={Google} alt="" />
                <img src={AppStore} alt="" />
            </ButtonWr>
        </TextField>
        <ImageWr></ImageWr>
    </Container>
  )
}

export default Apps