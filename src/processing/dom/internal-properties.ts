// -------------------------------------------------------------
// WARNING: this file is used by both the client and the server.
// Do not use any browser or node-specific API!
// -------------------------------------------------------------

export default {
    processDomMethodName:      'hammerhead|process-dom-method',
    processedContext:          'hammerhead|processed-context',
    documentWasCleaned:        'hammerhead|document-was-cleaned',
    documentCharset:           'hammerhead|document-charset',
    iframeNativeMethods:       'hammerhead|iframe-native-methods',
    hammerhead:                '%hammerhead%',
    selection:                 'hammerhead|selection',
    shadowUIElement:           'hammerhead|shadow-ui-element',
    forceProxySrcForImage:     'hammerhead|image|force-proxy-src-flag',
    skipNextLoadEventForImage: 'hammerhead|image|skip-next-load-event-flag',
    cachedImage:               'hammerhead|image|cached-image'
};
