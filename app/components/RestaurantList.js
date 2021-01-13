import React from 'react'
import {View,Text} from 'react-native'
import styles from "../res/styles";

const RestaurantList = ({title}) => {
    return(
        <View>
            <Text style={styles.headerTitleRestaurantList}>
                {title}
            </Text>
        </View>
    )
}

export default RestaurantList