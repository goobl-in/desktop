


class Desktop {
    constructor() {
        this.loadApplications()
        this.startApplications()
        
        setInterval(() => {
            this.updateViewForDateTime(new Date())
        }, 1000)
    }

    updateViewForDateTime(date) {
        const dateTimeTag = document.getElementById("date-time")
        var datestring = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        dateTimeTag.innerHTML = datestring
    }

    startApplications() {
        const appsTag = document.getElementById("apps")
        for(const app of this.applications) {
            const appIcon = document.createElement("img")
            appIcon.style.width = "1.5em"
            appIcon.style.height = "1.5em"
            appIcon.style.paddingLeft = "0.2em"
            appIcon.style.paddingRight = "0.2em"
            appIcon.src = `assets/images/${app.icon}.svg`
            appIcon.application = app

            appIcon.onclick = () => {
                this.makeAppActive(app)
            }

            appsTag.appendChild(appIcon)
        }
    }

    makeAppActive(app) {
        const appsTag = document.getElementById("apps")
        for(const appTag of appsTag.childNodes) {
            if (app === appTag.application) {
               appTag.style.backgroundColor = "red"
            } else {
                appTag.style.backgroundColor = ""
            }
            
        }

        document.getElementById("app-canvas").innerHTML = app.load()
    }

    handleKeyboardShortcut(event) {

    }

    loadApplications() {
        this.applications = [
            new Settings(),
            new Filebrowser(),
            new Webbrowser(),
            new Terminal(),
            new MarkdownEditor(),
            new Calcpro(),
            new IDE()
        ]
    }
}

