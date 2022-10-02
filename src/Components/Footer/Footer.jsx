import React from 'react'
import { BottomDiv, BottomLine, BottomMain, BottomText, Container, Facebook, InfoDiv, InputDiv, Instagram, LinkDiv, Mail, NormalDiv, NormalText, Phone, Send, TitleDiv, TitleLogo, TopBorderDiv, TopDiv, Twitter, Wrapper, YouTube } from './style'
import Logo from '../../Assets/FooterLogo.png'

const Footer = () => {
  return (
    <Wrapper>
        <Container>
            <TopDiv>
                <InfoDiv>
                    <div>
                        <Mail/>
                    </div>
                    <h2>info@youremail.com</h2>
                </InfoDiv>
                <TopBorderDiv></TopBorderDiv>
                <InfoDiv>
                    <div>
                        <Phone/>
                    </div>
                    <h2>+880 321 655 9985</h2>
                </InfoDiv>
            </TopDiv>
            <BottomDiv>
                <BottomMain>
                    <TitleDiv>
                        <TitleLogo src={Logo} />
                        <p>
                        Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s.
                        </p>
                        <LinkDiv>
                            <Facebook/>
                            <div></div>
                            <Instagram/>
                            <div></div>
                            <Twitter/>
                            <div></div>
                            <YouTube/>
                        </LinkDiv>
                    </TitleDiv>
                    <NormalDiv>
                        <h2>QUICK LINK</h2>
                        <NormalText className='links'>About us</NormalText>
                        <NormalText className='links'>Menu</NormalText>
                        <NormalText className='links'>Blog</NormalText>
                        <NormalText className='links'>Contact us</NormalText>
                    </NormalDiv>
                    <NormalDiv>
                        <h2>NEWS LETTER</h2>
                        <NormalText>
                        Subscribe our newsletter to 
                        get our latest update & news
                        </NormalText>
                        <InputDiv>
                            <input type="text" placeholder='Your email adress' />
                            <div><Send/></div>
                        </InputDiv>
                    </NormalDiv>
                </BottomMain>
                <BottomLine></BottomLine>
                <BottomText>Copyright 2021 .Tammy Food. All Right Reserved.</BottomText>
            </BottomDiv>
        </Container>
    </Wrapper>
  )
}

export default Footer