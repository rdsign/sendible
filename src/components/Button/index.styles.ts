import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
    ${({
        theme: { colors, motions },
        color = 'transparent',
        backgroundColor = 'transparent',
        label,
    }) => css`
        align-items: center;
        background: ${colors[backgroundColor]};
        border-radius: 5rem;
        color: ${colors[color]};
        display: flex;
        font-size: 1.6rem;
        padding: 1.4rem 2.6rem;
        transition: all 1s ${motions.cubic};

        svg {
            fill: ${colors[color]};
            height: auto;
            margin-right: ${label && '1rem'};
            opacity: ${label ? 0.5 : 1};
            width: 1.8rem;
        }

        &:hover {
            transform: scale(1.1);
        }
    `}
`;
