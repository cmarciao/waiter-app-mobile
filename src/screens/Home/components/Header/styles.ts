import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px 24px 0;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Table = styled.View`
    width: 100%;
    padding: 16px;
    border: 1px solid #0001;
    border-radius: 8px;
    margin-top: 22px;
`;

export const Title = styled.View`
    gap: 4px;
`;

export const ActionsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 24px;
`;

export const ActionButton = styled.Pressable`
    padding: 10px;
    background-color: #FFF;
    border-radius: 9999px;
    elevation:1;
    shadowColor: #333333;
    position: relative;
    `;

export const NewNotificationIcon = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: #D73035;
    position: absolute;
    top: 2px;
    right: 2px;
`;