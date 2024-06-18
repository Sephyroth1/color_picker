import './App.css'
import Colorpicker from './Colorpicker.jsx'

function App() {
	return (
		<div className='container'>
			<div className="container-color">
				<h1 className='header-color'>Color Picker App</h1>
				<Colorpicker />
			</div>
			<button className='rbs-converter'>rgb</button>
			<button className='hsl-converter'>hsl</button>
		</div>
	);
}

export default App
