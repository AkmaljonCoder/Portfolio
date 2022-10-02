import React, { useRef, useState } from 'react'
import { Brand, CloseBtn, Container, LinkDiv, Menu, MenuWrapper, Wrapper } from './style'
import Logo from '../../Assets/Logo.png'

const Navbar = () => {

  const [color, setcolor] = useState('home')

  const menu = useRef()

  const openMenu = ()=>{
    menu.current.style.right = "0"
  }

  const closeMenu = ()=>{
    menu.current.style.right = "-100%"
  }

  // scroll function

  const Scrolling = (val) => {
    window.scrollTo({
      top:val,
      behavior:'smooth'
    })
    menu.current.style.right = '-100%'
  }

  return (
    <Wrapper>
      <Container>
        <Brand onClick={()=>{setcolor('home');Scrolling(0)}} src={Logo} />
        <LinkDiv>
          <h2
          style={{color:color=='home'?'#FCC647':'#3C3C3C'}}
          onClick={()=>{setcolor('home');Scrolling(0)}}
          >Home</h2>
          <h2
          style={{color:color=='about'?'#FCC647':'#3C3C3C'}}
          onClick={()=>{setcolor('about');Scrolling(550)}}
          >About us</h2>
          <h2
          style={{color:color=='menu'?'#FCC647':'#3C3C3C'}}
          onClick={()=>{setcolor('menu');Scrolling(1200)}}
          >Menu</h2>
          <h2
          style={{color:color=='blog'?'#FCC647':'#3C3C3C'}}
          onClick={()=>{setcolor('blog');Scrolling(2400)}}
          >Blog</h2>
          <h2
          style={{color:color=='contact'?'#FCC647':'#3C3C3C'}}
          onClick={()=>{setcolor('contact');Scrolling(10000)}}
          >Contact us</h2>
        </LinkDiv>
        <MenuWrapper ref={menu}>
          <CloseBtn onClick={closeMenu}>&times;</CloseBtn>
          <h2
          onClick={()=>Scrolling(0)}
          >Home</h2>
          <h2
          onClick={()=>Scrolling(570)}
          >About us</h2>
          <h2
          onClick={()=>Scrolling(1930)}
          >Menu</h2>
          <h2
          onClick={()=>Scrolling(5400)}
          >Blog</h2>
          <h2
          onClick={()=>Scrolling(7500)}
          >Contact us</h2>
        </MenuWrapper>
        <Menu onClick={openMenu}/>
      </Container>
    </Wrapper>
  )
}

export default Navbar