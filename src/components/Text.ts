import styled from "styled-components/native";

type TextProps = {
    size?: number;
    weight?: 400 | 500 | 600;
    opacity?: number;
    color?: string;
}

export const Text = styled.Text<TextProps>`
    font-size: ${({ size }) => `${size || 16}px`};
    color: ${({ color }) => color || '#333'};
    font-family: ${({ weight }) => `GeneralSans-${weight || 400}`};
    opacity: ${({ opacity }) => opacity || 1};
`;