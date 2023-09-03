import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Colors} from '../Constant/Colors';
import {Icon} from '@rneui/themed';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {wp} from '../Constant/Responsive';
import {FontSize, Fonts} from '../Constant/Fonts';

export default function Favourite() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Start  */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContainerChild}>
          <View style={{width: wp(10)}}></View>

          <View style={styles.headerChild}>
            <TouchableOpacity style={styles.bothArrowIcon}>
              <Icon
                style={{margin: wp(-2)}}
                name="keyboard-arrow-left"
                type="MaterialIcons"
                color={Colors.tertiary}
                size={FontSize.XL}
                //   onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>

            <View>
              <Icon
                name="insert-drive-file"
                type="MaterialIcons"
                size={FontSize.XXL}
                color={Colors.tertiary}
              />
              <Text style={styles.pageIconText}>2994</Text>
            </View>

            <TouchableOpacity
              style={styles.bothArrowIcon}
              onPress={() => navigation.navigate('Favourite2')}>
              <Icon
                style={{margin: wp(-2)}}
                name="keyboard-arrow-right"
                type="MaterialIcons"
                color={Colors.tertiary}
                size={FontSize.XL}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Icon2 name="ellipsis-h" size={wp(6)} color={Colors.tertiary} />
            <Icon2
              style={{marginTop: wp(-4)}}
              name="ellipsis-h"
              size={wp(6)}
              color={Colors.tertiary}
            />
            <Text style={styles.layoutText}>Layout</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Header End  */}

      {/* Title Start  */}
      <Text numberOfLines={2} style={styles.title}>
        عالم اسلام میں اقلیتوں کے حقوق
      </Text>
      {/* Title End  */}

      {/* Paragraph Container Start  */}
      <View style={styles.paragraphContainer}>
        <Text numberOfLines={17} style={styles.paragraph}>
          اسلام شرفِ اِنسانیت کا علمبردار دین ہے۔ ہر فرد سے حسن سلوک کی تعلیم
          دینے والے دین میں کوئی ایسا اصول یا ضابطہ روا نہیں رکھا گیا جو شرف
          انسانیت کے منافی ہو۔ دیگر طبقات معاشرہ کی طرح اسلامی ریاست میں اقلیتوں
          کو بھی ان تمام حقوق کا مستحق قرار دیا گیا ہے، جن کا ایک مثالی معاشرے
          میں تصور کیا جاسکتا ہے۔ {'\n'}اللہ تعالیٰ کا پسندیدہ دین اسلام دینِ
          امن وسلامتی ہے اور یہ معاشرے میں رہنے والے تمام افراد کو ،خواہ ان کا
          تعلق کسی بھی مذہب اور رنگ و نسل سے ہو ، جان و مال اور عزت و آبرو کے
          تحفظ کی ضمانت عطا کرتا ہے ۔ ایک اسلامی ریاست میں آباد غیر مسلم اقلیتوں
          کی عزت اور جان و مال کی حفاظت کرنا مسلمانوں پر بالعموم اور اسلامی
          ریاست پر بالخصوص فرض ہے ۔ غیر مسلموں کے حقوق کا تحفظ جس انداز میں عہد
          رسالت مآب ﷺاور عہد خلفاے راشدین میں کیا گیا اس کی نظیر پوری انسانی
          تاریخ میں نہیں ملتی. حضور ﷺنے اپنے مواثیق، معاہدات اور فرامین کے ذریعے
          اس تحفظ کو آئینی اور قانونی حیثیت عطا فرما دی تھی۔جس کی تفصیلات کتب .
          تاریخ وسیر اورکتب فقہ میں موجود ہے
        </Text>
      </View>
      {/* Paragraph Container End  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    width: wp(100),
    alignItems: 'center',
    paddingVertical: wp(4),
  },
  headerContainerChild: {
    flexDirection: 'row',
    width: wp(100),
    justifyContent: 'space-between',
    paddingRight: wp(5),
    alignItems: 'center',
  },
  headerChild: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(50),
    justifyContent: 'space-between',
  },
  bothArrowIcon: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: wp(0.2),
    borderColor: Colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageIconText: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.XXXS,
    color: Colors.primary,
    textAlign: 'center',
    position: 'absolute',
    top: wp(4),
    left: wp(2),
  },
  layoutText: {
    fontFamily: Fonts.regular,
    color: Colors.tertiary,
    fontSize: FontSize.XXXS,
    marginTop: wp(-3),
  },
  title: {
    fontFamily: Fonts.urdu,
    color: Colors.primary,
    fontSize: FontSize.XXL,
    textAlign: 'center',
    width: wp(80),
    includeFontPadding: false,
    marginTop: wp(8),
  },
  paragraphContainer: {
    width: wp(90),
    alignItems: 'center',
    marginVertical: wp(5),
    flex: 1,
  },
  paragraph: {
    fontFamily: Fonts.urdu,
    color: Colors.primary,
    fontSize: FontSize.XL,
    includeFontPadding: false,
  },
});
