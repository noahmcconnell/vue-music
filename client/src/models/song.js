export default class Song {
  constructor(data) {
    (this.name = data.trackName),
      (this.albumArt = data.artworkUrl60.replace(/60x60/g, "400x400")),
      (this.artist = data.artistName),
      (this.album = data.collectionName),
      (this.audioPreview = data.previewUrl),
      (this.tempId = data.trackId);
  }
}
