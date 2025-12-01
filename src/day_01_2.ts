const txt = await Bun.file("inputs/01.txt").text()
const lines = txt.split("\n")

let otherCount = 0
let dial = 50

for (const line of lines) {
    const increment = line[0] === "R" ? 1 : -1
    let steps = Number(line.substring(1))
    while (steps > 0) {
        dial += increment
        if (dial === 100) dial = 0
        if (dial === -1) dial = 99
        if (dial === 0) otherCount++
        steps--
    }
}

console.log("Result: " + otherCount)
