import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Fields, Form, Title } from "./styles";

export function SignIn() {
    return (
        <Container>
            <Title>
                <Text>Bem-vindo(a) ao</Text>
                <Text size={24} weight={600}>
                    WAITER
                    <Text size={24}>APP</Text>
                </Text>
            </Title>

            <Form>
                <Fields>
                    <Input
                        label="E-mail"
                        placeholder="Seu e-mail de acesso"
                        />

                    <Input
                        label="Senha"
                        placeholder="Sua senha de acesso"
                    />
                </Fields>

                <Button>
                    Fazer login
                </Button>
            </Form>
        </Container>
    )
}