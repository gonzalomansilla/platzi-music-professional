import platziMusicService from "./platzi-music"

const trackService = {}

trackService.searching = function (q) {
  const type = "track"

  return platziMusicService.get("/search", {
    params: {
      q: q,
      type: type
    }
  }).then(res => res.data)
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
    .then((res) => res.data)
}

export default trackService
