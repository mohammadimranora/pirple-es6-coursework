/**
 * @author Mohammad Imran <mohammadimranora@outlook.com>
 * All men are mortal
 * Socrates is a man.
 * Therefore, socrates is mortal.
 */

// Creatig the men collection
let men = ['mohammad', 'shaheen', 'zoya', 'socrates']

// Creating the mortal collection
let mortal = [men];

// allMenAreMortal boolean 
let allMenAreMortal = true;

// man is socrates
let man = 'socrates';

if (allMenAreMortal && mortal.includes(men) && men.includes(man)) {
    console.log(man + ' is mortal');
} else if (allMenAreMortal && mortal.includes(men)) {
    console.log("All men are mortal");
}

/**
 * This cake is either vanilla or chocolate.
 * This cake is not chocolate.
 * Therefore, this cake is vanilla.
 */

// Creating the cakes collection
let cakes = ['vanilla', 'chocolate']
// cake is vanilla
let cake = 'vanilla';

if (cakes.includes(cake) && cake == cakes[0]) {
    console.log('Therefore, this cake is vanilla');
} else if (cakes.includes(cake)) {
    console.log('This cake is either vanilla or chocolate')
} else {
    console.log('This cake is not chocolate');
}
