import { useState } from "react";
import { useOrder } from "@/hooks/useOrder";

export function useAddTableModal(onClose: () => void) {
    const { updateTable } = useOrder();
    const [fieldTableValue, setFieldTableValue] = useState('');

    function updateFieldTableValue(table: string) {
        setFieldTableValue(table);
    }

    function handleSaveTable() {
        updateTable(fieldTableValue);
        updateFieldTableValue('');
        onClose();
    }

    return {
        fieldTableValue,
        updateFieldTableValue,
        handleSaveTable
    };
}