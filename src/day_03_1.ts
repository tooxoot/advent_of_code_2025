const txt = await Bun.file("inputs/03.txt").text()
const lines = txt.split("\n")

let sum = 0
for (const line of lines) {
    let max = -1
    let maxIdx = -1
    for (let idx = 0; idx < line.length - 1; idx++) {
        if (Number(line[idx]) > max) {
            max = Number(line[idx])
            maxIdx = idx
        }
    }
    let max2 = -1
    let maxIdx2 = -1
    for (let idx = maxIdx + 1; idx < line.length; idx++) {
        if (Number(line[idx]) > max2) {
            max2 = Number(line[idx])
            maxIdx2 = idx
        }
    }
    sum += max * 10 + max2
}
console.log("Result: " + sum)
