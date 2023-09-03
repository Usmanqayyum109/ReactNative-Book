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

export default function Favourite2() {
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
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>

            <View>
              <Icon
                name="insert-drive-file"
                type="MaterialIcons"
                size={FontSize.XXL}
                color={Colors.tertiary}
              />
              <Text style={styles.pageIconText}>3468</Text>
            </View>

            <TouchableOpacity
              style={styles.bothArrowIcon}
              //   onPress={() => navigation.navigate('Favourite2')}
            >
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
        مسلم اقلیات اور اسلاموفوبیا
      </Text>
      {/* Title End  */}

      {/* Paragraph Container Start  */}
      <View style={styles.paragraphContainer}>
        <Text numberOfLines={17} style={styles.paragraph}>
          ذرائع ابلاغ وہ اطلاعات فراہم کرتے ہیں جو مسلمانوں کے حوالے سے ایسے
          رویوں کی تشکیل کا سبب بنتی ہیں۔ 2007 میں پیو ریسرچ سینٹر کی طرف سے
          امریکیوں کے بارے میں کروائے گئے سروے سے پتہ چلتا ہے کہ مسلمانوں کے
          بارے میں لوگوں کی منفی رائے زیادہ تر ان باتوں کے زیر اثر تھی جو انہوں
          نے ذرائع ابلاغ سے سنیں اور پڑھیں۔ ماہر مواصلات منیبہ سلیم اور ان کے
          ساتھیوں نے امریکہ کے مسلمان شہریوں کے معاملے میں میڈیا اطلاعات
          اور’گھسے پٹے خیالات، منفی جذبات اور نقصان دہ پالیسیوں‘ کے درمیان تعلق
          کو ظاہر کیا ہے۔
          {'\n'}
          {'\n'}
          <Text style={{fontSize: FontSize.XXL}}> مسلمانوں کی منفی</Text>
          {'\n'}
          کوریج گذشتہ تحقیق میں مسلمانوں کو میڈیا میں بڑے پیمانے پر منفی انداز
          میں پیش کرنے کی نشاندہی کی گئی۔ 2000 سے 2015 تک کی گئی تحقیق کا
          کمیونیکیشن سکالرز سیف الدین احمد اور جورگ میتھیس کی جانب سے جائزہ اس
          نتیجے پر پہنچا کہ میڈیا میں مسلمانوں کو منفی طور پر پیش کیا گیا اور
          اسلام کو اکثر ایک پرتشدد مذہب کے طور پر دکھایا گیا۔
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
