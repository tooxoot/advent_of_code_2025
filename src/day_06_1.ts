
const txt = await Bun.file("inputs/06.txt").text()
const lines = txt.split("\n").map(line => line.split(/ +/))
const vals = [
    lines[0]?.map(Number) || [],
    lines[1]?.map(Number) || [],
    lines[2]?.map(Number) || [],
    lines[3]?.map(Number) || [],
]
const plus = (a: number, b: number) => a + b
const mult = (a: number, b: number) => a * b
const ops = lines[4]?.map(v => v === "+" ? plus : mult) || []

let sum = 0
for (let idx = 0; idx < lines[0]!.length; idx++) {
    sum += vals.map(v => v.at(idx)!).reduce(ops[idx]!)
}

console.log("Result: " + sum)