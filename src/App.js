import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config';

import { Provider } from 'react-redux';
import routes from './router'
import store from '@/store'

import AppPlayerBar from './pages/player/app-player-bar';
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom';

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
          <Suspense failback={<div>page loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
        <AppFooter/>
        <AppPlayerBar/>
      </HashRouter>
    </Provider> 
    
  )
})

export default App