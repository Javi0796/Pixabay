class Img {
    tags = "";
    downloads = 0;
    likes = 0;
    img = '';
    url = '';

    constructor(tags, downloads, likes, img, url){
        this.tags = tags;
        this.downloads = downloads;
        this.likes = likes;
        this.img = img;
        this.url = url;
    }
}

export default Img;