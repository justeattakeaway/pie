const youtubeVideo = ({
    videoId,
    aspectRatio = '16 / 9',
    autoPlay = false,
    mute = false,
}) => {
    if (!videoId) throw new Error('The "videoId" prop is required');

    return `<iframe class="c-youtubeVideo" style="aspect-ratio: ${aspectRatio};" src="https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&mute=${mute ? 1 : 0}"></iframe>`;
};

module.exports = youtubeVideo;
