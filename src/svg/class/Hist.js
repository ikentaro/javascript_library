import init from './Hist/init.js';
import draw from './Hist/draw.js';
import fill from './Hist/fill.js';
import dump from './Hist/dump.js';

const Hist=class{
    constructor(data, label, group, options){
        this._g=group;
//	const width=this.disp.width.animVal.value, height=this.disp.height.animVal.value, x0=this.disp.x.animVal.value, y0=this.disp.y.animVal.value;
	init(this, data, label);
    }

    get disp(){ return [ ...this.node.children].find(a=>a.tagName==='rect'); }
    get node(){ return this._g.node; }
    
    draw(options){ draw(this); }
    fill(label, weight=1.0){ fill(this, label, weight); }
    dump(){ dump(this); }
}

export default Hist;
