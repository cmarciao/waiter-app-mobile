import { Button } from "../Button";
import { EmptyIcon } from "../Icons/EmptyIcon";
import { EmptyContainer, EmptyText } from "./styles";

type EmptyInformationProps = {
    description: string;
    onTryAgain?: () => void;
}

export function EmptyInformation({ description, onTryAgain }: EmptyInformationProps) {
    return (
        <EmptyContainer>
            <EmptyIcon />

            <EmptyText weight='500'>
                {description}
            </EmptyText>

            {onTryAgain && (
                <Button onPress={onTryAgain}>
                    Tentar novamente
                </Button>
            )}
        </EmptyContainer>
    )
}