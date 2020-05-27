// Copyright (C) 2017-2020 Smart code 203358507

const { ChromecastVideo, HTMLVideo, YouTubeVideo, withStreamingServer, withHTMLSubtitles } = require('stremio-video');

const selectVideoImplementation = (args) => {
    // TODO handle stream.behaviorHints
    // TODO handle IFrameVideo
    // TODO handle MPVVideo

    if (args.chromecastTransport && args.chromecastTransport.getSessionState() === cast.framework.SessionState.SESSION_STARTED) {
        return ChromecastVideo;
    }

    if (args.stream && typeof args.stream.ytId === 'string') {
        return withHTMLSubtitles(YouTubeVideo);
    }

    return withHTMLSubtitles(withStreamingServer(HTMLVideo));
};

module.exports = selectVideoImplementation;
