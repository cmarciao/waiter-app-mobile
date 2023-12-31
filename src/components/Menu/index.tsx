import { useState } from 'react';
import { FlatList } from 'react-native';

import { formatCurrency } from '../../utils/formatCurrency';

import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';

import {
    ProductContainer,
    ProductImage,
    ProductDetails,
    Separator,
    AddToCartButton
} from './styles';

import { ProductModal } from '../ProductModal';
import { Product } from '../../types/Product';

interface MenuProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export function Menu({ products, onAddToCart }: MenuProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

    function handleOpenModal(product: Product) {
        setIsModalVisible(true);
        setSelectedProduct(product);
    }

    return (
        <>
            <ProductModal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                product={selectedProduct}
                onAddToCart={onAddToCart}
            />
            <FlatList
                data={products}
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                keyExtractor={(product) => product._id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                    <ProductContainer onPress={() => handleOpenModal(item)}>
                        <ProductImage
                            source={{
                                uri: `http://192.168.1.3:3001/uploads/${item.imagePath}`
                            }}
                        />

                        <ProductDetails>
                            <Text weight='600'>
                                {item.name}
                            </Text>
                            <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                                {item.description}
                            </Text>
                            <Text size={14} weight='600'>
                                {formatCurrency(item.price)}
                            </Text>
                        </ProductDetails>

                        <AddToCartButton onPress={() => onAddToCart(item)}>
                            <PlusCircle />
                        </AddToCartButton>
                    </ProductContainer>
                )}
            />
        </>
    );
}
