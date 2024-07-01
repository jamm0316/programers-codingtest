function solution(brown, yellow)  {
    const totalTiles = brown + yellow
    
    for (let height = 3; height <= Math.sqrt(totalTiles); height++) {
        let width = totalTiles / height
        
        if ((width - 2) * (height - 2) === yellow) {
            return [width, height]
        }
    }
}
