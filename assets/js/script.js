class Reproductor{
    constructor(url){
        let _url = url;
    }
    getUrl(){
        return this.url;
    }
}

const obj1 = new Reproductor("url...");

console.log(obj1.getUrl());


//let urlPelicula = "https://www.youtube.com/embed/5PSNL1qE6VY";
//let peliculas = document.getElementById("peliculas");
//peliculas.setAttribute("src", urlPelicula);