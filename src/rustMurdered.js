// Todo: find more efective way
// upgrade adjacency array and try BFS
function rustMurdered(n, roads, s) {
    const allDestinations = Array.from(Array(n + 1).keys()).slice(1).filter(item => item !== s)
    const searchedDestinations = allDestinations.filter(item => item !== s)

    const connection = {}

    roads.forEach(road => {
        const cityA = road[0];
        const cityB = road[1];

        const currentEndsA = connection[cityA] || []
        const currentEndsB = connection[cityB] || []

        connection[cityA] = [...currentEndsA, cityB]
        connection[cityB] = [...currentEndsB, cityA]
    })

    const getDistance = (from, to, currentDistance = 0) => {
        const possibleConnections = allDestinations.filter(dest => dest !== from && !connection[from]?.includes(dest))

        if (possibleConnections.includes(to)) {
            return currentDistance + 1
        }

        const distances = possibleConnections.map(city => getDistance(city, to, currentDistance + 1))

        return distances.sort()[0]
    }


    const distances = searchedDestinations.map((city) => {
        return getDistance(s, city)
    })

    console.log('distances', distances)
    return distances
}

const testCase = [
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 4],
    [2, 5],
    [3, 5]
]
const result = rustMurdered(5,testCase, 1)
console.log('result', result)