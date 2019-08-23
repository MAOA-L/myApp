import Taro, {Config} from '@tarojs/taro'
import { View } from '@tarojs/components'
import {AtButton, AtTimeline} from "taro-ui";

export default class Index extends Taro.Component{

  config: Config = {
    navigationBarTitleText: "首页"
  }

  render(): any {

    return(
        <div>
        <View className='at-icon at-icon-settings'></View>
        <AtButton>按钮文案</AtButton>
        <AtButton type='primary'>按钮文案</AtButton>
        <AtButton type='secondary'>按钮文案</AtButton>
          <AtTimeline
              items={[
                { title: '刷牙洗脸' },
                { title: '吃早餐' },
                { title: '上班' },
                { title: '睡觉' }
              ]}
          >
          </AtTimeline>
        </div>
    )
  }
}