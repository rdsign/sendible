import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme: { colors } }) => css`
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;

        h1 {
            font-size: 6.4rem;

            i {
                color: ${colors.secondary400};
                font-weight: 400;
            }
        }
    `}
`;
