import { createProjector } from 'maquette';
import App from 'containers/app';

import 'style/main.scss';

const proj = createProjector({});

function render() {
  return App.h();
}

document.addEventListener('DOMContentLoaded', (ev) => {
  proj.append(document.getElementById('root'), render);
});
