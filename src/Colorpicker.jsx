import { useState } from 'react';
import React from 'react';
import './colorpicker.css';
import { useQuery } from '@tanstack/react-query';

function Colorpicker() {
	const [color, setColor] = useState("#ffffff");
	const [active, setActive] = useState(false);
	const [edit, setEdit] = useState(false);
	const [inpColor, setinpColor] = useState('#ffffff')
	const fetcher = async () => {
		const res = await fetch(`https://www.thecolorapi.com/id?hex=${color.replace('#', '')}`);
		return res.json()
	}

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
	const { status, data, error, isFetching } = useQuery({
		queryKey: ['colors', color],
		queryFn: fetcher,
		refetchOnWindowFocus: true
	});
	if (status === 'loading') {
		<div>Loading</div>
	}
	if (status === 'error') {
		<div>Error: {error}</div>
	}
	if (!data) {
		<div>Not Working</div>
	}
	if (isFetching) {
		<div>Fetching</div>
	}
	const name = data?.name?.value;
	const rgb = data?.rgb?.value;
	const hsl = data?.hsl?.value;

	return (
		<div className='container-text'>
			<div className='color-show' style={{ backgroundColor: color }}>
				{edit ?
					(<input type='text' value={inpColor} onChange={handleInputColor} onBlur={handleInputBlur} onKeyDown={handleInputKeyPress} autoFocus />)
					:
					(<p className="text-color" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ color: active ? color : 'black' }} onClick={mouseclick}>{color}</p>)};
			</div>
			<input type="color" className='color-picker' onChange={handleColorChange} value={color} />
			<div className='names-color'>name of the color: {name}</div>
			<div className='rgb-color'>rgb values of the color : {rgb}</div>
			<div className='hsl-color'>hsl values of the color : {hsl}</div>
		</div>
	);
}

export default Colorpicker;
