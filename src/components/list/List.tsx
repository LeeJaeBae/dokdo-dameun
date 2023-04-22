import BoxPaddingX from '@/atoms/containers/BoxPaddingX';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import HorizontalList from './HolizontalList';
import {useMemo} from 'react';
import database from '@/lib/database';
import ListItem from '@/components/list/item/ListItem';

const list = [
    {
        icon: require('@assets/icon/academy.png'),
        title: '간편하게 즐기는 건나물 3종 세트',
        subTitle: '울릉도에서만 특별한 건나물 할인',
        description:
            '울릉도산 건곤드레나물, 울릉도산 시래기 나물 그리고 울릉도산 건취나물',
        backgroundImage: require('@assets/img/gift_background.png'),
    },
    {
        icon: require('@assets/icon/academy.png'),
        title: '간편하게 즐기는 건나물 3종 세트',
        subTitle: '울릉도에서만 특별한 건나물 할인',
        description:
            '울릉도산 건곤드레나물, 울릉도산 시래기 나물 그리고 울릉도산 건취나물',
        backgroundImage: require('@assets/img/gift_background.png'),
    },
    {
        icon: require('@assets/icon/academy.png'),
        title: '간편하게 즐기는 건나물 3종 세트',
        subTitle: '울릉도에서만 특별한 건나물 할인',
        description:
            '울릉도산 건곤드레나물, 울릉도산 시래기 나물 그리고 울릉도산 건취나물',
        backgroundImage: require('@assets/img/gift_background.png'),
    },
];

export default function List(props: any) {
    const navigation = useNavigation<any>();

    const title = useMemo(() => {
        return props.route.params.title;
    }, [props.route]);

    const headerImage = useMemo(() => {
        if (title === '관광명소')
            return require('@assets/header/attraction.png');
        return require('@assets/header/gifts.png');
    }, [props.route]);

    const data = useMemo(() => {
        if (title === '관광명소') return database.attractions;
        if (title === '기념품') return database.gifts;
        return database.attractions;
    }, [title]);

    return (
        <ScrollView
            style={{
                height: '100%',
            }}>
            <Background source={headerImage} />
            <BoxPaddingX>
                {title === '관광명소' &&
                    data.map((item, index) => (
                        <HorizontalList key={item.category} item={item} />
                    ))}
                {title === '기념품' &&
                    data.map((item, index) => {
                        return (
                            <ListItem
                                index={index}
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                backgroundImage={item.backgroundImage}
                                onPress={() => {
                                    navigation.navigate('List', {
                                        title: item.category,
                                        items: item.items,
                                        category: item.category,
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
