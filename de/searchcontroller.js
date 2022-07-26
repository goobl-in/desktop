

class DuckduckGoRepository {

    async searchWithKeyword(keyword) {
        return await fetch(`https://sources.debian.org/api/search/${keyword}/`)
            .then(r => r.json())
            .then(r => {
                const results = r.results.other
                const exact = r.results.exact
                if (exact != null) {
                    results.append(exact)
                }
                return results
            })
            .then(r => r.flatMap(t => t).slice(0,10))
            //.then(l => console.log(l))
    }
}

// class SearchRepository {

// }

// class ObjectsRepository extends SearchRepository {
//     constructor() {
//         this.name = "objects"
//     }

//     getObjectWithClass(className) {

//     }

//     searchWithKeyword(keyword) {
        
//     }
// }


class SeachController {
    

    constructor() {
        this.setupBindings()
        this.searchEngines = {
            "others": new DuckduckGoRepository()
        }

        this.searchEngine = null
    }

    setupBindings() {
        const categories = document.getElementsByClassName("search-category-item")
        for(const categoryTag of categories) {
            categoryTag.onclick = () => {
                const searchEngineName = categoryTag.getAttribute("data")
                this.clickedCategory(searchEngineName)
                this.searchEngine = this.searchEngines[searchEngineName]
            }
        }
        document
            .getElementById("search-field")
            .addEventListener("input", (e) => this.performSearchWithKeyword(e.currentTarget.textContent), false)

    }

    performSearchWithKeyword(keyword) {
        this.searchEngine.searchWithKeyword(keyword).then(result => {
            console.log(result)
        })
    }

    clickedCategory(name) {
        const categoryTags = Array.from(document.getElementsByClassName("search-category-item"))
        const clickedElement = categoryTags
            .filter(e => {
                return e.getAttribute("data") === name
            })[0]
        for (const categoryTag of categoryTags) {
            if (categoryTag != clickedElement) {
                categoryTag.classList.remove("search-category-item-selected")
            } else if (clickedElement.getAttribute("data") == name) {
                clickedElement.classList.add("search-category-item-selected")
            }
        }
    }
}