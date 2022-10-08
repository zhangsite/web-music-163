import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import { HotRecommendWrapper } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import SongsCover from '@/components/songs-cover';

import { getHotRecommendAction } from '../../store/actionCreators';

const HotRecommend = memo(() => {
  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispath = useDispatch()

  // other hooks
  useEffect(() => {
    dispath(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispath])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title='热门推荐' keywords={['华语', '流行', '民谣', '摇滚', '电子']}/>
      <div className='recommend-list'>
        {
          hotRecommends.map((item, index) => {
            return <SongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend