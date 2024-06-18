import image1 from './projects-first-compressed.webp';
import image2 from './projects-second-compressed.webp';
import image3 from './projects-third-compressed.webp';

import vscode from './skills/vscode-icons_file-type-vscode.svg';
import js from './skills/vscode-icons_file-type-js-official.svg';
import css from './skills/vscode-icons_file-type-css.svg';
import html from './skills/vscode-icons_file-type-html.svg';
import greenSock from './skills/cib_greensock.svg';
import vector from './skills/Vector.svg';
import gitHub from './skills/akar-icons_github-fill.svg';
import git from './skills/logos_git-icon.svg';
import react from './skills/logos_react.svg';
import saas from './skills/logos_sass.svg';
import bootstrap from './skills/logos_bootstrap.svg';
import tailwind from './skills/vscode-icons_file-type-tailwind.svg';


export const data = {
  proj1: {
    image: image1,
    alt: "one",
    projectName: "Firts project",
    text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
  },
  proj2: {
    image: image2,
    alt: "two",
    projectName: "Second project",
    text: "What was your role, your deliverables, if the project was personal, freelancing."
  },
  proj3: {
    image: image3,
    alt: "three",
    projectName: "Third project",
    text: "You can also add in this description the type of the project, if it was for web, mobile, electron."
  }
}

export const skillData = {
  vscode,
  js,
  css,
  html,
  greenSock,
  vector,
  gitHub,
  git,
  react,
  saas,
  bootstrap,
  tailwind
}