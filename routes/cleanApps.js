const Wappalyzer = require('wappalyzer');

const TARGET = [ "WordPress", "Tumblr", "Google Analytics" ];

const runCleanUp = () => {
  const getApps = () => {
    const apps = new Wappalyzer("http://google.com").wappalyzer.apps;
    return apps;
  };

  const isImplies = (conf) => {
    const impl = conf.implies;
    if (Array.isArray(impl)) {
      return impl.some(app => TARGET.includes(app))
    } else {
      return TARGET.includes(impl);
    }
  };

  const cleanApps = (apps) => {
    const irrelevant = Object.keys(apps).filter(app => {
      const conf = apps[app];
      return !(TARGET.includes(app) || isImplies(conf))
    });
    irrelevant.forEach(app => delete apps[app]);
  };

  const apps = getApps();
  cleanApps(apps);
};

module.exports = runCleanUp;