This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My personal website 
## https://eme-resume.vercel.app/

### What you can do:

- Change the colors in a darkmode like function
  - I used the css variables to this
- Change the lenguaje
  - I do it with a serverles api, where I store two diferent json archives.
  with react-router, the links send you to a new component and do a new request
  to the api. This is not the mor eficient way, because I can do it without api 
  or with only one request, but I implemented it in this way in order to demostrate
  the interaction with a api in my web.
- Print the web in resume like style.
  - with mediaquerys I set a print style and added a QR code.
- Send me a email!
  - Thanks to the dwyl script.


### I used the following tecnologies:

- HTML, CSS and GIT of course
- [Interweave to parse string to html](https://interweave.dev/docs/)
- Css modules, root variables, pseudoclasses, selectors, mediaquerys, animations
- Javascript ES6
- React.js
- React-router-dom
- Axios
- Serverless Api in vercel
- A google script by [DWYL](https://github.com/dwyl/) for the contact form serverless, 
  - I only use the script, the function that he share is not compatible with react
- Later I will refactor for use Mailgun or Sendicate
  
  
### Other credits
  - The print logo was from [flaticon](https://flaticon.es), design by [DinosoftLabs](https://www.flaticon.es/autores/dinosoftlabs)
  
### ToDos

- [ ] refactor for use Mailgun or Sindicate


