import _ from 'lodash'
import $ from 'jquery'

import './shared'

import ongoingMatch from './observables/ongoingMatch'

ongoingMatch
  .map('.comment')
  .assign(
    $('.scoreboard-message'),
    'text'
  )

ongoingMatch
  .map('.betting_info')
  .map((bettingInfo) => {
    if (bettingInfo) {
      return `${bettingInfo.favourite} (+${bettingInfo.spread})`
    }
    return 'Insufficient matches played'
  })
  .assign(
    $('.scoreboard-warm-up-spread'),
    'text'
  )

ongoingMatch
  .map('.warmup_timer')
  .map((time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return [minutes, _.padStart(seconds, 2)].join(':')
  })
  .assign(
    $('.scoreboard-warm-up-countdown'),
    'text'
  )

ongoingMatch
  .map('.warmup')
  .assign(
    $('.scoreboard-warm-up'),
    'toggleClass',
    'active'
  )

ongoingMatch
  .map('.comment')
  .map((message) => !!message)
  .assign(
    $('.scoreboard-message-area'),
    'toggleClass',
    'message-present'
  )

ongoingMatch
  .map('.instructions')
  .assign($('.scoreboard-instructions'), 'text')

ongoingMatch
  .map('.league_match')
  .assign(
    $('.scoreboard-message-area'),
    'toggleClass',
    'league-match'
  )

ongoingMatch
  .map('.league_match')
  .assign($('.scoreboard-league-match'), 'toggle')

ongoingMatch
  .map('.away_player_service')
  .assign(
    $('.scoreboard-away-player'),
    'toggleClass',
    'has-service'
  )
ongoingMatch
  .map('.home_player_service')
  .assign(
    $('.scoreboard-home-player'),
    'toggleClass',
    'has-service'
  )

ongoingMatch
  .map('.home_score')
  .assign($('.scoreboard-home-player-score'), 'text')
ongoingMatch
  .map('.away_score')
  .assign($('.scoreboard-away-player-score'), 'text')

ongoingMatch
  .map('.home_player_name')
  .assign(
    $('.scoreboard-home-player-name, .scoreboard-warm-up-home-player-name'),
    'text'
  )
ongoingMatch
  .map('.away_player_name')
  .assign(
    $('.scoreboard-away-player-name, .scoreboard-warm-up-away-player-name'),
    'text'
  )

const backgroundmap = (url) => (url ? `url(${url})` : 'none')
ongoingMatch
  .map('.home_player_avatar_url')
  .map((url) => (url || '/avatars/default.png'))
  .map(backgroundmap)
  .assign(
    $('.scoreboard-home-player-avatar'),
    'css',
    'background-image'
  )
ongoingMatch
  .map('.away_player_avatar_url')
  .map((url) => (url || '/avatars/default.png'))
  .map(backgroundmap)
  .assign(
    $('.scoreboard-away-player-avatar'),
    'css',
    'background-image'
  )

ongoingMatch
  .map('.away_player_overlays')
  .map('.flames')
  .assign(
    $('.scoreboard-away-player-avatar .flames'),
    'toggleClass',
    'active'
  )

ongoingMatch
  .map('.home_player_overlays')
  .map('.flames')
  .assign(
    $('.scoreboard-home-player-avatar .flames'),
    'toggleClass',
    'active'
  )
