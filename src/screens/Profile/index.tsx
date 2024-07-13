import { Controller } from "react-hook-form";

import { Text } from "@components/Text";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useProfile } from "./useProfile";

import { Container, Fields } from "./styles";

export function Profile() {
    const {
        control,
        errors,
        emailInputRef,
        passwordInputRef,
        confirmPasswordInputRef,
        isUpdatingProfile,
        handleSaveProfile
    } = useProfile();

    return (
        <Container>
            <Text weight={600} size={24}>
                Meu Perfil
            </Text>

            <Fields>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Name"
                            placeholder="Seu nome na conta"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.name?.message}
                            cursorColor={'#D73035'}
                            returnKeyType="next"
                            onSubmitEditing={() => emailInputRef.current?.focus()}
                        />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            ref={emailInputRef}
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
                            returnKeyType="next"
                            onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
                        />
                    )}
                />

                <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            ref={confirmPasswordInputRef}
                            label="Confirme sua senha"
                            secureTextEntry
                            placeholder="Confirme sua senha de acesso"
                            onChangeText={onChange}
                            value={value}
                            cursorColor={'#D73035'}
                            autoCapitalize="none"
                            errorMessage={errors.confirmPassword?.message}
                            returnKeyType="done"
                            onSubmitEditing={handleSaveProfile}
                        />
                    )}
                />

                <Button
                    style={{ marginTop: 16 }}
                    onPress={handleSaveProfile}
                    disabled={isUpdatingProfile}
                >
                    Salvar alterações
                </Button>
            </Fields>
        </Container>
    )
}