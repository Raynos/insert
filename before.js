var toArray = require("to-array")

    , mutation = require("./mutation")

module.exports = before

function before(sibling) {
    var node = mutation(toArray(arguments, 1))
        , parent = sibling.parentNode

    parent.insertBefore(node, sibling)
}
