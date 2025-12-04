const txt = await Bun.file("inputs/02.txt").text()
const ranges = txt.split(",").map(r => r.split("-").map(Number))

let sum = 0

for (const range of ranges) {
    for (let nr = range[0] || 0; nr <= (range[1] || 0); nr++) {
        let str = String(nr)
        let half = str.length / 2
        for (let repLen = 1; repLen <= half; repLen++) {
            if (str.length > repLen && str.length % repLen === 0) {
                if (str.slice(0, repLen).repeat(str.length / repLen) === str) {
                    sum += nr
                    break
                }
            }

        }
    }
}

console.log("Result: " + sum)
