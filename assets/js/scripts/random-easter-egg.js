const easterEggBtn = document.getElementById('easterEggsBtn');

// chooses a random easter egg and execute it
easterEggBtn.addEventListener('click', () => {
	const easterEggList = ['bravo(true)', 'britney(true)', 'doggy(true)', 'ghost(true)', 'gun(true)', 'koggy(true)', 'money(true)', 'pikachu(true)', 'runningCat(true)', 'runningPikachu(true)', 'sonic(true)', 'spongebob(true)', 'homer(true)', 'dog(true)', 'bird(true)', 'piqiu(true)', 'lol(true)', 'ohhh(true)', 'nyancat(true)', 'salamander(true)', 'airguitar(true)', 'dragon(true)', 'psyduck(true)', 'piggy(true)', 'sensei(true)', 'rabbit(true)', 'joker(true)', 'mario(true)', 'fox(true)', 'jump(true)', 'tank(true)', 'winner(true)', 'handsome(true)', 'penguin(true)', 'swim(true)', 'thankyou(true)', 'earth(true)', 'fly(true)', 'snorlax(true)', 'board(true)', 'haters(true)', 'onmyway(true)', 'no(true)', 'kirby(true)', 'hangover(true)', 'balloon(true)', 'cool(true)', 'walk(true)', 'ufo(true)', 'pie(true)', 'pokeball(true)', 'hippo(true)', 'hiphop(true)', 'robot(true)', 'bat(true)', 'travel(true)', 'haha(true)', 'kumamon(true)', 'unicorn(true)', 'wink(true)', 'hi(true)']
	const randomIndex = Math.floor(Math.random() * easterEggList.length);
	eval(easterEggList[randomIndex]);
});