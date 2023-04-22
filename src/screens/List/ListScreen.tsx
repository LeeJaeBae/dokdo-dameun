import {useMemo} from 'react';
import ListWithoutHeader from '@/components/list/ListWithoutHeader';

export default function ListScreen(props: any) {
    const {params} = props.route;
    const list = useMemo(() => {
        return <ListWithoutHeader {...props} />;
    }, [params]);
    return <>{list}</>;
}
