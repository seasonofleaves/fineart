import { artAPI } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Art } from "@/models/Art.js"

class ArtService {
  async getArt() {
    const response = await artAPI.get('api/artworks')
    console.log('Got Artwork - ArtService', response.data)
    const newArt = response.data.artworks.map(artPOJO => new Art(artPOJO))
    AppState.art = newArt

    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }
}

export const artService = new ArtService()