

class SeachController {
    

    constructor() {
        this.setupBindings()
    }

    setupBindings() {
        const categories = document.getElementsByClassName("search-category-item")
        for(const categoryTag of categories) {
            categoryTag.onclick = () => {
                this.clickedCategory(categoryTag.getAttribute("data"))
            }
        }
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