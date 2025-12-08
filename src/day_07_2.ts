
const txt = await Bun.file("inputs/07.txt").text()
const lines = txt.split("\n").map(l => l.split(""))

const upAsint = (x: number, y: number) => {
    const up = lines[y - 1]?.[x]! || "."

    if (up === "S") return 1
    if (Number.isSafeInteger(Number(up))) return Number(up)
    return 0
}

let sum = 0
for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[0]!.length; x++) {
        const str = lines[y]![x]!

        if (str !== "^") {
            const int = upAsint(x, y)
            if (int) lines[y]![x] = String((Number(lines[y]![x]) || 0) + int)
        }
        if (str === "^") {
            const int = upAsint(x, y)
            if (int) {
                lines[y]![x - 1] = String((Number(lines[y]![x - 1]) || 0) + int)
                lines[y]![x + 1] = String((Number(lines[y]![x + 1]) || 0) + int)
            }
        }
    }
}

for (const p of lines[lines.length - 1]!) {
    sum += Number(p) || 0
}

console.log("Result: " + sum)