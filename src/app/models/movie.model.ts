export interface MovieModel {
  page?: number,
  results: Movie[]
}

export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number | string,
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string | number
  title: string
  video: boolean
  vote_average: string | number
  vote_count: number
}
