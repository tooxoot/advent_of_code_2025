const txt = await Bun.file("inputs/03.txt").text()
const lines = txt.split("\n")
console.log("read")
let sum = 0
for (const line of lines) {
    let digits: number[] = []
    let lastIdx = -1
    while (digits.length < 12) {
        let max = -1
        for (let idx = lastIdx + 1; idx < line.length - (11 - digits.length); idx++) {
            if (Number(line[idx]) > max) {
                max = Number(line[idx])
                lastIdx = idx
            }
        }
        digits.push(max)
    }
    sum += Number(digits.join(""))
}
console.log("Result: " + sum)
