import styled, { css } from 'styled-components';

export const Section = styled.section`
    ${({ theme: { colors } }) => css`
        padding-bottom: 15rem;
    `}
`;

export const PostCardList = styled.div`
    ${({ theme: { colors } }) => css`
        display: flex;
        flex-flow: row wrap;
        gap: 6rem 5%;
    `}
`;
