import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({
        theme: {
            breakpoints: { smDevices },
            colors,
        },
    }) => css`
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

        @media all and (${smDevices.min}) and (${smDevices.max}) {
            h1 {
                font-size: 4.2rem;
                line-height: 0.7em;
                max-width: 60%;

                i {
                    line-height: 0.7em;
                }
            }

            button {
                font-size: 0;
                padding: 2rem;

                svg {
                    opacity: 1;
                    margin: 0;
                }
            }
        }
    `}
`;
