import config from './config.js'
import Graph from './class/Graph.js'

const graph=()=>{
    console.log('===== svg.graph CALL =====');
    const width=config.paper.node.clientWidth, height=config.paper.node.clientHeight;
    const group=config.paper.g();
    const display=group.rect(0.1*width, 0.1*height, 0.8*width, 0.8*height);
    display.attr({ fill: 'none', stroke: 'black', strokeWidth: 1 });
    
    return new Graph(group);
}

export default graph;
