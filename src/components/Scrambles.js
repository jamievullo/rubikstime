import React from 'react'

class Scrambles extends React.Component {
    //need to call this function when timer stops after starting and when the app first runs
    makeScramble() {
        let options = ["F", "F2", "F'", "R", "R2", "R'", "U", "U2", "U'", "B", "B2", "B'", "L", "L2", "L'", "D", "D2", "D'"]
        let numOptions = [0, 1, 2, 3, 4, 5] // 0 = F, 1 = R, 2 = U, 3 = B, 4 = L, 5 = D
        let scramble = []
        let scrambleMoves = []
        let badScramble = true
    
        while (badScramble) {
            scramble = []
            for (let i = 0; i < 20; i++) {
                scramble.push(numOptions[this.getRandomInt(6)])
            }
            // check if moves directly next to each other involve the same number/letter
            for (let i = 0; i < 20 - 1; i++) {
                if (scramble[i] === scramble[i + 1]) {
                    badScramble = true
                    break
                } else {
                    badScramble = false
                }
            }
            console.log(scramble)
        }
        
        // switching numbers to letters
        let move;
        for (let i = 0; i < 20; i++) {
            switch (scramble[i]) {
                case 0:
                    move = options[this.getRandomInt(3)] // 0,1,2
                    scrambleMoves.push(move)
                    break
                case 1:
                    move = options[this.getRandomIntBetween(3, 6)] // 3,4,5
                    scrambleMoves.push(move)
                    break
                case 2:
                    move = options[this.getRandomIntBetween(6, 9)] // 6,7,8
                    scrambleMoves.push(move)
                    break
                case 3:
                    move = options[this.getRandomIntBetween(9, 12)] // 9,10,11
                    scrambleMoves.push(move)
                    break
                case 4:
                    move = options[this.getRandomIntBetween(12, 15)] // 12,13,14
                    scrambleMoves.push(move)
                    break
                case 5:
                    move = options[this.getRandomIntBetween(15, 18)] // 15,16,17
                    scrambleMoves.push(move)
                    break
                default:    //default case with no result
            }
        }
        console.log(scrambleMoves)
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) // returns up to max - 1
    }
    
    getRandomIntBetween(min, max) { // return a number from min to max - 1. Ex. 3, 9 returns 3 - 8
        return Math.floor(Math.random() * (max - min) + min)
    }

    render() {
        return (
            <div style={{display: 'block', fontSize: '1.5em', textAlign: 'center', color: '#364182'}}>
                F, F2, F', R, R2, R', U, U2, U', B, B2, B', L, L2, L', D, D2, D', B, B2
                
            </div>
        )
    }
}

export default Scrambles