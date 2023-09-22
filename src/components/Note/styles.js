import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK_500};

    border: none;
    border-radius: 10px;
    padding: 32px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        height: 64px;

        overflow: hidden;
        color:  ${({ theme }) => theme.COLORS.GRAY_300};
        text-overflow: ellipsis; 
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        text-align: justify;
    }

    > footer {
        width: 100%;
        display: flex;
    }
`