
const txt = await Bun.file("inputs/06.txt").text()
const lines = txt.split("\n")
const vals: number[][] = [[]]

const next = (idx: number) => {
    const str = (lines[0]![idx]! + lines[1]![idx]! + lines[2]![idx]! + lines[3]![idx]!).trim()
    if (!str) return undefined
    return Number(str) || 0
}

for (let idx = 0; idx < lines[0]!.length; idx++) {
    const v = next(idx)
    if (v === undefined) {
        vals.push([])
    } else {
        vals[vals.length - 1]?.push(v)
    }
}

const plus = (a: number, b: number) => a + b
const mult = (a: number, b: number) => a * b
const ops = lines[4]!.split(/ +/).filter(Boolean).map(v => v === "+" ? plus : mult) || []

let sum = 0
for (let idx = 0; idx < ops.length; idx++) {
    sum += vals[idx]!.reduce(ops[idx]!)
}

console.log("Result: " + sum)