import React from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../../assests/data/feed';
import Post from '../../components/Post';

const DestinationSearchScreen = (props) => {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({item}) => <Post post={item} />}
            >
            </FlatList>
        </View>
    );
};

export default DestinationSearchScreen;