import List from '@/components/list/List';
import ListWithoutHeader from '@/components/list/ListWithoutHeader';
import TileList from '@/components/list/TileList';
import {useMemo} from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import CafeCategory from '@/components/categories/cafe/cafeCategory';
import SingleList from '@/components/list/SingleList';

export default function CategoryScreen(props: any) {
    const {params} = props.route;
    const category = useMemo(() => {
        if (params.category === 'subHorizontal') {
            return <List {...props} />;
        } else if (params.category === 'subVertical') {
            return <List {...props} />;
        } else if (params.category === 'subPromotion') {
            return <CafeCategory {...props} />;
        } else if (params.category === 'singleList') {
            return <SingleList {...props} />;
        } else if (params.category === 'flat') {
            return <ListWithoutHeader {...props} />;
        } else {
            return <TileList {...props} />;
        }
    }, [params]);
    return <View style={tailwind`bg-white`}>{category}</View>;
}
