import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';

const InputField = ({visible, onSave}) => {
    const [name, setName] = useState('')

    if(!visible){
        return null
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Input
                containerStyle={{backgroundColor: 'white', width: 200, height: 40, marginBottom: 20}}
                testID='addRestaurantTextField'
                value={name}
                placeholder='Add Name'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                onChangeText={(newText) => setName(newText)}
            />
            <Button 
                testID='saveRestaurantButton' 
                title='Save Restaurant' 
                onPress={() => {
                    onSave(name)
                }}
            />
        </View>
        
    )
};

export default InputField;