import toString from './Complex/toString.js'

const Complex=class{
    constructor(re, im){ this._real=re, this._imag=im; }

    get re(){ return this._real; }
    get real(){ return this._real; }
    get im(){ return this._imag; }
    get imag(){ return this._imag; }

    get abs2(){ return this.real*this.real+this.imag*this.imag; }
    get r(){ return Math.sqrt(this.abs2); }
    get abs(){ return this.r; }
    get arg(){ return Math.atan2(this.imag, this.real); }

    add(a){ 
	if( typeof a==='number' ) return new Complex(this.real+a, this.imag);
	else if( a instanceof Complex ) return new Complex(this.real+a.real, this.imag+a.imag);
	throw new Error('! Complex.add invalid argument');
    }
    sub(a){ 
	if( typeof a==='number' ) return new Complex(this.real-a, this.imag);
	else if( a instanceof Complex ) return new Complex(this.real-a.real, this.imag-a.imag);
	throw new Error('! Complex.sub invalid argument');
    }
    mul(a){
	if( typeof a==='number' ) return new Complex(a*this.real, a*this.imag);
	else if( a instanceof Complex ) return new Complex(this.real*a.real-this.imag*a.imag, this.real*a.imag+this.imag*a.real);
	throw new Error('! Complex.mul invalid argument');	
    }
    div(a){
	if( typeof a==='number' ) return new Complex(this.real/a, this.imag/a);
	else if( a instanceof Complex ){
	    const abs2=a.abs2;
	    return new Complex((this.real*a.real+this.imag*a.imag)/abs2, (this.imag*a.real-this.real*a.imag)/abs2);
	}
	throw new Error('! Complex.div invalid argument');	
    }
    
    minus(){ return new Complex(-this.real, -this.imag); }
    conj(){ return new Complex(this.real, -this.imag); }
    reverse(){
	const abs2=this.abs2;
	return new Complex(this.real/abs2, -this.imag/abs2);
    }

    copy(){ return new Complex(this.real, this.imag); }
    toString(){ return toString(this); };

    isNumber(){ return true; };
    isFinite(){ return (Number.isFinite(this.re) && Number.isFinit(this.im)); };

    isSame(x, thre=1.0e-8){
	if( typeof x==='number' ) return Math.abs(this.im)<thre && Math.abs(this.re-x)<thre;
	else if( x instanceof Complex ) return Math.abs(this.im-x.im) && Math.abs(this.re-x.re)<thre;

	throw new Error('! Complex.isSame invalid parameter');
    }
}

export default Complex;
