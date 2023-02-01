import styled from "styled-components";

export const Container = styled.div`
width: 400px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid #5CFD6A;
background-color: black;

    .mainTitle > h1{
        color: #5CFD6A;
        font-size: 20px;
    }

    .divForm{
        color: #5CFD6A;
        width: 100%;
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .divForm > .title{
        width: 88%;
        height: 20px;
        color: #5CFD6A;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .divForm > input{
        width: 85%;
        height: 40px;
        background-color: transparent;
        border: 1px solid #5CFD6A;
        outline: 0;
        padding-left: 10px;

        ::placeholder{
            color: #5CFD6A;
        }
    }

    .divForm > .button{
        width: 120px;
        height: 40px;
        border-radius: 0px;
        border: 1px solid #5CFD6A;
        color: #5CFD6A;
        background-color: transparent;
        position: relative;
        cursor: pointer;

        :hover{
            color: yellow;
            border: 1px solid yellow;
            transition: .3s ease;
        }
    }

`;

export const ModalButton = styled.button`
width: 120px;
height: 40px;
border-radius: 0px;
border: 1px solid #5CFD6A;
color: #5CFD6A;
background-color: transparent;
position: relative;
cursor: pointer;
outline: 0;

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
`;