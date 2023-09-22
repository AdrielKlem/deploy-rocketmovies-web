import { styled } from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header"
    "subheader"
    "content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Subheader = styled.div`
    grid-area: subheader;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 124px;
`

export const Content = styled.div`
    grid-area: content;

    > .section {
        overflow-y: auto;
    }
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const NewNote = styled(Link)`
    border-radius: 8px;
    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`