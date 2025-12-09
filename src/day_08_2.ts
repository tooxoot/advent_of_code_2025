const txt = await Bun.file("inputs/08.txt").text()

type P = { x: number, y: number, z: number, id: string }
const ps = txt.split("\n").map(l => l.split(",").map(Number)).map(([x, y, z]) => ({ x, y, z, id: `${x}${y}${z}` } as P))

let shortest: [number, P, P][] = []
const sort = () => shortest.sort((a, b) => a[0]! - b[0]!)

const dist = (a: P, b: P) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2)

for (let idx1 = 0; idx1 < ps.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < ps.length; idx2++) {
        const a = ps[idx1]!
        const b = ps[idx2]!
        const d = dist(a, b)
        shortest.push([d, a, b])
    }
}
sort()


const pToc = new Map<string, number>()
const cTop = new Map<number, P[]>()

let nr = 1
const insert = (p1: P, p2: P) => {
    let v1 = pToc.get(p1.id)
    let v2 = pToc.get(p2.id)
    if (!v1 && !v2) {
        // add new circuit
        const newC = nr++
        pToc.set(p1.id, newC)
        pToc.set(p2.id, newC)
        cTop.set(newC, [p1, p2])

    } else if (v1 === v2) {
        return
    } else if (v1 && v2) {
        // merge curcuits
        const ps1 = cTop.get(v1)
        const ps2 = cTop.get(v2)
        ps2!.forEach(p => {
            pToc.set(p.id, v1)
            ps1!.push(p)
        })
        cTop.delete(v2)
    } else if (v1 || v2) {
        // add to defined circuit
        const definedV = (v1 || v2)!
        const undefinedP = ((!v1 && p1) || (!v2 && p2)) as P
        const defPs = cTop.get(definedV)
        defPs!.push(undefinedP)
        pToc.set(undefinedP.id, definedV)
    }


}
let sum = 0

for (const arr of shortest) {
    insert(arr[1], arr[2])
    if (pToc.size === ps.length && cTop.size === 1) {
        sum = arr[1].x * arr[2].x
        break
    }
}

console.log("Result: " + sum)