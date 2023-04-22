import List from '@/components/list/List';
import ListWithoutHeader from '@/components/list/ListWithoutHeader';
import TileList from '@/components/list/TileList';
import {useMemo} from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import CafeCategory from '@/components/categories/cafe/cafeCategory';

export default function CategoryScreen(props: any) {
    const {params} = props.route;
    const category = useMemo(() => {
        if (params.category === 'tile') {
            return <TileList {...props} />;
        } else if (params.category === 'no-header') {
            return <ListWithoutHeader {...props} />;
        } else if (params.category === 'cafe') {
            return <CafeCategory {...props} />;
        } else {
            return <List {...props} />;
        }
    }, [params]);
    return <View style={tailwind`bg-white`}>{category}</View>;
}
