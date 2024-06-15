import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;