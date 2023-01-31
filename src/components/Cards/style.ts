import styled from "styled-components";

export const ContactCards = styled.section`
margin-top: 20px;
margin-bottom: 20px;
width: 100%;
min-height: 500px;
display: flex;
justify-content: center;
align-items: center;

    .container{
        width: 95%;
        height:100%;
        gap: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .card{
        border: 1px solid #5CFD6A;
        color: #5CFD6A;
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .container > .card > .smallerButton1 {
        width: 80px;
        height: 40px;
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
            background-color: yellow;
            z-index: -1;
            transition: .7s ease;
        }
    }

    .container > .card > .smallerButton2{
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

    .container > .card > .smallerButton3 {
        width: 80px;
        height: 40px;
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
            background-color: red;
            z-index: -1;
            transition: .7s ease;
        }
    }

    .container > .card > .smallerButton4{
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
`