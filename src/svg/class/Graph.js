import draw from './Graph/draw.js'

const Graph=class{
    constructor(group){
	this._g=group;
	const width=this.disp.width.animVal.value, height=this.disp.height.animVal.value, x0=this.disp.x.animVal.value, y0=this.disp.y.animVal.value;
	this._lines=[ this._g.polyline(x0, y0+0.5*height, x0+width, y0+0.5*height).attr({ strokeWidth:2, stroke: 'blue', fill: 'none' }) ];	
    }
    
    get disp(){ return [ ...this.node.children].find(a=> a.tagName==='rect'); }
    get node(){ return this._g.node; }
    
    line(index=0){ return this._lines[index]; }
    draw(x, y){ draw(this, x, y); }
}

export default Graph;
