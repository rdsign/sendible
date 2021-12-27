import styled, { css } from 'styled-components';
import { Button } from 'components';

interface ContainerProps {
    isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
    ${({ theme: { colors, motions, shadows, zIndexes }, isVisible }) => css`
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
    ${({ theme: { colors, motions, shadows } }) => css`
        background: ${colors.white};
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        padding: 6rem 6rem 4rem;
        position: relative;
        width: 100%;
    `}
`;

export const Editor = styled.div`
    ${({ theme: { colors, motions, shadows } }) => css`
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
    `}
`;

export const ImageHolder = styled.div`
    ${({ theme: { colors, motions, shadows } }) => css`
        border-radius: 0.8rem;
        height: 15rem;
        overflow: hidden;
        width: 40rem;

        img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    `}
`;

export const Divider = styled.div`
    ${({ theme: { colors, motions, shadows } }) => css`
        background: ${colors.gray100};
        height: 1px;
        margin: 6rem 0 4rem;
        margin-left: -6rem;
        width: calc(100% + 12rem);
    `}
`;

export const Actions = styled.div`
    ${({ theme: { colors, motions, shadows } }) => css`
        align-items: center;
        display: flex;
        justify-content: space-between;
    `}
`;

export const Schedule = styled.div`
    ${({ theme: { colors, motions, shadows } }) => css`
        align-items: center;
        display: flex;
    `}
`;

export const ScheduleItem = styled.div`
    ${({ theme: { colors, motions, shadows } }) => css`
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
    `}
`;

export const InputWrapper = styled.div`
    ${({ theme: { colors, motions, shadows } }) => css`
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
    `}
`;

export const CloseButton = styled(Button)`
    ${({ theme: { colors, motions, shadows } }) => css`
        padding: 3rem;
        position: absolute;
        right: 3rem;
        top: 3rem;
    `}
`;

export const Overlay = styled.div`
    ${({ theme: { colors, motions, shadows, zIndexes } }) => css`
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
