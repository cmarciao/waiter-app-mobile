import styled from "styled-components/native";

export const Overlay = styled.View`
    flex: 1;
    padding-top: 96px;
    background-color: #0006;
`;

export const Content = styled.View`
    flex: 1;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background-color: #FFF;
    z-index: 100;
`;

export const CloseButton = styled.Pressable`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1;
`;

export const Description = styled.View`
    flex: 1;
    margin: 32px 24px 0;
    gap: 16;
`;

export const Ingredients = styled.View`
    flex: 1;
    margin-top: 16;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 16px;
`;
