import styled, { css } from 'styled-components';
import { Button } from 'components';

interface ContainerProps {
    isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
    ${({ theme: { motions, zIndexes }, isVisible }) => css`
        align-items: center;
        backdrop-filter: blur(3rem);
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: fixed;
        top: -101%;
        transition: all 1s ${motions.cubic};
        visibility: hidden;
        width: 100%;
        z-index: ${zIndexes.topPriority};

        ${isVisible &&
        css`
            top: 0;
            visibility: visible;
        `}
    `}
`;

export const Content = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices },
            colors,
        },
    }) => css`
        background: ${colors.white};
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        padding: 6rem 6rem 4rem;
        position: relative;
        width: 100%;

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            margin: 0;
            min-width: 100vw;
            padding: 3rem 0 0;
        }
    `}
`;

export const Editor = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices, mdDevices },
            colors,
        },
    }) => css`
        width: 94%;

        textarea {
            border: 0;
            color: ${colors.gray800};
            font-size: 2rem;
            height: 11rem;
            line-height: 1.66em;
            margin-bottom: 4rem;
            resize: none;
            width: 100%;

            &::placeholder {
                color: ${colors.gray200};
            }
        }

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            margin: 0 auto;
            width: 85%;

            textarea {
                font-size: 1.8rem;
                height: 25rem;
            }
        }

        @media all and (${mdDevices.min}) and (${mdDevices.max}) {
            width: 90%;

            textarea {
                height: 21rem;
            }
        }
    `}
`;

export const ImageHolder = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices },
        },
    }) => css`
        border-radius: 0.8rem;
        height: 15rem;
        overflow: hidden;
        width: 40rem;

        img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            height: 16vh;
            width: 100%;
        }
    `}
`;

export const Divider = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices },
            colors,
        },
    }) => css`
        background: ${colors.gray100};
        height: 1px;
        margin: 6rem 0 4rem;
        margin-left: -6rem;
        width: calc(100% + 12rem);

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            margin-bottom: 3rem;
            margin-top: 3rem;
        }
    `}
`;

export const Actions = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices },
        },
    }) => css`
        align-items: center;
        display: flex;
        justify-content: space-between;

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            bottom: 0;
            flex-direction: column;
            left: 0;
            width: 100%;

            button {
                border-radius: 0;
                font-size: 2rem;
                justify-content: center;
                margin-top: 2rem;
                padding: 3rem 0;
                width: 100%;
            }
        }
    `}
`;

export const Schedule = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices },
        },
    }) => css`
        align-items: center;
        display: flex;

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            justify-content: space-between;
            margin: 0 auto;
            width: 85%;
        }
    `}
`;

export const ScheduleItem = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices },
            colors,
        },
    }) => css`
        align-items: center;
        display: flex;
        margin-right: 6rem;

        svg {
            fill: ${colors.primary400};
            width: 3.5rem;
        }

        input {
            color: ${colors.primary400};
            font-size: 1.6rem;
            font-weight: 600;
            margin-left: 1rem;
            text-decoration: underline;
            width: 10rem;
        }

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            margin-right: 0;

            input {
                font-size: 1.8rem;
            }

            #date {
                width: 11.2rem;
            }

            #time {
                width: 5.2rem;
            }
        }
    `}
`;

export const InputWrapper = styled.div`
    cursor: pointer;
    overflow: hidden;
    position: relative;

    input[type='file'] {
        cursor: pointer;
        height: 100%;
        left: 0;
        margin: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

export const CloseButton = styled(Button)`
    ${({
        theme: {
            breakpoints: { smDevices },
        },
    }) => css`
        padding: 3rem;
        position: absolute;
        right: 3rem;
        top: 3rem;

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            right: 0;
            top: -5.5rem;

            svg {
                fill: white;
            }
        }
    `}
`;

export const Overlay = styled.div`
    ${({ theme: { colors, zIndexes } }) => css`
        background: ${colors.gray800};
        cursor: pointer;
        height: 100%;
        left: 0;
        opacity: 0.9;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: ${zIndexes.bellow};
    `}
`;
