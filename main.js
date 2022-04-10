// let story;

// function setup(){
//     createCanvas(500, 500);
//     background("gray");
//     story = createP(`It was a dark and stormy night.`);
//     story.position(20, 0);
// }

// Nursery Rhymes from https://www.nurseryrhymes.org/nursery-rhymes.html

// A Sailor Went to Sea
const sailor = 
    "A sailor went to sea, sea, sea To see what he could see, see, see But all that he could see, see, see Was the bottom of the deep blue sea, sea, sea! A sailor went to knee, knee, knee To see what he could knee, knee, knee But all that he could knee, knee, knee Was the bottom of the deep blue knee, knee, knee! Sea, sea, sea) A sailor went to chop, chop, chop To see what he could chop, chop, chop But all that he could chop, chop, chop Was the bottom of the deep blue chop, chop, chop!";
// Five Little Monkeys
const monkeys =
  "Five little monkeys jumping on the bed One fell off and bumped his head Mama called the doctor and the doctor said: No more monkeys jumping on the bed! Four little monkeys jumping on the bed One fell off and bumped his head Mama called the doctor and the doctor said: No more monkeys jumping on the bed! Three little monkeys jumping on the bed One fell off and bumped his head Mama called the doctor and the doctor said: No more monkeys jumping on the bed! Two little monkeys jumping on the bed One fell off and bumped his head Mama called the doctor and the doctor said: No more monkeys jumping on the bed! One little monkey jumping on the bed He fell off and bumped his head Mama called the doctor and the doctor said: No more monkeys jumping on the bed! Now there's no little monkeys jumping on the bed. They`re all jumping on the sofa instead!";
// Jack and Jill
const jack_and_jill =
  "Jack and Jill went up the hill To fetch a pail of water. Jack fell down and broke his crown, And Jill came tumbling after. Up Jack got, and home did trot, As fast as he could caper, He went to bed to mend his head With vinegar and brown paper.";
// It's Raining, it's Pouring
const raining =
  "It's raining, it's pouring. The old man is snoring. He bumped his head and went to bed And he couldn't get up in the morning.";
// hansel and gretel minus chunks
const hansel_and_gretel =
  "Hard by a great forest dwelt a poor wood-cutter with his wife and his two children. The boy was called Hansel and the girl Gretel. He had little to bite and to break, and once when great dearth fell on the land, he could no longer procure even daily bread. Now when he thought over this by night in his bed, and tossed about in his anxiety, he groaned and said to his wife: ‘What is to become of us? How are we to feed our poor children, when we no longer have anything even for ourselves? Hansel said to Gretel: ‘We shall soon find the way,’ but they did not find it. They walked the whole night and all the next day too from morning till evening, but they did not get out of the forest, and were very hungry, for they had nothing to eat but two or three berries, which grew on the ground. Suddenly the door opened, and a woman as old as the hills, who supported herself on crutches, came creeping out.  Witches have red eyes, and cannot see far, but they have a keen scent like the beasts, and are aware when human beings draw near. When Hansel and Gretel came into her neighbourhood, she laughed with malice, and said mockingly: When he is fat, I will eat him.’ Gretel began to weep bitterly, but it was all in vain, for she was forced to do what the wicked witch commanded.And now the best food was cooked for poor Hansel, but Gretel got nothing but crab-shells. Every morning the woman crept to the little stable, and cried: ‘Hansel, stretch out your finger that I may feel if you will soon be fat.’ Hansel, however, stretched out a little bone to her, and the old woman, who had dim eyes, could not see it, and thought it was Hansel’s finger, and was astonished that there was no way of fattening him. When four weeks had gone by, and Hansel still remained thin, she was seized with impatience and would not wait any longer. ‘Now, then, Gretel,’ she cried to the girl, ‘stir yourself, and bring some water. ‘The door is big enough; just look, I can get in myself!’ and she crept up and thrust her head into the oven. Then Gretel gave her a push that drove her far into it, and shut the iron door, and fastened the bolt. Oh! then she began to howl quite horribly, but Gretel ran away and the godless witch was miserably burnt to death.Gretel, however, ran like lightning to Hansel, opened his little stable, and cried: ‘Hansel, we are saved! The old witch is dead!’ Then Hansel sprang like a bird from its cage when the door is opened. How they did rejoice and embrace each other, and dance about and kiss each other! And as they had no longer any need to fear her, they went into the witch’s house, and in every corner there stood chests full of pearls and jewels. ‘These are far better than pebbles!’ said Hansel, and thrust into his pockets whatever could be got in, and Gretel said: ‘I, too, will take something home with me,’ and filled her pinafore full. ‘But now we must be off,’ said Hansel, ‘that we may get out of the witch’s forest.’When they had walked for two hours, they came to a great stretch of water. ‘We cannot cross,’may make himself a big fur cap out of it.;"
