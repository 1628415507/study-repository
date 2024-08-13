import EventBus from './EventBus';
const fetch = (url, options) => {
  const id = Math.random().toString(36).slice(2);
  // 请求开始前的记录
  const fetchStartEvent = new CustomEvent('fetchStart', {
    detail: {
      id,
      url,
      method: options.method || 'GET',
    },
  });
  EventBus.dispatchEvent(fetchStartEvent);
  return window.fetch(url, options)
    .then((response) => {
      // 请求结束后的记录
      const fetchEndEvent = new CustomEvent('fetchEnd', {
        detail: {
          id,
          url,
          method: options.method || 'GET',
        },
      });
      EventBus.dispatchEvent(fetchEndEvent);
      return response;
    });
};
export default fetch;