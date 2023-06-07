class Img {
    downloads = 0;
    likes = 0;
    img = '';
    url = '';

    constructor(downloads, likes, img, url){
        this.downloads = downloads;
        this.likes = likes;
        this.img = img;
        this.url = url;
    }
}

export default Img;