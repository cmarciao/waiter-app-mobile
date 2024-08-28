import { Modal } from "react-native";

import { Text } from "@/components/Text";
import { Button } from "@/components/Button";

import { Content, Description, Footer, Overlay } from "./styles";

type LogoutModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSignOut: () => void;
}

export function SignOutModal({ isOpen, onClose, onSignOut }: LogoutModalProps) {
    return (
        <Modal
                visible={isOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={onClose}
            >
                <Overlay>
                    <Content>
                        <Text size={28} weight="600">Sair da conta?</Text>
                        <Description>Tem certeza que deseja sair da conta?</Description>

                        <Footer>
                            <Button
                                style={{ flex: 1 }}
                                secondary
                                onPress={onClose}
                                >
                                Cancelar
                            </Button>

                            <Button
                                style={{ flex: 1 }}
                                onPress={onSignOut}
                            >
                                Sair
                            </Button>
                        </Footer>
                    </Content>
                </Overlay>
            </Modal>
    )
}
