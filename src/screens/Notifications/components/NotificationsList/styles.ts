import styled from "styled-components/native";
import { Text } from "@components/Text";

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