import { resume_EN , resume_ES } from 'resume'
const {ES,EN} = {'ES','EN'} 

module.exports = (req, res) => {
	const {
    	query: { lang },
	} = req
	switch (lang) {
		case ES :
			res.json()
			break;
		case EN :
			res.json();
			break;
	}
}