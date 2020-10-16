// utility (attack impact)
// between 1 to 6
const powerAttack = () => {
    return Math.round(Math.random() * 5 + 1);
}

// attack effect (health remaining)
function hitKnight(ele) {
    let diceVal = powerAttack();
    let health = ele - diceVal;
    console.log("@@@@@ Attack power: ", diceVal);
    return health<=0 ? 0 : health;
}

const knightBattle = () => {
  
  let i = 0, j; // i starts hitting, j gets killed.
  let morgueRoom = [0, 0, 0, 0, 0, 0]; // 0 = not killed
  let healthReport = [100, 100, 100, 100, 100, 100]; // 0 = no health left (out of the battle)
  let N = morgueRoom.length;

  let tmp = 0; // tmp var

  // battle starts
  while(1){
    console.log("******************** Health Report is: ******************** ", healthReport);
    if(i != N-1) j = i + 1;
    else j = 0;
    while(morgueRoom[j])
      if((j + 1) == N) j = 0; // loop back to 0
      else if(healthReport[j] < 1) j++; // skip over the killed people
    if(i === j){ // if i is the only one left, stop
      console.log("===================== WINNER IS ===================== ", i+1);
      return;
    }
    
    tmp = healthReport[j];
    healthReport[j] = hitKnight(tmp); // update the health report 
    
    if(healthReport[j] < 1){
    	morgueRoom[j] = 1; // kill j (send knight to morgue)
    }

    console.log("-------------------- :D Knight: "+(i+1) +" hits "+ (j+1) +" Knight :( --------------------");
    if(j != N-1) i = j + 1;
    else i=0;
    while(morgueRoom[i])
      if((i + 1) == N) i = 0;
      else i++;

    console.log("xxxxxxxxxxxxxxxxxxxx Morgue List is: xxxxxxxxxxxxxxxxxxxx ", morgueRoom);
  }

  console.log("Hushhhh at last BATTLE ENDS .....");
};
