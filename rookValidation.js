function rookValidation(initialSpace, newSpace, pieceType) {

    if (initialSpace[0] === newSpace[0] && initialSpace[1] === newSpace[1]) {
        return false
    }

    if (initialSpace[1] === newSpace[1] && initialSpace[0] < newSpace[0]) { // Rook is moving on x axis right
        for (i = parseInt(initialSpace[0]) + 1; i <= parseInt(newSpace[0]); i++) { // Loop through spaces
            if (document.getElementById(i + newSpace[1]).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[0])) {  // If last space
                    // If own color return false
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {
                        return false
                    } 
                }
                // Space is not empty and this is not the last space, piece tried to jump, return false
                else {
                    return false
                } 
            }
        }
    }

    if (initialSpace[1] === newSpace[1] && initialSpace[0] > newSpace[0]) { // Rook is moving on x axis left
        for (i = parseInt(initialSpace[0]) - 1; i >= parseInt(newSpace[0]); i--) { // Loop through spaces
            if (document.getElementById(i + newSpace[1]).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[0])) {  // If last space
                    // If own color return false
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {
                        return false
                    } 
                }
                // Space is not empty and this is not the last space, piece tried to jump, return false
                else {
                    return false
                } 
            }
        }          
    }
    
    if (initialSpace[0] === newSpace[0] && initialSpace[1] < newSpace[1]) { // Rook is moving on y axis forward
        for (i = parseInt(initialSpace[1]) + 1; i <= parseInt(newSpace[1]); i++) { // Loop through spaces
            if (document.getElementById(initialSpace[0] + i).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[1])) {  // If last space
                    // If own color return false
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {
                        return false
                    } 
                }
                // Space is not empty and this is not the last space, piece tried to jump, return false
                else {
                    return false
                } 
            }
        }          
    }

    if (initialSpace[0] === newSpace[0] && initialSpace[1] > newSpace[1]) { // Rook is moving on y axis backward
        for (i = parseInt(initialSpace[1]) - 1; i >= parseInt(newSpace[1]); i--) { // Loop through spaces
            if (document.getElementById(initialSpace[0] + i).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[1])) {  // If last space
                    // If own color return false
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {
                        return false
                    } 
                }
                // Space is not empty and this is not the last space, piece tried to jump, return false
                else {
                    return false
                } 
            }
        }          
    }
    // Check for rook vertical or horizotal move
    return (parseInt(initialSpace[0]) === parseInt(newSpace[0]) || parseInt(initialSpace[1]) === parseInt(newSpace[1]))        
}