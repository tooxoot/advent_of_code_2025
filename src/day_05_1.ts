const txt = await Bun.file("inputs/05.txt").text()
const lines = txt.split("\n")

const ranges: number[][] = []
const ids: number[] = []

let lIdx = 0
while (true) {
    if (!lines[lIdx]?.trim()) break
    ranges.push(lines[lIdx]?.split("-").map(Number) || [])
    lIdx++
}
lIdx++
while (true) {
    if (!lines[lIdx]) break
    ids.push(Number(lines[lIdx]))
    lIdx++
}

let sum = 0
for (const id of ids) {
    for (const r of ranges) {
        if (r[0]! <= id && r[1]! >= id) {
            sum++
            break
        }
    }
}

console.log("Result: " + sum)