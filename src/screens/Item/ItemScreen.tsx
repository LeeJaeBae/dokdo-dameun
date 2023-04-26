import AttractionTitle from '@/components/detail/AttractionTitle';
import HotelDetail from '@/components/detail/HotelDetail';
import WaveDetail from '@/components/detail/WaveDetail';
import {useMemo} from 'react';

export default function ItemScreen(props: any) {
    const {detailType} = props.route.params;
    const detail = useMemo(() => {
        if (detailType && detailType === 'hotel') {
            return <HotelDetail {...props} />;
        } else if (detailType === 'attraction') {
            return <AttractionTitle />;
        } else {
            return <WaveDetail />;
        }
    }, [detailType]);
    return <>{detail}</>;
}
