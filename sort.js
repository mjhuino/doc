function swap(array,i,j){
    [array[i],array[j]] = [array[j],array[i]]
}

// 冒泡排序
function bubbleSort(array) {
    const length = array.length
    for(let i = 0; i < length;i++) {
        for(let j = 0; j < length -1 - i;j++) {
            if(array[i] > array[i+1]) {
                swap(array,j,j+1)
            }
        }
    }
    return array
}