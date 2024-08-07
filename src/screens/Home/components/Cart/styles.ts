import styled from 'styled-components/native';

export const Item = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 8px 0;
`;

export const ProductContainer = styled.View`
    flex-direction: row;
`;

export const Image = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 6px;
`;

export const QuantityContainer = styled.View`
    min-width: 20px;
    margin-left: 12px;
`;

export const ProductDetails = styled.View``;

export const Actions = styled.View`
    flex-direction: row;
`;

export const Summary = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    padding: 0px 24px;
`;

export const TotalContainer = styled.View`
    flex: 1;
    margin-right: 32px;
`;
