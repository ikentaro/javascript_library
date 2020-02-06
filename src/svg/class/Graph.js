import draw      from './Graph/draw.js'
import drawFunc  from './Graph/drawFunc.js'
import drawFuncAdd from './Graph/drawFuncAdd.js'

import setXTitle from './Graph/setXTitle.js'
import setYLabel from './Graph/setYLabel.js'
import setXLabel from './Graph/setXLabel.js'

import clear from './Graph/clear.js'

const Graph=class{
    constructor(group, options){
	this._g=group;
	const width=this.disp.width.animVal.value, height=this.disp.height.animVal.value, x0=this.disp.x.animVal.value, y0=this.disp.y.animVal.value;
	this._lines=[ this._g.polyline(x0, y0+0.5*height, x0+width, y0+0.5*height).attr({ strokeWidth:2, stroke: 'blue', fill: 'none' }) ];

	if( options!=null && typeof options==='object' ) for( const [ k, v ] of Object.entries(options) )  if( this[k]==null ) this[k]=v;
//	console.log(this);
    }
    
    get disp(){ return [ ...this.node.children].find(a=> a.tagName==='rect'); }
    get node(){ return this._g.node; }
    
    line(index=0){ return this._lines[index]; }
    draw(x, y){ draw(this, x, y); return this; }
    drawFunc(func, xmin, xmax, ymin, ymax){ drawFunc(this, func, xmin, xmax, ymin, ymax); return this; }
    drawFuncAdd(func){ drawFuncAdd(this, func); return this; }
    
    setXTitle(title){ setXTitle(this, title); }
    
    setYLabel(div){ setYLabel(this, div); }
    setXLabel(div){ setXLabel(this, div); }

    setOption(options){ if( options!=null && typeof options==='object' ) for( const [ key, val ] of Object.entries(options) ) this[key]=value; }
    clear(){ clear(this); }
}

export default Graph;
