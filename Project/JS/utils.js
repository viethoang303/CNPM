const utils = {
    getParamPath() {
      return new URLSearchParams(window.location.search).get('path')
    },
    genParamPath(name) {
      return `?path=${name}`
    },
    isValidPath(name) {
      return Object.values(paths).includes(name)
    }
}