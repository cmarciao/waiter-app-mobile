import styled from "styled-components/native";

type ContainerProps = {
    isSelected: boolean;
}

export const Container = styled.Pressable<ContainerProps>`
    align-items: center;
    gap: 8px;
    margin-right: 24px;
    opacity: ${({ isSelected }) => isSelected ? 1 : 0.5};
`;

export const Icon = styled.View`
    padding: 14px;
    background-color: #FFF;
    border-radius: 9999px;
    elevation: 1;
    shadowColor: #333333;
`;
