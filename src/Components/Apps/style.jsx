import styled from 'styled-components'

import Background from '../../Assets/Phone.png'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:867px) {
        flex-direction: column-reverse;
        justify-content: center;
        height: auto;
    }
`

export const TextField = styled.div`
    max-width: 501px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;

    @media (max-width:867px) {
        width: 100%;
        margin-left: 0;
        margin-bottom: 30px;
        align-items: center;
    }
`

export const Title = styled.h1`
    max-width: 418px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
    color: #3C3C3C;
    margin-bottom: 30px;

    @media (max-width:1024px) {
        font-size: 30px;
    }

    @media (max-width:867px) {
        text-align: center;
        margin: 0 30px;
        margin-bottom: 30px;
    }

    @media (max-width:425px) {
        font-size: 23px;
    }
`

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #667085;
    margin-bottom: 35px;

    @media (max-width:1024px) {
        font-size: 14px;
    }

    @media (max-width:867px) {
        text-align: center;
        margin: 0 30px 35px 30px;
    }

    @media (max-width:425px) {
        font-size: 12px;
    }
`

export const ButtonWr = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;

    img{
        width: 140px;
        height: 46px;
        object-fit: contain;
        cursor: pointer;
        margin-right: 23px;
        transition: all ease 0.3s;

        &:active{
            opacity: 0.7;
        }
    }

    @media (max-width:1024px) {
        img{
            width: 105px;
            height: 44px;
        }
    }

    @media (max-width:867px) {
        justify-content: center;
        img{
            margin-right: 0;
            margin: 0 10px;
        }
    }
`

// Image div

export const ImageWr = styled.div`
    width: 575px;
    height: 575px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    margin-right: 30px;

    @media (max-width:1024px) {
        width: 400px;
        height: 400px;
    }

    @media (max-width:867px) {
        margin: 30px 0 40px 0;
    }

    @media (max-width:500px) {
        width: 250px;
        height: 300px;
    }
`

