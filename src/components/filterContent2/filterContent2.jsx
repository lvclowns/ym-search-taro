/**
 * @Author: lvshaoli
 * @DATE: 2020-01-24
 * @TIME: 10:58
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import Content2item from './content2Item/content2Item'
import './filterContent2.scss'

class Filtercontent2 extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='filterContent2'>
        <Content2item />
        <Content2item />
        <Content2item />
      </View>
    )
  }
}

export default Filtercontent2
