import { Text } from "@/components/Text";
import styled from "styled-components/native";

export const Overlay = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: 96px;
    background-color: #0006;
`;

export const Content = styled.View`
    padding: 32px;
    border-radius: 8px;
    background-color: #FFF;
`;

export const Description = styled(Text)`
    margin-top: 32px;
    text-align: center;
`;

export const Footer = styled.View`
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    margin-top: 32px;
`;
