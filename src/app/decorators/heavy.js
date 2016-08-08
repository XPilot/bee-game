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
      {}) : [],
    afterCreate: newTarget.onCreate || null,
    afterUpdate: newTarget.onUpdate || null,
    onclick: newTarget.onClick || null,
    onchange: newTarget.onChange || null,
    onblur: newTarget.onBlur || null,
    onfocus: newTarget.onFocus || null,
    oninput: newTarget.onInput || null,
    onkeydown: newTarget.onKeyDown || null,
    onkeypress: newTarget.onKeyPress || null,
    onkeyup: newTarget.onKeyUp || null,
    onmouseenter: newTarget.onMouseEnter || null,
    onmouseleave: newTarget.onMouseLeave || null,
    onmousemove: newTarget.onMouseMove || null,
    onmouseout: newTarget.onMouseOut || null,
    onmouseover: newTarget.onMouseOver || null,
    onmouseup: newTarget.onMouseUp || null,
    ontouchcancel: newTarget.onTouchCancel || null,
    ontouchend: newTarget.onTouchEnd || null,
    ontouchmove: newTarget.onTouchMove || null,
    ontouchstart: newTarget.onTouchStart || null,
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
