const multimediaManager = (() => {
    const setIframe = (url, iframeId) => {
        const iframeElement = document.getElementById(iframeId);
        iframeElement.setAttribute('src', url);
    };

    return {
        setIframe,
    };
})();

class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    set url(newUrl) {
        this._url = newUrl;
    }
}

class Player extends Multimedia {
    constructor(url, iframeId) {
        super(url);
        this._iframeId = iframeId;
    }

    get iframeId() {
        return this._iframeId;
    }

    set iframeId(newIframeId) {
        this._iframeId = newIframeId;
    }

    play() {
        multimediaManager.setIframe(this.url, this.iframeId);
    }

    setStart(tiempo) {
        const iframeElement = document.getElementById(this.iframeId);
        iframeElement.setAttribute('src', `${this.url}?start=${tiempo}`);
    }
}

const musicPlayer = new Player('https://www.youtube.com/embed/vBGiFtb8Rpw', 'musica'); musicPlayer.play();
musicPlayer.setStart('5');

const moviePlayer = new Player('https://www.youtube.com/embed/xy8aJw1vYHo', 'peliculas'); moviePlayer.play();
moviePlayer.setStart('0');

const tvshowPlayer = new Player('https://www.youtube.com/embed/csSaSrJJPRs', 'series'); tvshowPlayer.play();
tvshowPlayer.setStart('10');