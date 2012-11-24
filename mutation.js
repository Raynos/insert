module.exports = mutation

function mutation(list) {
    list = list.map(replaceStringWithTextNode)

    if (list.length === 1) {
        return list[0]
    }

    var frag = document.createDocumentFragment()
    list.forEach(appendToFragment, frag)
    return frag
}

function replaceStringWithTextNode(string) {
    if (typeof string === "string") {
        return document.createTextNode(string)
    }

    return string
}

function appendToFragment(elem) {
    this.appendChild(elem)
}
