import Chance from "chance";

const chance = new Chance();

function getRandomCharacter() {
  const randomCharacter = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    gender: chance.gender(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };

  return randomCharacter;
}

export default function handler(request, response) {
  response.status(200).json(getRandomCharacter());
}
