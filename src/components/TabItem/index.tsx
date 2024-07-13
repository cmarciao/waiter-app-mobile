import { useNavigation, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

import { Text } from "../Text";
import { IconProps } from "@/types/IconProps";
import { View } from "react-native";

type TabItemProps = {
    title: string;
    href: string;
    icon: (props: IconProps) => JSX.Element;
}

function getIconColor(isFocused: boolean) {
    return isFocused ? '#D73035' : '#666';
}

export function TabItem({ title, href, icon: Icon }: TabItemProps) {
    const { navigate, isFocused } = useNavigation();

    return (
        <Container>
            <Content onPress={() => navigate(href as never)}>
                <View>
                    <Icon
                        color={getIconColor(isFocused())}
                    />
                </View>

                <Text color={getIconColor(isFocused())} weight='500' >
                    {title}
                </Text>
            </Content>
        </Container>
    )
}

const Container = styled.Pressable`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Content = styled.Pressable`
    width: 100%;
    text-align: center;

    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;
