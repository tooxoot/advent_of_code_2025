const txt = await Bun.file("inputs/09.txt").text()

type P = { x: number, y: number, id: string }
const ps = txt.split("\n").map(l => l.split(",").map(Number)).map(([x, y]) => ({ x, y, id: `${x}${y}` } as P))

const areaOf = (a: P, b: P) => {
    const dx = Math.abs(a.x - b.x) + 1
    const dy = Math.abs(a.y - b.y) + 1
    return dx * dy
}

let maxArea = -1

for (let idx1 = 0; idx1 < ps.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < ps.length; idx2++) {
        const a = ps[idx1]!;
        const b = ps[idx2]!;
        const area = areaOf(a, b)
        if (area > maxArea) maxArea = area

    }
}

console.log("Result: " + maxArea)