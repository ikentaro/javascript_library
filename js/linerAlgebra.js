window.addEventListener('DOMContentLoaded', ()=>{
    console.log('==== Liner Algebra test START  =====');
    const v1=math.vector(1, 1, 1);
    const v2=math.vector(0, 1, 2);

    console.log(math.mul(v1, 3));
    console.log(math.mul(v1, v2));

    console.log(math.add(v1, v2));
    console.log(math.sub(v1, v2));

    const testMat=math.matrix([ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ], [0, 0, 0]);
    console.log('testMat  colSize =', testMat.colSize, ' rowSize =', testMat.rawSize);
    
    const eMat=math.matrix([ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ]);
    const mat1=math.matrix([ 1, 2, 3 ], [ 2, 4, 6 ], [ 9, 6, 3 ]);
    const mat2=math.matrix([ 0, 2, 0 ], [ 2, 0, 2 ], [ 1, 2, 0 ]);
    const mat3=math.matrix([ 1, 1,-1 ], [-2, 0, 1 ], [ 0, 2, 1 ]);
    const mat4=math.matrix([ 0, 4, -2, 6 ], [ 2, 0, -4, 6 ], [ 4, 6, 8, 1 ], [ 4, -2, 2, 2 ]);
    const cmat1=math.matrix([ math.complex(1, 1), math.complex(1, 2), 2, 0 ],
			    [ math.complex(0, 1), 0, math.complex(2, -1), math.complex(1, -1) ],
			    [ 0, 2, 4, math.complex(2, 2) ],
			    [ 4, -2, 2, 2 ]);
    const rev3=mat3.reverse();
    const rev4=mat4.reverse();
    const crev1=cmat1.reverse();

    const mat5=math.matrix([ 2,-1, 1 ], [-1, 2, 1 ], [ 1,-1, 2 ]);

    console.log(math.pow(math.complex(1, 1), 3));
    const eignes=mat5.eigenAll();
    console.log('eigns=', eignes);
    
    console.log(eMat.toString());
    console.log(mat1.colVector(0));
    console.log(mat1.rawVector(0));
    console.log(math.add(mat1, eMat));
    console.log(math.sub(mat1, eMat));

    console.log(math.mul(v2, mat2));
    
    console.log(math.mul(mat1, v2));
    console.log(math.mul(mat1, eMat));
    console.log(math.mul(mat1, mat2));

    console.log('mat*rev check ', math.mul(mat3, rev3));
    console.log('mat*rev check ', math.mul(mat4, rev4));
    console.log('mat*rev check ', math.mul(cmat1, crev1));
    
    console.log('==== Liner Algebra test FINISH =====');
});
