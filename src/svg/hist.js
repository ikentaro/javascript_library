import config from './config.js'
import Hist   from './class/Hist.js'

const hist=(data, label, labelWidth, x0, y0, height, width)=>{
    console.log('===== svg.hist CALL =====');
    if( labelWidth==null ) labelWidth=1;
    if( width==null  ) width=config.paper.node.clientWidth;
    if( height==null ) height=config.paper.node.clientHeight;
    if( x0==null ) x0=0;
    if( y0==null ) y0=0;
    const group=config.paper.g();
    const display=group.rect(x0+0.1*width, y0+0.1*height, 0.8*width, 0.8*height);
    display.attr({ fill: 'none', stroke: 'black', strokeWidth: 1 });

    return new Hist(data, label, group, {'labelWidth': labelWidth});
}



export default hist;
