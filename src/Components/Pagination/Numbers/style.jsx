import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;

    .pagi-button{
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        background-color: rgb(0,0,0,0);
        border: 1px solid #EAECED;
        margin: 0 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #667085;
        border-radius: 50%;
        @media (max-width:425px) {
            width: 30px;
            height: 30px;
            margin: 0 10px;
            font-size: 13px;
        }
    }

    .ext-button{
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color: rgb(0,0,0,0);
        border: 1px solid #EAECED;
        margin: 0 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #FEB918;
        border-radius: 50%;
        transition: all ease 0.6s;

        &:hover{
            color: white;
            background-color: #FEB918;
        }

        @media (max-width:425px) {
            width: 30px;
            height: 30px;
            margin: 0 10px;
            font-size: 13px;
        }
    }
`

