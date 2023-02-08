import styled from "styled-components";

export const Headers = styled.header`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #5CFD6A;
color: #5CFD6A;

    .innerDiv{
        width: 95%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .innerDiv > .userName {
        min-width: 20%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .innerDiv > .buttons {
        min-width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .innerDiv > .buttons > .biggerButtons {
        width: 120px;
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
            background-color: #5CFD6A;
            z-index: -1;
            transition: .7s ease;
        }
    }

    .innerDiv > .buttons > .biggerButtons1{
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

    .innerDiv > .buttons > .smallerButton {
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

    .innerDiv > .buttons > .smallerButton2{
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
