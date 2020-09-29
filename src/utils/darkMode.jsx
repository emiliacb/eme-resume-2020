const DarkMode = (dark) => {
			const root = document.documentElement.style;
			if (dark === 'darkOn') {
				root.setProperty('--app-bg', 'var(--dark)')
				root.setProperty('--stroke', 'var(--light)')
				root.setProperty('--attention', '#F39C12')
			} else {
				root.setProperty('--app-bg', 'var(--light)')
				root.setProperty('--stroke', 'var(--darkStroke)')
				root.setProperty('--attention', 'tomato')
			}	
}

export default DarkMode;