function createAnalytics() {
  let counter = 0;
  let isExisted = true;

  const updateAnalytics = () => {
    counter += 1;
    console.log('Clicks: ' + getAnalytics());
  };
  document.addEventListener('click', updateAnalytics);

  function getAnalytics() {
    if (isExisted) {
      return counter;
    }
    console.log('Ops, there is no analytics');
  }

  return {
    getAnalytics,
    removeAnalytics() {
      document.removeEventListener('click', updateAnalytics);
      isExisted = false;
    },
  };
}

window.analytics = createAnalytics();
