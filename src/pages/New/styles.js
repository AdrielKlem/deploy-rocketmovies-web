import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
    
    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        align-items: center;
        justify-content: left;
        flex-wrap: wrap;
        gap: 8px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        border-radius: 8px;
        padding: 16px;
    }
`

export const Form = styled.form`
    margin: 38px auto;
    
    > header {
        display: flex;
        align-items: left;
        justify-content: space-between;
        flex-direction: column;
        gap: 16px;
        padding: 0 124px;
        
        margin-bottom: 36px;

        > a {
            display: flex;
            align-items: center;
            gap: 8px;

            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > .buttons {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 64px;
        padding: 0 124px;

        > :first-child {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`

export const InputArea = styled.div`
    display: grid;
    grid-template-areas:
    "title note"
    "textarea textarea";

    gap: 16px;


    > #title {
        grid-area: title;
    }

    > #numberstar {
        grid-area: note;
    }

    > #textarea {
        grid-area: textarea;
    }
`