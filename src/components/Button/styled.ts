import styled from "styled-components/native";

export const Container = styled.Pressable`
    padding: 18px 0;
    border-radius: 8px;
    align-items: center;
    background-color: ${({ disabled }) => disabled ? '#999': '#D73035'};
`;