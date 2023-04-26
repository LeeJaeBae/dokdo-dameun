import BoxPaddingX from '@/atoms/containers/BoxPaddingX';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import HorizontalList from './HolizontalList';
import {useEffect, useMemo, useState} from 'react';
import ListItem from '@/components/list/item/ListItem';
import api from '@/api/axios';
import {TextNormal} from '@/atoms/text';

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
    const navigation = props.navigation;
    const [category, setCategory] = useState<any>({});
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        api.get(`/category/${props.route.params.id}`).then(res => {
            if (res.data) {
                setCategory(res.data);

                if (res.data.subCategory && res.data.subCategory.length > 0) {
                    setData(res.data.subCategory);
                } else {
                    setData(res.data.items);
                }
            }
        });
    }, []);

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
                {data.length === 0 && (
                    <BoxPaddingX>
                        <TextNormal
                            style={{textAlign: 'center', marginTop: 20}}>
                            준비중입니다.
                        </TextNormal>
                    </BoxPaddingX>
                )}
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
