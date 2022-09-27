import styled from 'styled-components'

import Background from '../../Assets/Blog.png'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFBF3;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:867px) {
        flex-direction: column;
        height: auto;
    }
`

// Image div

export const ImageDiv = styled.div`
    width: 470px;
    height: 500px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    margin-left: 30px;

    @media (max-width:1088px) {
        width: 330px;
        height: 330px;
    }

    @media (max-width:950px) {
        width: 240px;
    }

    @media (max-width:867px) {
        margin: 30px 0;
        width: 300px;
        height: 300px;
    }

    @media (max-width:550px) {
        width: 90%;
        height: 400px;
    }
`

// Text div

export const TextField = styled.div`
    width: 537px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 30px;

    @media (max-width:867px) {
        width: 100%;
        max-width: 537px;
        align-items: center;
        margin-right: 0;
        margin: 30px 0;
    }
`

export const MiniTitle = styled.h3`
    font-weight: 600;
    font-size: 16.625px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #F4B41B;
    background: #FFF2D5;
    border-radius: 6px;
    padding: 11px 21px;
    margin-bottom: 20px;

    @media (max-width:1020px) {
        font-size: 13px;
        padding: 8px 18px;
    }
`

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
    color: #535353;
    margin-bottom: 30px;

    @media (max-width:1020px) {
        font-size: 28px;
        margin-bottom: 24px;
    }

    @media (max-width:867px) {
        text-align: center;
        padding: 0 20px;
        margin-bottom: 30px;
    }

    @media (max-width:425px) {
        font-size: 17px;
        margin: 0 20px 30px 20px;
    }
`

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #667085;
    margin-bottom: 20px;

    @media (max-width:1020px) {
        font-size: 13px;
    }

    @media (max-width:867px) {
        text-align: center;
        margin: 0 20px;
        margin-bottom: 20px;
    }

    @media (max-width:425px) {
        font-size: 12px;
        margin: 0 20px 20px 20px;
    }
`

export const Button = styled.button`
    width: 121px;
    height: 44px;
    background: #FCC647;
    border-radius: 6px;
    border: 1px solid #FCC647;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    line-height: 12px;
    color: #FFFFFF;
    transition: all ease 0.3s;
    margin-top: 20px;

    &:hover{
        background-color: rgb(0,0,0,0);
        color: #FCC647;
    }

    @media (max-width:1020px) {
        width: 90px;
        height: 40px;
        font-size: 13px;
    }
` 
