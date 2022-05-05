function swap(array,i,j){
    [array[i],array[j]] = [array[j],array[i]]
}

// 冒泡排序
function bubbleSort(array) {
    const length = array.length
    for(let i = 0; i < length;i++) {
        let flag = true // 假设每一次进来都排好了
        for(let j = 0; j < length -1 - i;j++) {
            if(array[i] > array[i+1]) {
                flag = false // 如果两位比较还满足前面的比后面的大的时候，说明假设不成立
                swap(array,j,j+1)
            }
        }
        if(flag) { // 最后判断一下，如果假设推翻不了，就停止运行。
            break
        }
    }
    return array
}

// 选择排序
function selectSort(array) {
    let length = array.length
    for(let i = 0;i<length-1;i++){
        let minIndex = i // 每一趟遍历都记录下最小值的下标
        for(let j = i;i<length;j++){
            if(array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        if(minIndex !== i) {
            swap(array,i,minIndex)
        }
    }
    return array
}

// 插入排序
function insertionSort(array) {
    let length = array.length
    for(let j = 1;j<length;j++){
        let i = j
        let target = array[i]
        while(i>0 && array[i - 1] > targer) {
            array[i] = array[i-1]
            i--
        }
        array[i] = target
    }
    return array
}