const txt = await Bun.file("inputs/04.txt").text()
const lines = txt.split("\n").map(s => s.split(""))

const nrs: number[][] = []
for (const line of lines) {
    nrs.push(line.map(_ => 0))
}

const get = (x: number, y: number) => lines[y]?.[x] === "@" ? 1 : 0

const fillNr = (x: number, y: number) => {
    const v = get(x, y)
    if (v) {
        const line = nrs[y] || []
        line[x] = [
            get(x + 1, y + 1),
            get(x + 0, y + 1),
            get(x + 1, y + 0),
            get(x - 1, y - 0),
            get(x - 0, y - 1),
            get(x - 1, y - 1),
            get(x + 1, y - 1),
            get(x - 1, y + 1)
        ].reduce((a, b) => a + b, 0)
    }
    return 0
}

const fillAll = () => {
    for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < (lines[y]?.length || 0); x++) {
            fillNr(x, y)
        }
    }
}
const delRolls = () => {
    let dels = 0
    for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < (lines[y]?.length || 0); x++) {
            const v = get(x, y)
            const nr = nrs[y]?.[x] || 0
            if (v && nr < 4) {
                const line = lines[y] || []
                line[x] = "."
                dels++
            }
        }
    }
    return dels
}

let sum = 0
while (true) {
    fillAll()
    const dels = delRolls()
    sum += dels
    if (dels === 0) break
}

console.log("Result: " + sum)
