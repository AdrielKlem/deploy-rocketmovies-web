import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > svg {
        fill: ${({ theme}) => theme.COLORS.PINK};

        width: 25px;
        height: 25px;
    }
`