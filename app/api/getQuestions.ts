import { AlbumsResponseData, Album } from "../app.interface"

export const getQuestions: () => Promise<Album[] | string> = async () => {
  try {
    const response = await fetch(`https://frontend-interview.evidentinsights.com`)
    const data: AlbumsResponseData = await response.json()
    return data.albums
  } catch (error) {
    return 'Error'
  }
}
