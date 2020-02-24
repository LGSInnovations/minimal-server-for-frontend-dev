# minimal-server-for-frontend-dev
A minimal Node.js server for shared frontend development using the browser as a development environment.

## Usage
 * mkdir myProject
 * cd myProject
 * git clone https://github.com/LGSInnovations/minimal-server-for-frontend-dev.git
 * node minimal-server-for-frontend-dev/minimalSelfHoster.js 
 
If you do those four steps, it tells you what to type into your browser.
In the browser console, you can start developing a frontend-only app with the code() function.
Example:
code('box.html', `
  <div class="box"></div>
`);

code('box.css', `
.box {
    width: 50%;
    height: 50%;
    background: red;
    transition-duration: 2s;
}
`);

code('spinBox.js', `
const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
    box.style.transform = 'translate(100%) rotateZ(360deg)';
    setTimeout(() => box.style.transform = '', 2000);
});
`);

This would result in these files being created: myProject/public/box.html, myProject/public/box.css, myProject/public/spinBox.js
