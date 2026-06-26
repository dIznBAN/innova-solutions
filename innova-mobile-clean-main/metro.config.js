const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web' && moduleName === 'react-native-svg') {
    return context.resolveRequest(context, 'react-native-svg/src/ReactNativeSVG.web', platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
