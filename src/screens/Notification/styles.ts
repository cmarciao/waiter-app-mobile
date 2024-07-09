import styled from "styled-components/native";
import { Text } from "../../components/Text";

export const Container = styled.View`
    flex: 1;
    padding: 20px 24px;
    background-color: #FFF;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const EmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    gap: 24px;
`;

export const EmptyText = styled(Text)`
    max-width: 198px;
    text-align: center;
`;