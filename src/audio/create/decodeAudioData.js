import context from '../context.js'

const decodeAudioData=(url)=>{
    return new Promise(resolve=>{
	fetch(url).then(res=> res.arrayBuffer()).then(arrBuf=> context.decodeAudioData(arrBuf)).then(audioBuf=> resolve(audioBuf));
    });
}

export default decodeAudioData;
