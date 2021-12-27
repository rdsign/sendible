import styled, { css } from 'styled-components';
import { Button } from 'components';

interface FixedButtonProps {
    isVisible: boolean;
}

export const Section = styled.section`
    padding-bottom: 15rem;
`;

export const PostCardList = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices, mdDevices },
        },
    }) => css`
        display: flex;
        flex-flow: row wrap;
        gap: 6rem 5%;

        @media all and (${smDevices.min}) and (${mdDevices.max}) {
            gap: 4rem 5%;
        }
    `}
`;

export const FixedButton = styled(Button)<FixedButtonProps>`
    ${({
        theme: {
            breakpoints: { laptops },
            zIndexes,
        },
        isVisible,
    }) => css`
        border-radius: 0;
        bottom: -10rem;
        font-size: 2rem;
        justify-content: center;
        left: 0;
        padding: 3rem 0;
        position: fixed;
        visibility: hidden;
        width: 100%;
        z-index: ${zIndexes.priority};

        &:hover {
            transform: none;
        }

        svg {
            margin-right: 2rem;
            width: 3rem;
        }

        ${isVisible &&
        css`
            bottom: 0;
            visibility: visible;
        `}

        @media all and (${laptops.min}) {
            display: none;
            visibility: hidden;
        }
    `}
`;
