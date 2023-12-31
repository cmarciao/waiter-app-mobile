import { FlatList, Modal } from 'react-native';

import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Product } from '../../types/Product';

import {
    CloseButton,
    Image,
    Header,
    ModalBody,
    IngredientsContainer,
    Ingredient,
    FooterContainer,
    FooterContent,
    PriceContainer
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
    isVisible: boolean;
    onClose: () => void;
    product: null | Product;
    onAddToCart: (product: Product) => void;
}

export function ProductModal({ isVisible, onClose, product, onAddToCart }: ProductModalProps) {
    if(!product) {
        return null;
    }

    function handleAddModal() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onAddToCart(product!);
        onClose();
    }

    return(
        <Modal
            visible={isVisible}
            animationType='slide'
            presentationStyle='pageSheet'
            onRequestClose={onClose}
        >
            <Image
                source={{
                    uri: `http://192.168.1.3:3001/uploads/${product.imagePath}`
                }}
            >
                <CloseButton onPress={onClose}>
                    <Close />
                </CloseButton>
            </Image>

            <ModalBody>
                <Header>
                    <Text size={24} weight="600">{product.name}</Text>
                    <Text
                        color="#666"
                        style={{ marginTop: 8 }}
                    >
                        {product.description}
                    </Text>
                </Header>

                {product.ingredients.length > 0 && (
                    <IngredientsContainer>
                        <Text weight="600" color="#666">Ingredientes</Text>

                        <FlatList
                            data={product.ingredients}
                            keyExtractor={(ingredient) => ingredient._id}
                            showsVerticalScrollIndicator={false}
                            style={{ marginTop: 20 }}
                            renderItem={({ item }) => (
                                <Ingredient>
                                    <Text>{item.icon}</Text>
                                    <Text size={14} color="#666">{item.name}</Text>
                                </Ingredient>
                            )}
                        />

                    </IngredientsContainer>
                )}
            </ModalBody>

            <FooterContainer>
                <FooterContent>
                    <PriceContainer>
                        <Text color="#666">Preço</Text>
                        <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
                    </PriceContainer>

                    <Button onPress={handleAddModal}>
                        Adicionar ao pedido
                    </Button>
                </FooterContent>

            </FooterContainer>
        </Modal>
    );
}
