//where we can select category (italian, german, ..)
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons , Item } from 'react-navigation-header-buttons';
import { CATEGORIES } from '../data/dummy-data';
import MyHeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {


    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ ...styles.touchop, backgroundColor: item.color }}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName: 'Meals',
                                params: {
                                    categoryIDbta3y: item.id
                                }
                            })
                        }}>
                        <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>

                )}
                numColumns={2} />
        </View>

    )
}


CategoriesScreen.navigationOptions = navData =>{
    return{
    headerTitle: 'Meal Categories',
    headerLeft: ()=>
    (
        // <Text>Favorites</Text>
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>

            {/* <Text>Fav</Text> */}
            <Item
                title='Filters'
                iconName='navicon'
                // IconComponent={<Icon/>}
                onPress={() => {navData.navigation.toggleDrawer()}} />
        </HeaderButtons>
    )
}}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    touchop: {
        // padding: 10,
        flex: 1,  //important 3shan to make them look equal
        margin: 10,
        elevation: 7,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: 30,
        // overflow: 'hidden'
    },
    text: {
        textAlign: 'center',
        marginVertical: 50,
    }
})

export default CategoriesScreen;

