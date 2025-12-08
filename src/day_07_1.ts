
const txt = await Bun.file("inputs/07.txt").text()
const lines = txt.split("\n").map(l => l.split(""))

let sum = 0
for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[0]!.length; x++) {
        const str = lines[y]![x]!
        const up = lines[y - 1]?.[x]! || "."

        if (str === ".") {
            if (up === "S" || up === "|") {
                lines[y]![x] = "|"
            }
        }
        if (str === "^") {
            if (up === "S" || up === "|") {
                lines[y]![x - 1] = "|"
                lines[y]![x + 1] = "|"
                sum++
            }
        }
    }
}

console.log("Result: " + sum)