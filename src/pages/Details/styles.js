import styled from "styled-components";

export const Container = styled.body`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    width: 100%;
    height: 100vh;

    > main {
        grid-area: content;
        overflow-y: scroll;

        padding: 64px 0;
    }

    
`

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE };
        }
    }
`

export const Content = styled.div`
    margin: 0 auto;
    
    
    display: flex;
    flex-direction: column;
    align-items: left;


    > header {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 16px;
        padding: 0 124px;

        > div {
            display: flex;
            align-items: center;
            gap: 8px;

            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    button {
        max-width: 550px;
        margin: 10px auto;
    }

    p {
        font-size: 16px;
        text-align: justify;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px; 
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
        
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
        background: lightgray 50% / cover no-repeat;
        }

    h1 {
        font-size: 36px;
        font-weight: 500;
    }

    .title {
        display: flex;
        gap: 16px;
        align-items: center;

        svg {
            width: 35px;
            height: 35px;
        }
    }

    .status {
        display: flex;
        align-items: center;
        gap: 16px;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    .tags {
        span {
            background-color: ${({ theme }) => theme.COLORS.PINK_500};
        }
    }
`