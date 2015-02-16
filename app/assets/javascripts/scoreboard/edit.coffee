$ ->
  return unless $('.match-controls').length

  initialFetch = Bacon.once { url: '/api/ongoing_match.json' }

  homePlayerPoints = $('.match-controls-home-player')
    .asEventStream('click')
    .map -> { url: '/api/ongoing_match/home_point.json', type: 'PUT' }

  awayPlayerPoints = $('.match-controls-away-player')
    .asEventStream('click')
    .map -> { url: '/api/ongoing_match/away_point.json', type: 'PUT' }

  rewinds = $('.match-controls-rewind')
    .asEventStream('click')
    .map -> { url: '/api/ongoing_match/rewind.json', type: 'PUT' }

  finalization = $('.match-controls-finalize')
    .asEventStream('click')
    .map -> { url: '/api/ongoing_match/finalize.json', type: 'PUT' }

  cancellations = $('.match-controls-cancel-game')
    .asEventStream('click')
    .map -> { url: '/api/ongoing_match.json', type: 'DELETE' }

  match = Bacon.mergeAll(initialFetch,
                         homePlayerPoints,
                         awayPlayerPoints,
                         rewinds,
                         finalization,
                         cancellations).ajax().map(".match")

  matchHomeScore = match.map(".home_score")
  matchAwayScore = match.map(".away_score")

  matchHomeName = match.map(".home_player_name")
  matchAwayName = match.map(".away_player_name")

  matchFinished = match.map(".finished")
  matchFinalized = match.map(".finalized")
  matchDeleted = match.map(".deleted")

  matchFinalized.assign $(".match-controls-cancel-game"), "prop", "disabled"

  matchFinished.not().assign $(".match-controls-finalize"), "prop", "disabled"

  matchHomeScore.assign $(".match-controls-home-player-score"), "text"
  matchAwayScore.assign $(".match-controls-away-player-score"), "text"

  matchHomeName.assign $(".match-controls-home-player-name"), "text"
  matchAwayName.assign $(".match-controls-away-player-name"), "text"

  Bacon.mergeAll(matchFinalized, matchDeleted)
    .filter (value) -> value
    .onValue -> window.location.assign("/matches/new")