module.exports = function solveSudoku(matrix) {
  let newAr = [1, 2, 3, 4, 5, 6, 7, 8, 9]  
  let array = []
  let arrayRow, arrayColumn
  for (let row = 0; row < 9; row++) {
  for (let column = 0; column < 9; column++) {
    if (matrix[row][column] === 0) {
      arrayRow = Math.floor(row / 3) * 3
      arrayColumn = Math.floor(column / 3) * 3
      for (let i = 0; i < 9; i++) {
        array.push(matrix[row][i])
        array.push(matrix[i][column])
        array.push(matrix[arrayRow + i % 3][arrayColumn + Math.floor(i / 3)])
      }
      newAr = newAr.filter(i => array.indexOf(i) == -1 )
      let len = newAr.length
      for (let i = 0; i < len; i++) {
        matrix[row][column] = newAr[i]
        let result = solveSudoku(matrix) 
        if (result != false) {
          return result
        }
      }
      matrix[row][column] = 0
      return false
    }
  }
  }
return matrix;
}