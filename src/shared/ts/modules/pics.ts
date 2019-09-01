import Unsplash from 'unsplash-js';
import { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: "0657294eb96a51132f7aea49ee509b153db030f66973fa450f00d726717506d6",
    secret: "37f6265dc46085a8c4cb7f1bf2e2d8bf132c5eb8b364261c636c25c4a8ce9398"
});

const images: HTMLImageElement[] = Array.from(document.querySelectorAll(".item a img"));
(function getPics() {
    unsplash.photos.getRandomPhoto({ query: "Physics", count: 5, width: 800, height: 600 })
        .then(toJson)
        .then(json => {
            for (let img in images) {
                images[img].src = json[img].links.download;
            }
        });
})();