const txt = await Bun.file("inputs/02.txt").text()
const ranges = txt.split(",")

let sum = 0

for (const range of ranges) {
    const [id1, id2] = range.split("-")
    let current = Number(id1)
    const end = Number(id2)
    while (current <= end) {
        const id = String(current)
        if (id.length % 2 === 0) {
            const half = id.length / 2
            if (id.substring(0, half) === id.substring(half)) {
                sum += current
            }
        }
        current++
    }
}

console.log("Result: " + sum)
