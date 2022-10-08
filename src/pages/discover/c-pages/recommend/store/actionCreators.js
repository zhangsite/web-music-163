import * as actionTypes from './constants'
import { getNewAlbum } from '@/services/recommend'

import { 
  getTopBanners,
  getHotRecommends,
  getTopList
} from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOPBANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  } 
}

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.weekData
})

export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbum().then(res => {
      // const albums = res.weekData
      dispatch(changeNewAlbumAction(res))
    })
  }
}

const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopListAction = (id) => {
  return dispatch => {
    getTopList(id).then(res => {
      switch(id) {
        case 19723756:
          dispatch(changeUpRankingAction(res))
          break
        case 3779629:
          dispatch(changeNewRankingAction(res))
          break
        case 2884035:
          dispatch(changeOriginRankingAction(res))
          break
        default:
          break
      }
    })
  }
}