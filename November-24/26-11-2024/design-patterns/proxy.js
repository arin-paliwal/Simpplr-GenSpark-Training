// The Proxy Pattern provides a substitute or a placeholder for another object to control access to it. The proxy acts as an intermediary, managing the interaction between the client and the real object.

class RealVideo {
    constructor(filename) {
        this.filename = filename;
        this.loadVideo();
    }

    loadVideo() {
        console.log(`Loading video from ${this.filename}...`);
    }

    play() {
        console.log(`Playing video: ${this.filename}`);
    }
}

class ProxyVideo {
    constructor(filename) {
        this.filename = filename;
        this.realVideo = null;
    }

    play() {
        if (!this.realVideo) {
            this.realVideo = new RealVideo(this.filename);
        }
        this.realVideo.play();
    }
}

const video = new ProxyVideo('example.mp4');

console.log('Video object created.');

video.play();

video.play();
