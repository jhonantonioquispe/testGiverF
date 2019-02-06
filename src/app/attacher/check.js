function voteWinner(votes)
{
  let candidatesVotes = {}
  for(let i =0;i<votes.length; i++) {
    if(candidatesVotes[votes[i]]== undefined) {
      candidatesVotes[votes[i]] =1;
    } else {
      candidatesVotes[votes[i]] +=1;
    }
  }
  let max = 0;
  let arrayUniqueNames = [];
  for(let c in candidatesVotes) {
    if(candidatesVotes[c]>max) {
        max = candidatesVotes[c];
        arrayUniqueNames = [c];
    } else if (candidatesVotes[c]==max) {
        arrayUniqueNames.push(c);
    }    
  }

  if(arrayUniqueNames.length>1) {
      arrayUniqueNames.sort();
      return arrayUniqueNames[arrayUniqueNames.length-1];
  } else return arrayUniqueNames[0];

  // Please write your code here.
}
//const votesCount = parseInt(readline(), 10)
let votes = [
    "Glenn",
    "Juan",
    "Juan",
    "Juan",
    "Emily",
    "Emily",
    "Emily",
    "Glenn",
    "Glenn"]
    votes.sort()
    
// for (let i = 0; i < votesCount; i++) {
//   const votesItem = readline()
//   votes.push(votesItem)
// }
console.log(voteWinner(votes))