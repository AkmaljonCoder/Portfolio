import styled from 'styled-components'
import Buttonn from '@mui/material/Button'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const TitleWr = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 48px;
        color: #3C3C3C;
        margin-bottom: 16px;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 27px;
        text-align: center;
        color: #667085;
        max-width: 465px;
    }

    @media (max-width:420px) {
        height:400px;
        h1{
            font-size: 30px;
        }
        p{
            font-size: 10px;
            padding: 0 20px;
        }
    }
`

export const CardsWr = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 273px;
    height: 340px;
    border: 0.698848px solid rgba(112, 112, 112, 0.2);
    border-radius: 10.4827px;
    transition: all ease 0.3s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 10px 45px 10px;

    &:hover{
        border: 1px solid #F9A755;
        box-shadow: 0px 30px 30px 13px rgba(198, 198, 198, 0.25);
    }

    #img-div{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 13px 0;

        img{
            width: 150px;
            height: 150px;
            object-fit: contain;
        }
    }

    #rating{
        margin-left: 20px;
        margin-bottom: 8px;
    }

    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #3C3C3C;
        margin-left: 20px;
        margin-bottom: 13px;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #667085;
        margin-right: 20px;
        margin-left: 20px;
        margin-bottom: 13px;
    }

    #bottom-panel{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3{
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            color: #3C3C3C;
            margin-left: 20px;
        }

        #buttons{
            display: flex;
            margin-right: 20px;

            .icons{
                width: 16px !important;
                height: 16px !important;
                object-fit: contain !important;
            }
        }
    }

    @media (max-width:425px) {
        width: 80%;
    }
`

export const Download = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F24D21;
    border-radius: 3.9022px;
    margin-right: 5px;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        opacity: 0.7;
    }
`

export const Share = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3C3C3C;
    border-radius: 3.9022px;
    margin-left: 5px;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        opacity: 0.7;
    }
`
