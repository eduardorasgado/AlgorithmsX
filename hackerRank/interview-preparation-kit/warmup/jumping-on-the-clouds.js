// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let cLength = c.length;
    if(cLength <= 2) return 1;

    let minimumSteps = 0;
    let currentCloud = 0;
    let canditateCloud = 2;
    while (currentCloud < cLength - 1) {
        if(c[currentCloud + canditateCloud]) --canditateCloud;
        currentCloud += canditateCloud;
        canditateCloud = 2;
        ++minimumSteps;
    }
    return  minimumSteps;
}

// correct: 3
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
// correct: 4
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
// correct: 3
console.log(jumpingOnClouds([0, 0, 0, 0, 0, 1, 0]));
