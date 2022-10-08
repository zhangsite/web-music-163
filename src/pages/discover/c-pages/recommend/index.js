import React, { memo } from 'react'

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight 
} from './style';

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-aibum';
import RecommendRanking from './c-cpns/recommend-ranking';
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotRnchor from './c-cpns/hot-anchor'

const Recommend = (props) => {

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin/>
          <SettleSinger/>
          <HotRnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend)

// 原代码
/* const Recommend = (props) => {
  const { getBanners, topBanners } = props 

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>Recommend: { topBanners.length }</div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispathToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispathToProps)(memo(Recommend)) */