import React, { memo } from 'react'

import { 
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

const Player = memo(() => {
  return (
    <PlayerWrapper>
      <div className='content wrap-v2'>
        <PlayerLeft>
          <h2>PlayerInfo</h2>
          <h2>SongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SimiPlayList</h2>
          <h2>SimiSongs</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default Player