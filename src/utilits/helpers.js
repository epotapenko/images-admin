export const saveToLocalStorage = (data) => {
    const dataCopy = [...data];
    console.log(dataCopy, 'data copy')

    for(let item in dataCopy) {
        localStorage.setItem(item, JSON.stringify(dataCopy[item]));
    }
}

export const getDataFromLocalStorage = () => {
    let keys = Object.keys(localStorage);
    let index = keys.length;
    let data = [];

    while(index--) {
        data.push(JSON.parse(localStorage.getItem(keys[index])))
    }

    return data;
}