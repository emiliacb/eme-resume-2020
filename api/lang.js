import resume_ES from './fake_db';
import resume_EN from './fake_db';

module.exports = (req, res) => {
	const {
    	query: { lang },
	} = req
	switch (lang) {
		case 'ES' :
			res.json(resume_EN)
			break
		case 'EN' :
			res.json(resume_ES)
			break
	}
	res.json({
		"hola": "no estaría funcionando"
	})
}