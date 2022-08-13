
class Application {
    constructor() {
        this.icon = "default"
    }

    load() {
        return "Empty application"
    }
}


class PyApplication extends Application {
    constructor(cwd) {
        super()

    }

    load(){
        return "Empty!!"
    }
}