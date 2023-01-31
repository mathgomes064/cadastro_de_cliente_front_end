import styled from "styled-components";

export const TittleSearchBar = styled.header`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
color: #5CFD6A;

    .innerDiv{
        width: 95%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .innerDiv > .searchBar {
       min-width: 30%;
       height: 100%;
       display: flex;
       justify-content: flex-end;
       align-items: center;
    }

    .innerDiv > .searchBar > div {
       min-width: 80%;
       height: 70%;
       display: flex;
       justify-content: space-between;
       align-items: center;
       border: 1px solid #5CFD6A;
       padding: 0px 10px 0 10px;
    }

    .innerDiv > .searchBar > div > .search{
        background-color: transparent;
        width: 80%;
        height: 80%;
        border: none;
        outline: 0;

        ::placeholder{
            color: #5CFD6A
        }
    }

    .innerDiv > .searchBar > div > .icon{
        width: 25px;
        height: 25px;
    }
`