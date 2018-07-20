module.exports = {
    media: (url) => {
        let mediaMatch = /^@media-/
        if (mediaMatch.test(url)) {
            return url.replace(mediaMatch, 'https://onface.live/design/media/')
        }
        return url
    },
    package: (Component) => {
        const comment = {
          install: function(Vue) {
            Vue.component(Component.name, Component)
          }
        }
        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.use(comment)
        }
        return comment
    }
}
