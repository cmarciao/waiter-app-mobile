import { Modal, Pressable } from "react-native";

import { Text } from "../../../../components/Text";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { CloseIcon } from "../../../../components/Icons/CloseIcon";

import { useAddTableModal } from "./useAddTableModal";
import { Content, Overlay, Header, Form } from "./styles";

type AddTableModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function AddTableModal({ isOpen, onClose }: AddTableModalProps) {
    const {
        fieldTableValue,
        updateFieldTableValue,
        handleSaveTable
    } = useAddTableModal(onClose);

    return (
        <Modal
            visible={isOpen}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Overlay>
                <Content>
                    <Header>
                        <Text size={18} weight='600'>Modal</Text>
                        <Pressable
                            onPress={onClose}
                            hitSlop={8}
                        >
                            <CloseIcon />
                        </Pressable>
                    </Header>

                    <Form>
                        <Input
                            placeholder="Input the table number"
                            value={fieldTableValue}
                            onChangeText={updateFieldTableValue}
                        />

                        <Button disabled={!fieldTableValue} onPress={handleSaveTable}>
                            Save
                        </Button>
                    </Form>
                </Content>
            </Overlay>
        </Modal>
    )
}
