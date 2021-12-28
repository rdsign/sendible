import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices, mdDevices },
            colors,
            shadows,
        },
    }) => css`
        background: ${colors.white};
        border-radius: 0.8rem;
        box-shadow: ${shadows.large};
        display: flex;
        flex-direction: column;
        gap: 2rem 0;
        height: 45rem;
        justify-content: space-between;
        overflow: hidden;
        padding: 4rem;
        position: relative;
        width: 30%;

        &:hover {
            .actions {
                opacity: 1;
                top: 0;
            }
            .bg {
                animation: spawn 2s ease-in-out 1;
                opacity: 1;
            }
        }

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            box-shadow: ${shadows.small};
            width: 100%;
        }

        @media all and (${mdDevices.min}) and (${mdDevices.max}) {
            box-shadow: ${shadows.small};
            width: 47.5%;
        }
    `}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 9;
    justify-content: space-between;

    p {
        display: -webkit-box;
        font-size: 1.6rem;
        line-height: 1.5em;
        overflow: hidden;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
    }
`;

export const ImageHolder = styled.div`
    border-radius: 0.8rem;
    height: 12rem;
    overflow: hidden;
    width: 100%;

    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`;

export const Schedule = styled.div`
    align-items: flex-end;
    display: flex;
    flex: 1;
`;

export const ScheduleItem = styled.div`
    ${({ theme: { colors } }) => css`
        align-items: center;
        display: flex;
        margin-right: 3rem;

        svg {
            fill: ${colors.primary400};
            height: auto;
            margin-right: 1rem;
            opacity: 0.5;
            width: 1.8rem;
        }

        p {
            color: ${colors.primary400};
            font-size: 1.6rem;
            font-weight: 600;
        }
    `}
`;

export const Actions = styled.div`
    ${({ theme: { motions } }) => css`
        height: 100%;
        left: 0;
        position: absolute;
        top: 101%;
        transition: all 1s ${motions.cubic};
        width: 100%;
    `}
`;

export const Row = styled.div`
    ${({ theme: { colors, zIndexes } }) => css`
        align-items: center;
        background: ${colors.secondary400};
        bottom: 0;
        display: flex;
        height: 9.5rem;
        left: 0;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        z-index: ${zIndexes.step};

        span {
            background: ${colors.white};
            height: 100%;
            opacity: 0.3;
            width: 1px;
        }

        button {
            flex: 1;
            font-size: 1.8rem;
            justify-content: center;

            svg {
                width: 2.4rem;
            }
        }
    `}
`;

export const Bg = styled.div`
    ${({ theme: { colors, motions } }) => css`
        background: ${colors.redGradient};
        top: 0;
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        transition: all 1s ${motions.cubic};
        user-select: none;
        width: 100%;

        @keyframes spawn {
            0% {
                opacity: 0;
            }
            10% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    `}
`;
