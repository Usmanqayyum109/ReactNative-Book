import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from '../Constant/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '@rneui/base';
import {wp} from '../Constant/Responsive';
import {FontSize, Fonts} from '../Constant/Fonts';
import {TouchableOpacity} from 'react-native';
import {Data} from '../Components/Data';
import {FlatList} from 'react-native';

// Child Component Start
export const ChildComponent = ({subHeading, topic, pageNo}) => {
  return (
    <TouchableOpacity style={styles.topicBox}>
      <Text style={styles.pageNo}>{pageNo}</Text>
      <Text numberOfLines={1} style={styles.topic}>
        {topic}
      </Text>
      <View style={styles.subHeadingBox}>
        <Text style={styles.subHeading}>{subHeading}</Text>
      </View>
    </TouchableOpacity>
  );
};
// Child Component End

export default function Topics() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topLine}></View>

      {/* Search Bar Start  */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="فہرست میں سرچ کریں"
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

      {/* Title Start  */}
      <View style={styles.titleBox}>
        <Text style={styles.title}>صفحہ</Text>
        <Text style={styles.title}>فہرست</Text>
        <Text style={styles.title}>نمبر</Text>
      </View>
      {/* Tilte End  */}

      {/* Child Component Render Start  */}
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={key => {
          return key.index;
        }}
        data={Data}
        renderItem={({item}) => {
          return (
            <ChildComponent
              subHeading={item.subHeading}
              topic={item.topic}
              pageNo={item.pageNo}
            />
          );
        }}
      />
      {/* Child Component Render End  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  topLine: {
    backgroundColor: Colors.primary,
    width: wp(100),
    alignItems: 'center',
    height: wp(3),
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    borderRadius: wp(2),
    height: wp(12),
    justifyContent: 'space-between',
    marginTop: wp(5),
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
  titleBox: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    marginVertical: wp(2),
  },
  title: {
    fontFamily: Fonts.urdu,
    fontSize: FontSize.XXL,
    color: Colors.primary,
  },
  pageNo: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: FontSize.L,
    paddingLeft: wp(5),
  },
  topicBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(96),
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
    paddingVertical: wp(1),
    borderRadius: wp(2),
    elevation: wp(1),
    borderTopWidth: wp(1),
    borderTopColor: Colors.tertiary,
    marginVertical: wp(1.5),
  },
  topic: {
    fontFamily: Fonts.urdu,
    color: Colors.primary,
    fontSize: FontSize.L,
    flex: 1,
    marginHorizontal: wp(3),
  },
  subHeadingBox: {
    backgroundColor: Colors.tertiary,
    alignItems: 'center',
    width: wp(12),
    paddingVertical: wp(2),
    borderTopLeftRadius: wp(7),
    borderBottomLeftRadius: wp(7),
  },
  subHeading: {
    fontFamily: Fonts.medium,
    color: Colors.secondary,
    fontSize: FontSize.L,
  },
});
