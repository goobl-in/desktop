

class Webbrowser extends Application {
    constructor() {
        super()
        this.icon = "webbrowser"
    }

    load() {
        return `<webview id="foo" src="https://www.github.com/" style="display:inline-flex; width:100%; height:100%"></webview>`
    }
}