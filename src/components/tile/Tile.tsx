import {Text, View} from 'react-native';
import tailwind from 'twrnc';

export default function Tile({classes}: {classes: string}) {
    return (
        <View style={tailwind`${classes}`}>
            <Text>test</Text>
        </View>
    );
}
