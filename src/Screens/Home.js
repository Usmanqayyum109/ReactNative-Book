import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../Constant/Colors';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {wp} from '../Constant/Responsive';
import {FontSize, Fonts} from '../Constant/Fonts';
import {Icon} from '@rneui/base';

// Child Component Start
export const ChildComponent = ({icon, title, type, press}) => {
  return (
    <TouchableOpacity onPress={press} style={styles.childComponent}>
      <Icon
        name={icon}
        type={type}
        color={Colors.primary}
        size={FontSize.XXL}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

//   Child Component End

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../Assets/Images/BG-Image.png')}
        resizeMode="cover">
        <Icon2
          style={styles.book}
          name="book-open"
          size={wp(25)}
          color={Colors.tertiary}
        />
        <Text numberOfLines={1} style={styles.heading}>
          اقلیتوں کے حقوق
        </Text>

        {/* Btn Start  */}

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('پسندیدہ')}>
          <Text style={styles.text}>حالیہ مطالعہ جاری رکھیں</Text>
          <Icon
            name="refresh"
            size={wp(7)}
            color={Colors.primary}
            type="Ionicons"
          />
        </TouchableOpacity>

        {/* Child Component Render Start  */}
        <View style={styles.childComponentBox}>
          <ChildComponent
            icon="search"
            title="تلاش کریں"
            type="EvilIcons"
            press={() => navigation.navigate('تلاش کریں')}
          />
          <ChildComponent
            icon="home"
            title="سرورق"
            type="Feather"
            // press={() => navigation.navigate('سرورق')}
          />
          <ChildComponent
            icon="bookmark-outline"
            title="پسندیدہ"
            type="Ionicons"
            press={() => navigation.navigate('پسندیدہ')}
          />
          <ChildComponent
            icon="format-list-bulleted"
            title="فہرست"
            type="MaterialCommunityIcons"
            press={() => navigation.navigate('فہرست')}
          />
        </View>

        {/* Child Component Render End  */}
      </ImageBackground>
      <View style={styles.bottomLine}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    width: wp(100),
    height: null,
    alignItems: 'center',
  },
  heading: {
    fontFamily: Fonts.heading,
    color: Colors.primary,
    fontSize: FontSize.XXXL,
    width: wp(80),
    textAlign: 'center',
  },
  bottomLine: {
    width: wp(100),
    height: wp(3),
    backgroundColor: Colors.primary,
  },
  text: {
    fontFamily: Fonts.urdu,
    color: Colors.primary,
    fontSize: FontSize.XXL,
    padding: 0,
    includeFontPadding: false,
    paddingRight: wp(1),
  },
  book: {
    marginTop: wp(10),
  },
  btn: {
    backgroundColor: Colors.tertiary,
    paddingHorizontal: wp(15),
    paddingVertical: wp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(2),
    marginBottom: wp(7),
  },
  childComponent: {
    width: wp(37),
    height: wp(40),
    backgroundColor: Colors.secondary,
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: wp(1),
    marginVertical: wp(2),
  },
  childComponentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(80),
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});
