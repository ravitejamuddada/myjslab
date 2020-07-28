/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
**/


//--------------------------SOLution-----------------------------------------

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
   // ------------sol1
    let valid = true;
    
    const validate = digits => {
        digits = digits.filter(v => v !== '.').map(n => Number(n)).sort((a, b) => a - b);
        
        for(let k = 0; k < digits.length -1; k++) {
            if(digits[k] === digits[k+1]) {
                valid = false;
                return valid;
            }
        }
    }
    
    // validate rows
    for(let r = 0; r < board.length; r++) {
        let digits = board[r]
        
        validate(digits);
    }
    
    // validate cols
    for(let c = 0; c < board[0].length; c++) {
        let digits = [];
        
        for(let k = 0; k < board.length; k++) {
            digits.push(board[k][c]);
        }
        
        validate(digits);
    }
    
    // validate 3x3
    for(let r = 0; r < board.length; r+=3) {
        for(let c = 0; c < board[0].length; c+=3) {
            let digits = [];
            for(let k = 0; k < 3; k++) {
                for(let n = 0; n < 3; n++) {
                    digits.push(board[r+k][c+n]);
                }
            }
            
            validate(digits);
        }
    }
    
    return valid;
    
    //--sol2-----------
//      let rows = new Set()
//     let cols = new Set()
//     let boxes = new Set()
    
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             let currRowElement = board[i][j]
//             let currColElement = board[j][i]
//             let currBoxElement = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]
            
//             //Make sure the current row, column, and box all don't have the current element
//             if (rows.has(currRowElement)) {
//                 return false
//             }
//             if (currRowElement !== '.') {
//                 rows.add(currRowElement)
//             }
            
//             if (cols.has(currColElement)) {
//                 return false
//             }
//             if (currColElement !== '.') {
//                 cols.add(currColElement)
//             }
            
//             if (boxes.has(currBoxElement)) {
//                 return false
//             }
//             if (currBoxElement !== '.') {
//                 boxes.add(currBoxElement)
//             }
//         }
//         //Clear everything once we enter a new box
//         rows.clear()
//         cols.clear()
//         boxes.clear()
//     }
    
//     return true
};
