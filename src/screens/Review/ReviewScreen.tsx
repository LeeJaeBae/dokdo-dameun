import Review from '@/components/review/Review';
import {useMemo} from 'react';

export default function ReviewScreen(props: any) {
    const {params} = props.route;
    const review = useMemo(() => {
        return <Review {...props} />;
    }, [params]);
    return <>{review}</>;
}
