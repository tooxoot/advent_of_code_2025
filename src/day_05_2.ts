
const txt = await Bun.file("inputs/05.txt").text()
const lines = txt.split("\n")

const ranges: number[][] = []

let lIdx = 0
while (true) {
    if (!lines[lIdx]?.trim()) break
    ranges.push(lines[lIdx]?.split("-").map(Number) || [])
    lIdx++
}

ranges.sort((a, b) => a[0]! - b[0]!)

for (let idx = 1; idx < ranges.length; idx++) {
    const rm = ranges[idx - 1]!;
    const r = ranges[idx]!;
    if (r[0]! <= rm[1]! && r[1]! <= rm[1]!) {
        // complete overlap
        ranges.splice(idx, 1)
        idx--
    } else if (r[0]! <= rm[1]!) {
        // partial overlap
        r[0] = rm[1]! + 1
    }

}

let sum = 0
for (const r of ranges) {
    // ranges are inclusive -> +1
    const count = r[1]! - r[0]! + 1
    sum += count
}



console.log("Result: " + sum)
