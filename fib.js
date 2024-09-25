function climbStairs(n) {
    if (n === 1) return 1; 
    if (n === 2) return 2; 
    if (n === 3) return 4; 

    let ways = []; 
    ways[0]=1;
    ways[1]=1
    ways[2]=2
    ways[3]=4
    for (let i = 4; i <= n; i++) {
       
        ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
    }
    return ways[n]; 
}
console.log(climbStairs(4))
