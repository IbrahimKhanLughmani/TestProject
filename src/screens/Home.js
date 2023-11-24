import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Platform } from 'react-native';
import InputField from '../components/InputField';
import { Button, ListItem } from 'react-native-elements';
import StatsModule from '../components/StatsModule';

const Home = () => {
    const [visible, setVisible] = useState(false)
    const [restaurants, setRestaurants] = useState([])

    const getStats = () => {
        if(Platform.OS === 'android'){
            StatsModule.checkForPermission((stats, error) => {
                if(error){
                    console.log(error)
                }
                else{
                    console.log(stats)
                }
            })
        }
        else{
            // do nothing
        }
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
            <Button 
                buttonStyle={{marginBottom: 20}} 
                title='Check Native Module' 
                onPress={getStats} 
            />
            {!visible ? <Button 
                testID='addRestaurantButton' 
                title='Add Restaurant' 
                onPress={() => {
                    setVisible(true)
                }} 
            /> : null}
            <InputField 
                visible={visible} 
                onSave={(newRestaurant) => {
                    setRestaurants([...restaurants, newRestaurant])
                    setVisible(false)
                }} 
            />
            <FlatList
                keyExtractor={item => item}
                data={restaurants}
                style={{height: 200, width: 200}}
                renderItem={({item}) => {
                    return(
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                }}
            />
        </View>
    )
};

export default Home;