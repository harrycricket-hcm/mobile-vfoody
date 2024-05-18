import { SlidersHorizontal } from 'lucide-react-native';
import * as React from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import { Avatar, Button, IconButton, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constant';

const Header_Max_Height = 160;
const Header_Min_Height = 0;

export default function DynamicHeader({ animHeaderValue }) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
    // style={[
    //   styles.header,
    //   {
    //     height: animateHeaderHeight,
    //     backgroundColor: animateHeaderBackgroundColor,
    //     opacity: animateHeaderBackgroundColor,
    //     overflow: 'hidden'
    //   }
    //
    // ]}
    >
      <Animated.View
        className="gap-5 flex-col"
        style={[
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor,
            opacity: animateHeaderBackgroundColor,
            overflow: 'hidden',
          },
        ]}
      >
        <View className="flex-row justify-between items-center pl-2 pr-4">
          <IconButton
            icon="menu"
            iconColor={Colors.primaryBackgroundColor}
            size={40}
            onPress={() => console.log('Pressed')}
          />
          <View className="justify-center items-center">
            <Button
              textColor={Colors.greyText}
              labelStyle={{
                // fontFamily: 'Poppins-Regular',
                fontSize: 14,
                lineHeight: 15,
              }}
              onPress={() => {}}
              mode="text"
              contentStyle={{ flexDirection: 'row-reverse', alignItems: 'center' }}
              icon="chevron-down"
            >
              Giao toi
            </Button>
            <Text className="text-primary font-hnow64regular">Tòa S1.01 VinHome Grand Park</Text>
          </View>
          <Avatar.Image
            size={40}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaCJWqu5yYDXxd_SI-_LMvFCbdN2LweQ-WZ2ayqcTON0hSddHVyoYer-GlJwnJZSl5Mc&usqp=CAU',
            }}
          />
        </View>
        <View className="pl-7">
          <Text style={{ fontSize: 30 }} className=" font-hnow65medium text-black">
            Bạn muốn ăn gì...
          </Text>
        </View>
      </Animated.View>

      <SafeAreaView className="flex-row items-center">
        <View
          className="ml-7  flex-row justify-start items-center border-solid border-3 border-primary rounded-xl w-[75%]"
          style={{
            borderWidth: 1,
          }}
        >
          <IconButton icon="magnify" iconColor={Colors.primaryBackgroundColor} onPress={() => {}} />
          <TextInput
            className="flex-1 font-hnow63book"
            placeholder="Tìm kiếm món ăn hay shop house?"
          />
        </View>
        <TouchableRipple
          className="p-2 ml-2 rounded-md bg-white"
          style={styles.shadow}
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <SlidersHorizontal size={32} color={Colors.primaryBackgroundColor} />
        </TouchableRipple>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    overflow: 'hidden',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  shadow: {
    shadowOffset: { width: 4, height: 5 },
    shadowColor: Colors.shadow.DEFAULT,

    shadowOpacity: 0.2,
    elevation: 5,
    // background color must be set
  },
});
