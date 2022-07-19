const makeBurger = () => {
    return getBeef()
      .then(beef => cookBeef(beef))
      .then(cookedBeef => getBuns(beef))
      .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef));
  };
  
  // Make and serve burger
  makeBurger().then(burger => serve(burger));
  