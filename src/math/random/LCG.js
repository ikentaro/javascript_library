const LGC=class{
    constructor(a, c, max, seed=0){
	this._a    = a;
	this._c    = c;
	this._max  = max;
	this._seed = seed;
    }

    get seed(){ return this._seed; }
    setSeed(seed){
	if( IsInterger(seed)!==true ) throw new Error('!!!!! LGC.setSeed seed should be integer !!!!!');
	if( seed<0 || this._max<seed ) throw new Error(`!!!!! LGC.setSeed Invalid Range ${seed} [0. ${this._seed}]`);
	this._seed=seed;
    }
    zeroToOne(){
	this._seed = (this._a*this._seed+this._c) % this._max;
	return this._seed/this._max;
    }
}

export default LGC;
