const txt = await Bun.file("inputs/04.txt").text()
const lines = txt.split("\n")

const get = (x: number, y: number) => lines[y]?.[x] === "@" ? 1 : 0

const check = (x: number, y: number) => {
    const v = get(x, y)
    if (v) {
        const adj = [
            get(x + 1, y + 1),
            get(x + 0, y + 1),
            get(x + 1, y + 0),
            get(x - 1, y - 0),
            get(x - 0, y - 1),
            get(x - 1, y - 1),
            get(x + 1, y - 1),
            get(x - 1, y + 1)
        ].reduce((a, b) => a + b, 0)
        if (adj < 4) return 1
    }
    return 0
}

let sum = 0
for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < (lines[y]?.length || 0); x++) {
        sum += check(x, y)
    }
}

console.log("Result: " + sum)
