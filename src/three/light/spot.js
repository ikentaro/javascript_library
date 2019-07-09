const spot=(hex=0xFFFFFF, intensity=1.0, distance=0.0, angle=Math.PI/3, exponent=10.)=>{
    return new THREE.SpotLight(hex, intensity, distance, angle, exponent);
}

export default spot;
