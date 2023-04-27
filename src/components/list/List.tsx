import BoxPaddingX from '@/atoms/containers/BoxPaddingX';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import HorizontalList from './HolizontalList';
import {useMemo} from 'react';
import ListItem from '@/components/list/item/ListItem';
import {useCategory} from '@/lib/context/CategoryContext';

export default function List(props: any) {
    const navigation = props.navigation;
    const {selectedCategory} = useCategory();

    const data = useMemo(() => {
        if (
            selectedCategory.subCategory &&
            selectedCategory.subCategory.length > 0
        ) {
            return selectedCategory.subCategory || [];
        } else {
            return selectedCategory.items || [];
        }
        // return selectedCategory.subCategories;
    }, [selectedCategory]);

    const title = useMemo(() => {
        return props.route.params.title;
    }, [props.route]);

    const headerImage = useMemo(() => {
        if (title === '관광명소')
            return require('@assets/header/attraction.png');
        return require('@assets/header/gifts.png');
    }, [props.route]);

    return (
        <ScrollView
            style={{
                height: '100%',
            }}>
            <Background source={headerImage} />
            <BoxPaddingX>
                {title === '관광명소' &&
                    data.map((item, index) => (
                        <HorizontalList key={item.id} item={item} {...props} />
                    ))}
                {title === '기념품' &&
                    data.map((item, index) => {
                        return (
                            <ListItem
                                index={index}
                                key={index}
                                item={item}
                                onPress={() => {
                                    navigation.navigate('List', {
                                        title: item.name.replace(' ', ''),
                                        items: item.items,
                                        category: item.category,
                                        id: item.id,
                                    });
                                }}
                            />
                        );
                    })}
            </BoxPaddingX>
        </ScrollView>
    );
}

const Background = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    width: 100%;
    height: ${props => props.theme.scale.widthPercent(120)}px;
    display: flex;
`;
