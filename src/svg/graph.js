import config from './config.js'
import Graph from './class/Graph.js'

const graph=(x0, y0, width, height, options)=>{
    console.log('===== svg.graph CALL =====');
    if( width==null  ) width=config.paper.node.clientWidth;
    if( height==null ) height=config.paper.node.clientHeight;
    if( x0==null ) x0=0;
    if( y0==null ) y0=0;
    const group=config.paper.g();
    const display=group.rect(x0+0.1*width, y0+0.1*height, 0.8*width, 0.8*height);
    display.attr({ fill: 'none', stroke: 'black', strokeWidth: 1 });
    
    return new Graph(group, options);
}

export default graph;
