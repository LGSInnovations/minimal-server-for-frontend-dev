# minimal-server-for-frontend-dev
A minimal Node.js server for shared frontend development using the browser as a development environment. (Minimal here means just a page of server+frontend code that saves frontend snippets and serves them immediately.) This is mostly for a quick setup to help new students of JavaScript to have a playground for small frontend-only projects.

## Usage
 * mkdir myProject
 * cd myProject
 * npm install minimal-server-for-frontend-dev
 * node node_modules/minimal-server-for-frontend-dev/minimalSelfHoster.js 
 
If you do those four steps, the terminal output tells you what to type into your browser address bar, and that's the last time you need to look at your terminal for the entire development session!
In the browser console, you can start developing a frontend-only app with the code() function.
Example:

    code('box.html', '<div class="box"></div>');

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

This would result in these files being created: myProject/public/box.html, myProject/public/box.css, myProject/public/spinBox.js . . . but as a frontend developer, you may not need to think about that, because the code is all discoverable as part of one page in the browser. To modify from there, just copy the outerhtml into the console window, edit it to be a code() call, and hit enter to see the page immediately refresh with the new code delivered from the server. Alternatively, if you prefer to use some editor like VSCode, you can just save a file and immediately refresh the browser (no need to kill and restart the server). Note that files are loaded in alphabetical order, so you may want to name files like 1a-top-partial.html, 2a-middle-partial.html, 9a-bottom-partial.html.

And example of a project that is using this: https://github.com/LGSInnovations/filemine
