import styled from 'styled-components'

import MenuIcon from '@mui/icons-material/Menu';

export const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    z-index: 99;
    transition: all ease 0.5s;
`

export const Container = styled.div`
    background-color: white;
    width: 95%;
    height: 100px;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    /* position: fixed; */
    top: 0;
    max-width: 1300px;
    margin: 0 auto;
`

export const Logo = styled.img`
    width: 170px;
    height: 90px;
    object-fit: contain;
    cursor: pointer;
    @media (max-width:460px) {
        width: 150px;
        height: 70px;
    }
`

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    @media (max-width:768px) {
        display: none;
    }
`

export const Link = styled.h2`
    font-family: 'Montserrat',sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #828282;
    cursor: pointer;
    transition: all ease 0.6s;
`

export const MenuWrapper = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: -100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    background-color: #181818;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    h2{
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
        margin: 20px 20px;
        cursor: pointer;
        &:hover{
            color: #f1f1f1;
        }
    }
`

export const Menu = styled(MenuIcon)`
    width: 35px !important;
    height: 35px !important;
    object-fit: contain !important;
    color: #070707 !important;
    display: none !important;
    @media (max-width:768px) {
        display: block !important;
    }
`

export const CloseBtn = styled.h3`
    padding: 8px 8px 8px 32px;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    &:hover{
        color: #f1f1f1;
    }
`

