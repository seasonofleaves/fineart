import { artAPI } from "./AxiosService.js"


class ArtService {
  async getArt() {
    const response = await artAPI.get('api/artworks')
    console.log('Got Artwork - ArtService', response.data)
  }
}

export const artService = new ArtService()