/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,htm,js}'],
	theme: {
		// container: {
		// 	padding: 'var(--container-gap)',
		// 	center: true,
		// 	screens: {
		// 		sm: '100%',
		// 		md: '100%',
		// 		lg: '100%',
		// 		xl: '100%',
		// 	},
		// },
		// fontFamily: {
		// 	body: 'Manrope',
		// },
		// spacing: {
		//
		// },
		borderWidth: {
			DEFAULT: '1px',
			2: '2px',
			0: '0px',
		},
		extend: {
			// fontSize: {
			// 	s: 'var(--txt-s)',
			// 	m: 'var(--txt-m)',
			// 	l: 'var(--txt-l)',
			// },
			lineHeight: {},


			borderRadius: {
				DEFAULT: '50%',
				8: '.08rem',
				15: '.15rem',
			},
		},
	},

}
