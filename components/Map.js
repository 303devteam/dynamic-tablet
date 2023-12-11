import  useCustomFonts  from '../assets/fonts/expo-fonts';
import Navigation from './navigation';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"

export default function Map({navigation}) {
    const [fontLoaded, setFontLoaded] = useState(false)
    useEffect(() => {
        useCustomFonts().then(() => {
          setFontLoaded(true)
        })
      })
  
      if (!fontLoaded) {
        return null
      }
    
    return(
        <>
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/dynamiclogo.png')}
                    style={styles.logo}
                />
                <Navigation navigation={navigation} />
                <View style={styles.rightSection}>
                    <View style={styles.sectionHead}>
                        <Image
                            source={require('../assets/images/poolTable2.png')}
                            style={{width: 40, height:40}}
                        />
                        <Text style={styles.sectionTitle}>MAP</Text>
                    </View>
                    <View style={styles.innerContainer}>

                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 40,
        backgroundColor: '#201E21',
        display: 'flex',
        flexDirection: 'row'
    },
    rightSection: {
        marginLeft: 20,
        width: '78%',
        height: '99%',
    },
    innerContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '90%',
        opacity: 0.9
    },
    logo: {
        position: 'absolute',
        left: 40,
        bottom: 10,
        width: 250,
        height: 300
    },
    sectionHead: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    sectionTitle: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        marginLeft: 15,
        color: 'white'
    }
})