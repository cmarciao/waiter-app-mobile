import { Modal, Pressable } from "react-native";
import { Text } from "../../../../components/Text";
import { Content, Overlay, Header, Form } from "./styles";
import { CloseIcon } from "../../../../components/Icons/CloseIcon";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { useOrder } from "../../../../hooks/useOrder";
import { useState } from "react";

type AddTableModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function AddTableModal({ isOpen, onClose }: AddTableModalProps) {
    const { updateTable } = useOrder();
    const [tableValue, setTableValue] = useState('');

    function handleSaveTable() {
        updateTable(tableValue);
        setTableValue('');
        onClose();
    }

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
                            value={tableValue}
                            onChangeText={setTableValue}
                        />

                        <Button disabled={!tableValue} onPress={handleSaveTable}>
                            Save
                        </Button>
                    </Form>
                </Content>
            </Overlay>
        </Modal>
    )
}
