import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 16px;
    margin-bottom: 16px;
`;

export const Content = styled.View`
    flex: 1;
    gap: 4px;
`;

export const Description = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
`;

export const NewNotificationIcon = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: #D73035;
`;