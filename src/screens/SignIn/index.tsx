import { Controller } from "react-hook-form";

import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useSignIn } from "./useSignIn";

import { Container, Content, Fields, SubmitContent, Title } from "./styles";

export function SignIn() {
    const {
        isSignIng,
        passwordInputRef,
        control,
        errors,
        handleSignIn,
        hasErrorInForm
    } = useSignIn();

    return (
        <Container>
            <Content>
                <Title>
                    <Text size={18}>Bem-vindo(a) ao</Text>
                    <Text size={32} weight={600}>
                        WAITER <Text size={32}>APP</Text>
                    </Text>
                </Title>

                <Fields>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="E-mail"
                                placeholder="Seu e-mail de acesso"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                errorMessage={errors.email?.message}
                                cursorColor={'#D73035'}
                                returnKeyType="next"
                                onSubmitEditing={() => passwordInputRef.current?.focus()}
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                ref={passwordInputRef}
                                label="Senha"
                                secureTextEntry
                                placeholder="Sua senha de acesso"
                                onChangeText={onChange}
                                value={value}
                                cursorColor={'#D73035'}
                                autoCapitalize="none"
                                errorMessage={errors.password?.message}
                                returnKeyType="done"
                                onSubmitEditing={handleSignIn}
                            />
                        )}
                    />
                </Fields>

                <SubmitContent>
                    <Button
                        onPress={handleSignIn}
                        disabled={hasErrorInForm || isSignIng}
                    >
                        Fazer login
                    </Button>
                </SubmitContent>
            </Content>
        </Container>
    );
}