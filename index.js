export function getCollatz(num){
    if(Number.isInteger(num) == false){
        throw new Error("Not a number");
    }
    let target = num;
    const chains = []
    while(target != 1){
        chains.push(target)
        if (Math.floor(target / 2) == target / 2){
            target = target / 2
        }else{
            target = (3 * target) + 1
        }
    }
    chains.push(1)
    chains.forEach((e) => {
        console.log(e)
    })
}