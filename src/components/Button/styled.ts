import styled, { css } from "styled-components/native";

type ContainerProps = {
    secondary?: boolean;
}

export const Container = styled.Pressable<ContainerProps>`
    ${({ secondary }) => secondary ? css`
            padding: 12px 0;
            opacity: ${({ disabled }) => disabled ? 0.5: 1};
        ` :
        css`
            padding: 18px 16px;
            border-radius: 8px;
            background-color: ${({ disabled }) => disabled ? '#999': '#D73035'};
        `
    }
    align-items: center;
`;
