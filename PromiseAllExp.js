
p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'p5 result');
});

// p5.then(value => console.log(value)).catch(err => console.log(err));

	p1 = Promise.resolve(50);
	p2 = 200
	p3 = new Promise(function(resolve, reject) {
		setTimeout(resolve, 1000, 'geek');
	}, 1000);

    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Resolved First after 1 second");
        }, 1000);
      });

	Promise.all([p1, p2, p3, p4, p5]).then(function(values) {
		console.log(values)
	}).catch(err => console.log("error found = "+err));

