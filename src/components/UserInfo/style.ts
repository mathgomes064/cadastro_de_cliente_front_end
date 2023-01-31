import styled from "styled-components";

export const UserInfos = styled.header`
width: 100%;
height: 90px;
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

    .innerDiv > .emailAndNumber {
        min-width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

`