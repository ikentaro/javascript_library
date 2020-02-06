import config from './config.js'

import ambient     from './light/ambient.js'
import directional from './light/directional.js'
import point       from './light/point.js'
import spot        from './light/spot.js'

const light={
    ambient: (hex=0xFFFFFF)=>{
	const light=ambient(hex);
	config.scene.add(light);
	return light;
    },
    directional: (hex=0xFFFFFF, intensity=1.0)=>{
	const light=directional(hex, intensity);
	config.scene.add(light);
	return light;
    },
    point: (hex=0xFFFFFF, intensity=1.0, distance)=>{
	const light=point(hex, intensity, distance);
	config.scene.add(light);
	return light;
    },
    spot: (hex=0xFFFFFF, intensity=1.0, distance=0.0, angle=Math.PI/3, penumbra=0, decay=1)=>{
	const light=spot(hex, intensity, distance, angle, penumbra, decay);
	config.scene.add(light);
	return light;
    },
    spotWithHelper: (hex=0xFFFFFF, intensity=1.0, distance=0.0, angle=Math.PI/3, penumbra=0, decay=1)=>{
	const light=spot(hex, intensity, distance, angle, penumbra, decay);
	config.scene.add(new THREE.SpotLightHelper(light));
	config.scene.add(light);
	return light;
    }
}

export default light;
