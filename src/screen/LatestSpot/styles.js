import {StyleSheet} from 'react-native';
import {w, h, totalSize} from '../../utils/Dimensions';
import {UiColor, TextColor, TextSize} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarInput: {
    flexDirection: 'row',
    marginVertical: w(3),
    height: h(6.5),
    width: '95%',
    borderWidth: w(0.4),
    borderColor: UiColor.BLACK,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  inputIcon: {
    width: w(6),
    height: h(5.5),
    marginLeft: w(2),
    justifyContent: 'center',
  },
  inputField: {
    height: h(6),
    width: w(65),
    marginLeft: w(2),
  },
  flatListView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: h(4),
    //   alignSelf:'center'
  },
  image1: {
    height: h(45),
    width: w(46),
  },
  image2: {
    height: h(45),
    width: w(46),
  },
  imageTitle: {
    alignSelf: 'center',
    marginVertical: h(35),
    color: UiColor.PINK,
  },
  line: {
    borderWidth: 1,
    borderColor: UiColor.GRAY,
    marginLeft: 5,
  },
  btnWrapper: {
    backgroundColor: UiColor.PINK,
    borderRadius: 100,
    marginVertical: h('2'),
    minWidth: w('40'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: UiColor.WHITE,
    padding: w('2'),
    paddingHorizontal: w('10'),
  },
});
