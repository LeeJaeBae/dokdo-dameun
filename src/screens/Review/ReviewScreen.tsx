import Review from '@/components/review/Review';
import {useMemo} from 'react';

export default function ReviewScreen(props: any) {
    // const {item} = props.route.params;
    const review = useMemo(() => {
        return <Review />;
    }, []);
    return <>{review}</>;
}
