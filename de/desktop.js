


class Desktop {
    constructor() {
        this.searchController = new SeachController()

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
            new Webbrowser(), // Tabs show current link in the search view
            new Terminal(),
            new MarkdownEditor(),
            new Calcpro(),
            new IDE()
        ]
    }
}




/**
 * 
 * # `Alt` - Independent on what app is currently focused

- `Alt` `1-9` - Change workspace
- `Alt` (`→`, `←`) - Switch workspace 
- `Alt` `L` - Search in bookmarks of open url in surf (or other webbrowser)
- `Alt` `Shift` `Enter` - Span new terminal 
- `Alt` `Shift` `Q` - Logout, quit desktop environment
- `Alt` `Swift` `D` - Lock screen
- `Alt` `P` - App launcher
- `Alt` `O` - Search for file to open
-  ` - General search
- `Alt` `Shift` (`↑`, `↓`) Vomume up 

# `Alt` - Extra

- `Alt` `Tab` `A-Z` - Open program in empty workspace that is assigned to the letter or switch to workspace where the program is opened
- `Alt` `Tab` `P` - Web browser - Search page
- `Alt` `Tab` `E` - web browser - Defadult plain text editor

# `CMD` - Related to focused window/app
- `CMD` `,` - Preferences
- `CMD` `C` - Copy
- `CMD` `V` - Paste
- `CMD` `X` - Cut
- `CMD` `O` - Open file
- `CMD` `Z` - Undo
- `CMD` `Shift` `Z` - Redo
- `CMD` `Ctrl` `O` - open project/workspace
- `CMD` `Q` - Quit current open file/tab but not exiting program
- `CMD` `Shift` `C` - Close app
- `CMD` `T` - New tab
- `CMD` `F` - Search in the current file
- `CMD` `Shift` `F` - Search in the whole project
- `CMD` `Shift` `O` - Search for file
- `CMD` `Shift` `K` - Search in simbols
- `CMD` `Shift` `H` - Search hisotry
- `CMD` `Shift` `M` - Search in commands/options
- `CMD` `S` - Save opened file - but by default all files are saved on change
- `CMD` `R` - Reload page
- `CMD` `E` - Export
- `CMD` `B` - Build default project
- `CMD` `Enter` - Run default project
- `Shift` `Enter` - Send
- `CMD` `Shift` `Enter` - Span terminal inside IDE
- `CMD` `Shift` `1-9` - Move focused window to another space (anf probably we shold follow it)
- `CMD` (`→`, `←`) jump to beggining/end of the line
- `CMD` `Shift` (`→`, `←`) Forward backward
- `CMD` `Shift` (`→`, `←`) - Select till beggining/end line
- `CMD` (`[`, `]`) - Intent
- `CMD` `Shift` (`[`, `]`) - Switch tab
- `CMD` `N` - New file
- `CMD` `Shift` `N` - New Project
- `CMD` `Shift` (`+`, `-`) Zoom-in Zoom-out  
- `CMD` `Shift` (`↑`, `↓`) Go to very up/go very down (Home/End)
 */