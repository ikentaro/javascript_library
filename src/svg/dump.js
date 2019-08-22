import config from './config.js'

const dump=()=>{
    console.log('===== svg dump =====');
    console.log('>>>>> Paper Object');
    console.log('> width  :', config.paper.node.clientWidth);
    console.log('> height :', config.paper.node.clientHeight);
}

export default dump;
