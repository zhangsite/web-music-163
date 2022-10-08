import React, { memo, useEffect } from 'react'

import { getTopListAction } from '../../store/actionCreators';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';

import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const RecommendRanking = memo(() => {

  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title='榜单'/>
      <div className='tops'>
        <TopRanking info={upRanking}/>
        <TopRanking info={newRanking}/>
        <TopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})

export default RecommendRanking