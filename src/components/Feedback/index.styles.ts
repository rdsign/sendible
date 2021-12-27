import styled, { css } from 'styled-components';

interface Props {
    isVisible: boolean;
}

export const Container = styled.div<Props>`
    ${({ theme: { colors, motions, shadows, zIndexes }, isVisible }) => css`
        background: ${colors.secondary400};
        border-radius: 0.8rem;
        color: ${colors.white};
        font-size: 1.6rem;
        left: 50%;
        line-height: 1.66em;
        padding: 2rem 3rem;
        position: fixed;
        top: -30rem;
        transform: translate(-50%, 0);
        transition: all 1s ${motions.cubic};
        visibility: hidden;
        z-index: ${zIndexes.topPriority};

        ${isVisible &&
        css`
            animation: appear 8s ease-in-out;
            animation-iteration-count: 1;
            visibility: visible;
        `}

        @keyframes appear {
            0% {
                top: -30rem;
            }
            8% {
                top: 10rem;
            }
            92% {
                top: 10rem;
            }
            100% {
                top: -30rem;
            }
        }
    `}
`;
