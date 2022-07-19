

class Webbrowser extends Application {
    constructor() {
        super()
        this.icon = "webbrowser"
    }

    load() {
        return `webbrowser app <iframe src="https://google.com"></iframe>`
    }
}