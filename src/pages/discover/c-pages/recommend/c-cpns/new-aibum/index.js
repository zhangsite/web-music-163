import React, { memo, useEffect, useRef } from 'react'

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreators';
import { AlbumWrapper } from './style';
import AlbumCover from '@/components/album-cover';

import { Carousel } from 'antd';

const NewAlbum = memo(() => {

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()

  const pageRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title='新碟上架'/>
      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={e => pageRef.current.prev()}></button>
        <div className='album'>
        <Carousel dots={false} ref={pageRef}>
          {
            [0, 1].map(item => {
              return (
                <div key={item} className='page'>
                  {
                    newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                      return <AlbumCover 
                                key={iten.id} 
                                info={iten} 
                                size={100} 
                                width={118}
                                bgp='-570px'/>
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum