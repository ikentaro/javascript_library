import Complex from './Complex.js'

const round=(x, precision)=>{
    if( typeof x==='number' ) return innerRound(x, precision);
    if( x instanceof Complex ){
	const roundReal=innerRound(x.real, precision);
	const roundImag=innerRound(x.imag, precision);
	if( roundImag!==0 ) return new Complex(roundReal, roundImag);
	else return roundReal;
    }

    throw new Error('! math.round invalid argument typeof(x)='+typeof x);
}



function innerRound(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }  
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}

export default round;
