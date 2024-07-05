import styled from "styled-components/native";

export const Overlay = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;

    background-color: #0007;
    padding: 0 24px;
`;

export const Content = styled.View`
    max-width: 583px;
    width: 100%;
    background-color: #FFF;
    padding: 24px;
    border-radius: 8px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Form = styled.View`
    margin-top: 32px;
    gap: 24px;
`;
