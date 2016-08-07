import { h } from 'maquette';

function heavy(Target) {
  const newTarget = new Target();

  const props = {
    'data-type': newTarget.type || 'div',
    id: newTarget.displayName || null,
    classes: newTarget.classNames.length ? newTarget.classNames.reduce(
        (obj, item) => {
          const oItem = {};
          oItem[item] = true; return oItem;
        },
      {}) : []
  };

  newTarget.h = (userProps, children) => {
    return h(
      props['data-type'],
      Object.assign({}, props, userProps),
      newTarget.render(children)
    );
  };

  return newTarget;
}

export default heavy;
