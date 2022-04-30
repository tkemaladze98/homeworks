const getTable = (row, col) => {
    let table = [];
    let index = 1;
    for (var i = 0; i < col; i++) {
        if (i == 0) {
            for (var j = 0; j < row; j++) {
                var tmpArray = [];
                tmpArray.push(index)
                table.push(tmpArray);
                index ++;
            }
        }else if(i % 2 != 0){
            for(var j = row - 1; j >= 0; j--){
                table[j].push(index);
                index++;
            }
        }else{
            for(var j = 0; j < row; j++){
                table[j].push(index);
                index++;
            }
        }
    }
    return table;
}
