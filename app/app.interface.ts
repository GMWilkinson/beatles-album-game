export interface Album {
  cover_image_id: number
  cover_image_path: string
  length: string
  name: string
  year_released: number
  tracks: number
}

export interface AlbumsResponseData {
  artist: string
  albums: Album[]
}

export interface CurrentQuestion {
  correctAnswer: Album
  wrongAnswers: Album[]
}

export interface FormValues {
  userName: string
  email: string
}