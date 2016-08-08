const InitialRenderEvent = 'initial-render';
const InitialRender = new CustomEvent(InitialRenderEvent, { ts: Date.now() });

export default {
  InitialRenderEvent,
  InitialRender
};
