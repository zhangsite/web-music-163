import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual  } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

const TopBanner = memo(() => {
  // 组件和redux关联：获取数据和进行操作
  // useDispatch是redux提供的hooks 可以拿到dispath
  const dispatch = useDispatch()
  // useSelector是redux提供的hooks 可以拿到state
  /* 
    useSelector默认是深层比较，即使页面没有依赖相关数据也会发生刷新
    如果不希望useSelector进行深层比较，那么需要传入第二个参数shallowEqual
   */
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    // 先取第一层是recommend 再取第二层是topBanners
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  // 其他hooks
  const bannerRef = useRef()
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, [])
  // state
  const [currentIndex, setCurrentIndex] = useState()

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex]?.imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
        <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
          {
            topBanners.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img className='image' src={item.imageUrl} alt={item.title}/>
                </div>
              )
            })
          }
        </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner