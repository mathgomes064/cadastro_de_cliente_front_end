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
        height: 170px;
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

    .divForm > input{
        width: 90%;
        height: 60px;
        background-color: transparent;
        border: 1px solid #5CFD6A;
        outline: 0;
        padding-left: 10px;

        ::placeholder{
            color: #5CFD6A;
        }
        
    }

    a{
        color: #5CFD6A;
        text-decoration: none;
    }
`