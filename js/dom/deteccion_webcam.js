const d = document,
      w = window,
      n = navigator;

export default function webCam (id) {
    const $video = d.getElementById(id);

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(strem => {
            $video.srcObject = strem;
            $video.play();
        })
        .catch(err => {
            $video.insertAdjacentHTML("beforebegin", `<p>Ha ocurrido el siguiente error:<br><mark>${err}</mark><p>`);
            console.log(`Ha ocurrido el siguiente error: ${err}`);
        })
    }
}