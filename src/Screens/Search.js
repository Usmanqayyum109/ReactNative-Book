import React from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from '../Constant/Colors';
import {Icon} from '@rneui/themed';
import {wp} from '../Constant/Responsive';
import {TextInput} from 'react-native';
import {FontSize, Fonts} from '../Constant/Fonts';
import {Text} from 'react-native';
import {ScrollView} from 'react-native';

// Child Component Start
const ChildComponent = ({title}) => {
  return (
    <View style={styles.childCopmonentContainer}>
      <Text numberOfLines={1} style={styles.childCopmonentText}>
        {title}
      </Text>
    </View>
  );
};

// Child Component End

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Line Start  */}
      <View style={styles.topLine}></View>
      {/* Top Line End  */}

      <ImageBackground
        style={styles.bgImg}
        source={require('../Assets/Images/BG-Image.png')}
        resizeMode="cover">
        {/* Search Bar Start  */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="لفظ تلاش کریں ....."
            placeholderTextColor={Colors.primary}
          />
          <View style={styles.searchBarIcon}>
            <Icon
              name="search"
              type="EvilIcons"
              color={Colors.primary}
              size={FontSize.XL}
            />
          </View>
        </View>
        {/* Search Bar End  */}

        {/* Result Container Start  */}
        <View style={styles.resultContainer}>
          <View style={styles.resultLeftBox}>
            <Text style={styles.resultNum}>10</Text>
          </View>
          <Text style={styles.resultText}>نتائج موصول ہوئے</Text>
        </View>
        {/* Result Container End  */}

        {/* Center Icon Start  */}
        <TouchableOpacity>
          <Icon
            name="keyboard-arrow-down"
            type="MaterialIcons"
            size={FontSize.XXL}
            color={Colors.primary}
          />
        </TouchableOpacity>
        {/* Center Icon End  */}

        {/* Child Component Render Start  */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewStyle}>
          {Array(7)
            .fill(0)
            .map((item, index) => {
              return (
                <ChildComponent
                  key={index}
                  title=" مسلم اقلیات اور اسلاموفوبیا"
                />
              );
            })}
        </ScrollView>
        {/* Child Component Render End */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topLine: {
    backgroundColor: Colors.primary,
    width: wp(100),
    alignItems: 'center',
    height: wp(3),
  },
  bgImg: {
    flex: 1,
    width: wp(100),
    alignItems: 'center',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    borderRadius: wp(2),
    height: wp(12),
    justifyContent: 'space-between',
    marginVertical: wp(5),
    borderWidth: wp(0.4),
    borderColor: Colors.tertiary,
  },
  searchBar: {
    fontFamily: Fonts.urdu,
    color: 'black',
    fontSize: FontSize.L,
    flex: 1,
    textAlign: 'center',
    includeFontPadding: false,
    padding: 0,
  },
  searchBarIcon: {
    width: wp(12),
    backgroundColor: Colors.tertiary,
    paddingVertical: wp(3),
    borderTopLeftRadius: wp(1),
    borderBottomLeftRadius: wp(1),
    borderBottomRightRadius: wp(1),
    borderTopRightRadius: wp(1),
  },
  resultContainer: {
    width: wp(50),
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    paddingVertical: wp(2),
    height: wp(12),
    borderRadius: wp(2),
    marginTop: wp(2),
  },
  resultLeftBox: {
    width: wp(12),
    backgroundColor: Colors.tertiary,
    height: wp(12),
    alignItems: 'center',
    marginTop: wp(-2),
    borderTopLeftRadius: wp(2),
    borderBottomLeftRadius: wp(2),
    borderBottomRightRadius: wp(2),
    borderTopRightRadius: wp(2),
  },
  resultNum: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: FontSize.XL,
    paddingTop: wp(2),
  },
  resultText: {
    fontFamily: Fonts.urdu,
    color: Colors.secondary,
    fontSize: FontSize.XL,
    flex: 1,
    paddingHorizontal: wp(3),
  },
  childCopmonentContainer: {
    backgroundColor: 'transparent',
    width: wp(50),
    alignItems: 'center',
    borderRadius: wp(2),
    borderWidth: wp(0.5),
    borderColor: Colors.tertiary,
    height: wp(12),
    marginVertical: wp(1.5),
  },
  childCopmonentText: {
    fontFamily: Fonts.urdu,
    fontSize: FontSize.XL,
    color: Colors.primary,
    textAlign: 'center',
  },
  scrollViewStyle: {
    paddingTop: wp(2),
    paddingBottom: wp(15),
  },
});
