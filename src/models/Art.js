export class Art {
  constructor(data) {
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.originalLink = data.originalLink
    this.imgUrlsSmall = data.imgUrls.small
    this.description = data.description
    this.admirers = data.admirers
  }
}