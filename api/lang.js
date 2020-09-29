import resume_ES from './fake_db/resume_ES.json';
import resume_EN from './fake_db/resume_EN.json';

module.exports = (req, res) => {
	const lang =	req.query.query;
	switch (lang) {
		case 'ES' :
			res.json(resume_ES);
			break;
		case 'EN' :
			res.json(resume_EN);
			break;
	}
}