// Monster House Summary from https://www.imdb.com/title/tt0385880/plotsummary
 const monster_house =
  "13-year-old DJ is observing his neighbor Nebbercracker on the other side of the street in the suburb that destroys tricycles of children that trespass his lawn. When DJ's parents travel on the eve of Halloween and the abusive babysitter Zee stays with him, he calls his clumsy best friend Chowder to play basketball. But when the ball falls in Nebbercracker's lawn, the old man has a heart attack, and soon they find that the house is a monster. Later the boys rescue the smart Jenny from the house and the trio unsuccessfully tries to convince the babysitter, her boyfriend Bones and two police officers that the haunted house is a monster, but nobody believes them. The teenagers ask their video-game addicted acquaintance Skull how to destroy the house, and they disclose its secret on the Halloween night.";
// My random dark stormy jibberish
const dark_jibberish =
    "The elves were found giggling below the cursed tree. Five times they were watching the show. The doctor didn't want to do it. The doctor wishes he could die. The doctor cut open her head. Five more cuts. Little more than a tomb stone. monkeys are dangerous. the bed broke. went tumbling down the cliff. witches cried and screamed. Her knee was broken. chop away the limb of the tree. His knee fell off. Sea was rough and unkind. water poured. Nebbercracker the old man. Nebbercracker dies. What happens when a werewolf finds himself floundering around the husky bushes and brambles? Night stars prick the sky. Hansel said it was dark. Gretle said it was dark. Dead is dying and dead will be dead. Stop moving. It is coming for us, and it will come to get you too! What are you waiting for? Be sure that you use the knife said Hansel. What ever will we do? It was dark. It could have been dark and dark or dark or dark and stormy and stormy and dark and stormy. It was dark and scary I thought everyone was going to die. Do you know what happened on a dark and stormy night? Death. Everyone dies. Or there are lightning strikes and angry monsters with monsters that make monsters out of all of the people. The rain came down like monsters. It was important to keep them on their toes, for if they were caught it would surely be the end of them. The snakes coiled around the bird. There was a house on a hill. The house was scary. The trees grumbled. Angry trees made wind blow loudly. The wind whistled and my ears hurt. My eyes were bleeding. My ears were bleeding. The world was bleeding. My, my. Even the grass was angry. Monkeys angrily jumped. Monkeys hatefully made monkeys spitefully did it when Monkeys fell down the hill and down we go into the abyss of hell. The fall is long and the rocks are sharp. Sharp rocks cut open the friendly monster."

const model = generateModel(monster_house, jack_and_jill, monkeys, sailor, raining, dark_jibberish);
const output_text = generateText(model);

document.body.innerHTML = `It was a dark and stormy night. ${output_text}`;
// console.log(output_text);

// creates a markov chain model based on one or more input strings
function generateModel(...args) {
  const words = args.join(" ").split(" ");
  const model = {};

  // loop through all the words except the last one.
  for (let i = 0; i < words.length - 1; i++) {
    const target_word = words[i];
    const next_word = words[i + 1];

    // if the model doesn't contain the target word, add it.
    if (!model[target_word]) {
      model[target_word] = [];
    }

    // add the next word to the possibilities for target_word
    model[target_word].push(next_word);
  }

  return model;
}

function generateText(model, first_word) {
  // if first_word isn't provided use a random word in the model object
  first_word = first_word || sample(Object.keys(model));

  // start with the word passed in
  let output_text = first_word;
  let current_word = first_word;
  for (let i = 0; i < 120; i++) {
    // choose the next word by sampling from options in the model
    current_word = sample(model[current_word]);

    // append word to output
    output_text += " ";
    output_text += current_word;

    // if we get to a word that ends with "." we are done.
    const last_character = current_word.substr(current_word.length - 1);
    if (last_character === ".") {
      break;
    }
  }
  return output_text;
}

function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
