let i = 0;
while (i <= 8) {
    i++;
    for (let j = 1; j < 9; j++) {
        if (i % 2 == 1) {
            if (j % 2 == 1) {
                console.log('#',end='');
            }
            else {
                console.log(' ',end='');
            }
        }
        else if (i % 2 == 0) {
            if (j % 2 == 1) {
                console.log(' ',end='');
            }
            else {
                console.log('#',end='');
            }
        }
    console.log("");
    }
    if i == 8:
        break;
}