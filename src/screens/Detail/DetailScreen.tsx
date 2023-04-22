import AttractionDetail from '@/components/detail/AttractionDetail';
import {useMemo} from 'react';

export default function DetailScreen(props: any) {
    const {detailType} = props.route.params;
    const detail = useMemo(() => {
        return <AttractionDetail {...props} transparent={false} />;
    }, [detailType]);
    return <>{detail}</>;
}
