function PlaySlots(numOfQuarters) {

  while (numOfQuarters > 0) {
    var win = Math.random();
    console.log(win);
    console.log(numOfQuarters--);

    if (numOfQuarters === 0){
      return 0;
    }

    if (win < .01) {
      (Math.floor(Math.random()*50)+50);
      console.log(numOfQuarters + Math.floor(Math.random()*50)+50);
      

    }
  }
}

PlaySlots(50);
