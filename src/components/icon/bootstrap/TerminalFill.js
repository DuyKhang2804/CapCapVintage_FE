import * as React from 'react';

function SvgTerminalFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm9.5 5.5h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-6.354-.354a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L4.793 6.5 3.146 8.146z' />
		</svg>
	);
}

export default SvgTerminalFill;
