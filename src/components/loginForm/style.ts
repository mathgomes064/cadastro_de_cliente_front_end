import styled from "styled-components";

export const LoginForms = styled.section`
width: 400px;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid #5CFD6A;

    h1{
        color: #5CFD6A;
        font-size: 20px;
    }

    .divForm{
        min-width: 330px;
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        /* background-color: gray; */
    }

    .divForm > .title{
        width: 90%;
        height: 40px;
        color: #5CFD6A;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .divForm > .divInput{
        display: flex;
        justify-content: start;
        width: 90%;
        height: 95px;
        background-color: transparent;
        border: 1px solid #5CFD6A;
        outline: 0;
        padding-left: 10px;
        color: #5CFD6A;

        ::placeholder{
            color: #5CFD6A;
        }
    }

    .divForm > .divInput > input{
        height: 80%;
        width: 90%;
        background-color: transparent;
        outline: 0;
        border: none;

        ::placeholder{
            color: #5CFD6A;
        }
    }

    .divForm > input{
        width: 90%;
        height: 90px;
        background-color: transparent;
        border: 1px solid #5CFD6A;
        outline: 0;
        padding-left: 10px;

        ::placeholder{
            color: #5CFD6A;
        }
    }

    .divForm > span{
        color: red;
        width: 93%;
        font-size: 12px;
    }

    .divForm > .button{
        width: 120px;
        height: 80px;
        border-radius: 0px;
        border: 1px solid #5CFD6A;
        color: #5CFD6A;
        background-color: transparent;
        position: relative;
        cursor: pointer;

        &:before{
            content: "";
            position: absolute;
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
            background-color: #5CFD6A;
            z-index: -1;
            transition: .7s ease;
        }
    }

    .divForm > .inButton{
        &:before{
            width: 0;
            height: 100%;
        }

        &:hover{
            color: black;
            &:before{
                width: 100%;
            }
        }
    }

    .toRegister{
        color: #5CFD6A;
        text-decoration: none;
        position: relative;
        height: 20px;

        ::after{
            content: " ";
            width: 0%;
            height: 2px;
            background-color: #5CFD6A;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.5s ease-in-out;
        }

        :hover::after{
            width: 100%
        }
    }
`