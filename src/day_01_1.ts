const txt = await Bun.file("inputs/01.txt").text()
const lines = txt.split("\n")

let position = 50
let count = 0

for (const line of lines) {
    const value = (line[0] === "R" ? 1 : -1) * Number(line.substring(1))
    position = (position + value) % 100
    if (position === 0) count++
}

console.log("Result: " + count)
