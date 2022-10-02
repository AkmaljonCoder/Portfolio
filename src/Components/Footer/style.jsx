import styled from 'styled-components'
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

// social media icons

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Wrapper = styled.div`
    width: 100%;
    height: 542px;
    background-color: #232233;
    display: flex;
    justify-content: center;
    margin-top: 250px;

    @media (max-width:867px) {
        height: auto;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

// top div

export const TopDiv = styled.div`
    width: calc(100% - 60px);
    height: 230px;
    border-radius: 30px;
    margin-top: -115px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 10px 100px rgba(0, 0, 0, 0.24));

    @media (max-width:1024px) {
        height: 180px;
    }

    @media (max-width:867px) {
        margin-bottom: 100px;
    }

    @media (max-width:805px) {
        flex-direction: column;
        justify-content: space-around;
        height: 230px;
    }
`

export const InfoDiv = styled.div`
    display: flex;
    align-items: center;

    div{
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FEB918;
        border-radius: 50%;
        margin-right: 18px;
    }

    h2{
        font-weight: 600;
        font-size: 28px;
        line-height: 38px;
        text-transform: lowercase;
        color: #232233;
    }

    @media (max-width:1024px) {
        height: 180px;

        div{
            width: 70px;
            height: 70px;
        }
        
        h2{
            font-size: 23px;
        }
    }

    @media (max-width:805px) {
        width: 350px;
    }

    @media (max-width:485px) {
        width: 90%;
        div{
            width: 50px;
            height: 50px;
        }
        h2{
            font-size: 18px;
        }
    }

    @media (max-width:375px) {
        width: 100%;
        div{
            height: 40px;
            width: 40px;
            margin-left: 15px;
        }
        h2{
            font-size: 15px;
        }
    }
`

export const TopBorderDiv = styled.div`
    width: 4px;
    height: 100px;
    background-color: #E6E6E6;
    border-radius: 5px;
    margin: 0 80px;

    @media (max-width:880px) {
        margin: 0 40px;
    }

    @media (max-width:805px) {
        width: 80%;
        height: 4px;
    }

    @media (max-width:485px) {
        width: 90%;
    }
`

export const Mail = styled(MailIcon)`
    width: 36px !important;
    height: 36px !important;
    object-fit: contain !important;
    color: white !important;
    @media (max-width:1024px){
        width: 28px !important;
        height: 28px !important;
    }
`

export const Phone = styled(PhoneIcon)`
    width: 36px !important;
    height: 36px !important;
    object-fit: contain !important;
    color: white !important;
    @media (max-width:1024px){
        width: 28px !important;
        height: 28px !important;
    }
`

// bottom div

export const BottomDiv = styled.div`
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
`

export const BottomMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 60px;
    
    @media (max-width:867px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width:425px) {
        align-items: flex-start;
    }
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 331px;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

    @media (max-width: 1000px){
        p{
            font-size: 10px;
        }
    }

    @media (max-width:867px) {
        align-items: center;
        text-align: center;
        margin-bottom: 50px;

        p{
            font-size: 14px;
        }
    }

    @media (max-width:425px) {
        align-items: flex-start;
        text-align: start;
    }
`

export const TitleLogo = styled.img`
    height: 25px;
    margin-bottom: 20px;

    @media (max-width: 1000px){
        height: 20px;
    }

    @media (max-width:867px) {
        height: 25px;
    }
`

export const LinkDiv = styled.div`
    display: flex;
    align-items: center;

    div{
        width: 2px;
        height: 30px;
        background-color:#FFFFFF;
        margin: 0 32px;
    }

    @media (max-width: 1000px){
        div{
            height: 25px;
            margin: 0 25px;
        }
    }
`

export const Facebook = styled(FacebookIcon)`
    width: 30px !important;
    height: 30px !important;
    object-fit: contain !important;
    color: white !important;
    cursor: pointer;
    transition: all ease 0.3s !important;
    &:hover{
        color: #FEB918 !important;
    }
    @media (max-width: 1000px){
        width: 24px !important;
        height: 24px !important;
    }
`

export const Instagram = styled(InstagramIcon)`
    width: 30px !important;
    height: 30px !important;
    object-fit: contain !important;
    color: white !important;
    cursor: pointer;
    transition: all ease 0.3s !important;
    &:hover{
        color: #FEB918 !important;
    }
    @media (max-width: 1000px){
        width: 24px !important;
        height: 24px !important;
    }
`

export const Twitter = styled(TwitterIcon)`
    width: 30px !important;
    height: 30px !important;
    object-fit: contain !important;
    color: white !important;
    cursor: pointer;
    transition: all ease 0.3s !important;
    &:hover{
        color: #FEB918 !important;
    }
    @media (max-width: 1000px){
        width: 24px !important;
        height: 24px !important;
    }
`

export const YouTube = styled(YouTubeIcon)`
    width: 30px !important;
    height: 30px !important;
    object-fit: contain !important;
    color: white !important;
    cursor: pointer;
    transition: all ease 0.3s !important;
    &:hover{
        color: #FEB918 !important;
    }
    @media (max-width: 1000px){
        width: 24px !important;
        height: 24px !important;
    }
`

export const NormalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 38px;
        color: #FFFFFF;
        margin-bottom: 11px;
    }

    .links{
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
    }

    @media (max-width: 1000px){
        h2{
            font-size: 20px;
        }
    }

    @media (max-width:867px) {
        align-items: center;
        margin-bottom: 50px;
        text-align: center;

        h2{
            font-size: 25px;
        }
    }

    @media (max-width:425px) {
        align-items: flex-start;
        text-align: start;
    }
`

export const NormalText = styled.h3`
    max-width: 315px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 12px;
    transition: all ease 0.3s;

    @media (max-width: 1000px){
        font-size: 13px;
    }

    @media (max-width:867px) {
        font-size: 16px;
    }
`

export const InputDiv = styled.div`
    width: auto;
    height: 50px;
    display: flex;
    background: #FFFFFF;
    border-radius: 4px;
    border: 2px solid #FFFFFF;
    align-items: center;
    margin-top: 25px;
    justify-content: space-between;

    input{
        width: 310px;
        height: 100%;
        border: none;
        background-color: rgb(0,0,0,0);
        outline: none;
        font-weight: 400;
        font-size: 16px;
        color: #6C6C72;
        line-height: 24px;
        padding: 0 15px;
    }

    div{
        width: 52px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FEB918;
        border-radius: 4px;
        cursor: pointer;

        transition: all ease 0.3s;

        :active{
            transform: scale(0.8);
        }
    }

    @media (max-width: 1000px){
        height: 45px;

        input{
            width: 250px;
        }
        div{
            width: 45px;
            height: calc(100% - 2px);
        }
    }

    @media (max-width:425px){
        width: 100%;

        input{
            width: 180px;
        }
    }
`

export const Send = styled(SendIcon)`    
    width: 24px !important;
    height: 24px !important;
    object-fit: contain !important;
    color: white !important;
`

export const BottomLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
    margin-bottom: 18px;
`

export const BottomText = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 18px;
`

