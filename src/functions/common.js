export function toCapital(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
}

//Takes string and convert it to array of key words for searching,
//and array of strings in that stract => [{queryString:String, id:'Number'}]
//returns an filtered array with the relevant Strings by order from
//the most relevant to the most unrelevant
export function searchByKeyWords(searchString, stringsArr) {
    const searchArr = searchString.toLowerCase().split(' ')
    let counters = new Array(stringsArr.length).fill(0)
    if (searchArr) {
        stringsArr.map(item => searchArr.forEach(word => {
            if (word && (item.cityName.toLowerCase().includes(word.toLowerCase()) || item.country.toLowerCase().includes(word.toLowerCase()))) {
                counters[stringsArr.indexOf(item)] += 1
            }
        }))
    }
    let filtered = []
    for (let i = 0; i < counters.length; i++) {
        if (counters.reduce((sum, a) => sum + a, 0)) {
            let index = counters.indexOf(Math.max(...counters))
            filtered.push(stringsArr[index])
            counters[index] = 0
        }
    }
    return filtered
}