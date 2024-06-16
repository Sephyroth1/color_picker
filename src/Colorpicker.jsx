import { useState } from 'react';
import React from 'react';
import './colorpicker.css';

function Colorpicker() {
    const [color, setColor] = useState("#ffffff");
	const [active, setActive] = useState(false);

	const handleMouseEnter = function() {
		setActive(true);
	}

	const handleMouseLeave = function() {
		setActive(false);
	}
	const handleColorChange = function(event) {
		setColor(event.target.value);
	}

	return (
			<div className='container-text'>
				<div className='color-show' style={{backgroundColor: color}}>
					<p className="text-color" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ color: active ? color : 'black'}}>{color}</p>
				</div>
				<input type="color" className='color-picker' onChange={handleColorChange} value={color}/>
			</div>
	);
}

export default Colorpicker;