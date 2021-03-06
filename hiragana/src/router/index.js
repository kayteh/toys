import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import GamePlay from '@/components/GamePlay'
import GameSetup from '@/components/GameSetup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/game/play',
      name: 'GamePlay',
      component: GamePlay
    },
    {
      path: '/game/setup',
      name: 'GameSetup',
      component: GameSetup
    },
    {
      path: '/game/tutorial',
      name: 'HowToPlay',
      component: Start
    }
  ]
})
