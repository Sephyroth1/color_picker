import { useState } from 'react';
import React from 'react';
import './colorpicker.css';

function Colorpicker() {
	const [color, setColor] = useState("#ffffff");
	const [active, setActive] = useState(false);
	const [edit, setEdit] = useState(false);
	const [inpColor, setinpColor] = useState('#ffffff')

	const handleMouseEnter = function() {
		setActive(true);
	}

	const handleMouseLeave = function() {
		setActive(false);
	}
	const handleColorChange = function(event) {
		setColor(event.target.value);
	}
	const mouseclick = function() {
		setEdit(true);
	}

	const handleInputColor = function(event) {
		setinpColor(event.target.value);
	}
	const handleInputBlur = () => {
		if (/^#[0-9A-F]{6}$/i.test(inpColor)) {
			setColor(inpColor);
		}
		setEdit(false);
	}
	const handleInputKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleInputBlur();
		}
	}
	return (
		<div className='container-text'>
			<div className='color-show' style={{ backgroundColor: color }}>
				{edit ?
					(<input type='text' value={inpColor} onChange={handleInputColor} onBlur={handleInputBlur} onKeyDown={handleInputKeyPress} autoFocus />)
					:
					(<p className="text-color" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ color: active ? color : 'black' }} onClick={mouseclick}>{color}</p>)};
			</div>
			<input type="color" className='color-picker' onChange={handleColorChange} value={color} />
		</div>
	);
}

export default Colorpicker;
