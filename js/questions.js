// -------------------------------------------------
// QUESTIONS (20 QUESTIONS)
// -------------------------------------------------

const questions = [

  // 1
  [
    "At a penalty kick, the goalkeeper has both feet in front of the goal line at the moment the ball is kicked. The kicker kicks the ball outside above the crossbar. What is the referee’s decision?",
    "Give the goalkeeper a yellow card and retake the penalty kick.",
    "Give the goalkeeper a verbal warning and retake the penalty kick. If he/she repeats the same, show him/her a red card.",
    "Award a goal kick if the goalkeeper’s movement did not impact on the kicker. No disciplinary sanction.",
    "None of the answers above is correct.",
    "C"
  ],

  // 2
  [
    "A player took a free kick quickly, which was intercepted by an opponent who was less than 9.15 m away. What is the referee’s decision?",
    "The referee stops play, cautions the opponent for not respecting the required distance and orders re-take of the free kick.",
    "The referee will allow play to continue as the player took a risk (to gain an advantage) by taking the free kick when an opponent was still within 9.15 m",
    "The referee stops play, cautions the opponent for not respecting the required distance and awards an indirect free kick.",
    "The referee stops play and orders re-take of the free kick. No need to caution the opponent.",
    "B"
  ],

  // 3
  [
    "A defender takes a direct free kick and passes the ball back to a goalkeeper. The goalkeeper fails to kick the ball and does not touch it. After that, the ball enters the goal. What is the correct decision?",
    "Referee awards a goal",
    "The referee awards a corner kick to the opposing team.",
    "The free kick is retaken",
    "Referee applies advantage",
    "B"
  ],

  // 4
  [
    "Under pressure from an attacking team player, a defender deliberately kicks the ball to the goalkeeper. However, because the ball will go into the goal, the goalkeeper handles the ball inside the goal area to prevent a goal. What is the referee’s decision? ",
    "A penalty kick is awarded to the attacking team and no disciplinary sanction to the goalkeeper.",
    "An indirect free kick is awarded to the attacking team which is taken from the nearest point on the penalty area line which runs parallel to the goal line, no disciplinary to the goalkeeper.",
    "An indirect free kick is awarded to the attacking team which is taken from the nearest point on the goal area line which runs parallel to the goal line. The goalkeeper is cautioned.",
    "An indirect free kick is awarded to the attacking team which is taken from the nearest point on the goal area line which runs parallel to the goal line. No disciplinary sanction to the goalkeeper.",
    "D"
  ],

  // 5
  [
    "When the ball is in play, a player leaves the field without the referee’s permission and strikes a spectator. The referee stops play. What is the correct decision?",
    "The player is sent off for violent conduct. Play is restarted with an indirect free kick to the opposing team from the point on the boundary line where the player left the field of play.",
    "The player is sent off for violent conduct. Play is restarted with a dropped ball.",
    "The player is sent off for violent conduct. Play is restarted with a direct free kick or penalty.",
    "The player is sent off for violent conduct. Play is restarted with an indirect free kick to the opposing team from the point where the ball was when the offence occurred.",
    "A"
  ],

  // 6
  [
    "An attacker (Team A) runs with the ball into the opponents’ penalty area. A defender (Team B) challenges the attacker and gains possession of the ball without committing any offence. After that, the defender tries to shield the ball (which is within playing distance), extends their arms and strikes the attacker on the face with the elbow. What is the correct decision?",    
    "The referee awards a penalty kick to Team A",
    "The referee cautions the defender since there was attempt to challenge.",
    "The referee sends off the defender since there is no attempt to challenge.",
    "The referee awards a penalty kick to Team A and cautions or send off the defender depending on the severity of the offence",
    "D"
  ],

  // 7
  [
    "A defending player (Team A) tries to pass the ball to his/her goalkeeper (Team A) but instead plays the ball to an attacking player (Team B) who is in an offside position. After that, the attacker attempts to play the ball and this action impacts on the goalkeeper. What is the referee’s decision?",
    "The referee awards indirect free kick. The attacker (Team B) is considered to have gained an advantage as the defender (Team A) accidentally played the ball.",
    "The referee allows play to continue. The attacker (Team B) is not considered to have interfered with an opponent because the defender (Team A) deliberately played the ball.",
    "The referee allows play to continue. The attacker (Team B) is not considered to have gained an advantage as the defender (Team A) deliberately played the ball.",
    "The referee awards indirect free kick. The attacker (Team B) is considered to have interfered with play.",
    "B"
  ],

  // 8
  [
    "A goalkeeper is injured during penalty kicks and is unable to continue. The team has already used three substitutes. May the injured goalkeeper be replaced?",
    "Yes, the goalkeeper may be replaced by a substitute if the competition rules allow an additional substitute in extra time.",
    "Yes, the goalkeeper may be replaced by a player excluded to equalize the number of players.",
    "Yes, the goalkeeper may be replaced by a team-mate who is on the field.",
    "A, B and C are correct.",
    "C"
  ],

  // 9
  [
    "During penalty shoot-out, after completing the run-up, the kicker feints to kick the ball and, at the same time, the goalkeeper moves off the goal line with both feet. What is the referee’s decision?",
    "The kicker is cautioned and indirect free kick awarded.",
    "Both the kicker and the goalkeeper are cautioned and the kick retaken",
    "The Goalkeeper is given a warning and the kick retaken. If he/she repeats the     same, the goalkeeper gets sent off (red card),",
    "The kick is recorded as missed and the kicker is cautioned (yellow card)",
    "D"
  ],

  // 10
  [
    " A player (Team A) takes the throw-in. After the ball is in play, it hits the referee and leaves the field of play without touching any other player. How is play  restarted?",
    "A dropped ball is awarded to the opponents.",
    "The referee will award a throw-in/corner kick/goal kick to the opponents (Team B),",
    "A goal kick is awarded to the opponents",
    "A throw-in is awarded to the opponents",
    "B"
  ],

  // 11
  [
    "A player kicks the ball that hits the referee and leaves the field. How is play restarted?",
    "A goal kick is awarded to the opponents",
    "A throw-in is awarded to the opponents",
    "A dropped ball is awarded to the opponents.",
    "All the answers can apply.",
    "D"
  ],

  // 12
  [
    "May the referee allow a kick-off after a goal was scored when players of the scoring team are off the field celebrating?",
    "No. For every kick-off all players, except the player taking the kick-off, must be in their own half of the field of play.",
    "Yes so long as the players of the team taking the kick-off are in their own half of the field of play.",
    "No. for every kick-off all players including the player taking the kick-off, must be in their own half of the field of play.",
    "Yes. For every kick-off all players, except the players of the scoring team, must be in their own half of the field of play but.",
    "C"
  ],

  // 13
  [
    "While the ball is in play, a substitute strikes a substitute from the same team outside field of play. How is play restarted?",
    "If advantage cannot be played, restart with a direct free kick on the boundary line nearest to where the offence occurred.",
    "It is a dropped ball. A free kick can only be given if such an offence is committed by a player against an opposing player or a match official.",
    "Dropped ball (not a FK offence as not vs opponent/official)",
    "Indirect free kick on the boundary line nearest to where the offence occurred.",
    "C"
  ],

  // 14
  [
    "From a dropped ball at the center circle, a player dribbles the ball past opponents and scores a goal. What will be the referee’s decision?",
    "Allow the goal since the player touched the ball several times from a long distance and scored.",
    "Disallow the goal if the ball didn’t touch at least two players. Play is restarted with a goal kick or a corner kick.",
    "Disallow the goal if the ball didn’t touch at least two players. Retake the dropped ball.",
    "Disallow the goal if the ball didn’t touch at least two players. Caution the player and play is restarted with a goal kick or a corner kick.",
    "B"
  ],

  // 15
  [
    "The referee is injured during the match and unable to continue. Who will replace the referee?",
    "The Reserve Referee/ Fourth Official",
    "The First Assistant Referee.",
    "The most Senior Assistant Referee.",
    "Competition rules must state clearly who replaces a match official who is unable to start or continue.",
    "D"
  ],

  // 16
  [
    "The referee notices that a player is committing a cautionable (yellow card) offence on the field of play during the warm-up before the kick-off. What is the correct procedure?",
    "The referee cautions, or shows a yellow card to the offending player, as the referee has authority before entering the field of play at the start of the match. The incident is reported to the appropriate disciplinary authorities.",
    "The referee cannot caution, or show a yellow to the offending player, as the offence has occurred before the referee has entered the field of play at the start of the match. The incident is reported to the appropriate disciplinary authorities.",
    "The referee cautions, or shows a yellow card to the offending player, as the referee has authority before entering the field of play at the start of the match. No need to report the incident.",
    "None of the answers above is correct.",
    "B"
  ],

  // 17
  [
    "A player had left the field of play to correct or change equipment and then. returned during play without the referee’s permission. What are the sanction and restart?",
    "A player must be cautioned (yellow card, YC). If play was stopped to issue the YC, it will be restarted with:",
    "A direct free kick (or penalty kick) – from the position of interference, or",
    "An indirect free kick – from the position of the ball when play was stopped (if there was no interference)",
    "All the answers are correct",
    "D"
  ],

  // 18
  [
    "A dog enters the field of play during the match and prevents a goal being. scored by stopping the ball on the goal line. The dog’s interference does not prevent any defending player from playing the ball. What is the referee’s decision?",
    "The referee allows the goal since the dog doesn’t prevent any defending player from playing the ball.",
    "The referee stops play and restarts with a dropped ball for the defending team goalkeeper in their penalty area.",
    "The dog is an ‘outside agent’ so the referee stops play and restarts with a dropped ball for any defending team player in the field of play.",
    "B and C could be correct",
    "B"
  ],

  // 19
  [
    "After the second half has started, the referee notices that during half-time a player changed places and shirts with the goalkeeper without the referee’s permission. What is the referee’s decision?",
    "The referee allows play to continue. Both players are not cautioned (yellow cards are not issued). The matter is reported after the match to the appropriate authorities.",
    "The referee stops play. Cautions both players and restart play with an indirect free kick where the ball was.",
    "The referee allows play but caution both players during the next stoppage and restart play accordingly. The matter is reported after the match to the appropriate authorities.",
    "None of the answers above is correct.",
    "B"
  ],

  // 20
  [
    "After the ball has left the field of play, a substitute (Team A) kicks the ball away to delay the throw-in by the opponents (Team B). The substitute has already been cautioned for another offence. What is the correct decision?",
    "The referee shows a second yellow card and a red card to the substitute who may be replaced. The number of substitutions the team is permitted to make is not reduced. Play is restarted according to the previous decision (the throw-in for Team B).",
    "The referee shows a second yellow card and a red card to the substitute who may not be replaced. The number of substitutions the team is permitted to make is not reduced. Play is restarted with an indirect free kick.",
    "The referee shows a second yellow card and a red card to the substitute who may not be replaced. The number of substitutions the team is permitted to make is not reduced. Play is restarted according to the previous decision (the throw-in for Team B).",
    "The referee sends off the substitute who may not be replaced. The number of substitutions the team is permitted to make is not reduced. Play is restarted according to the previous decision (the throw-in for Team B)",
    "C"
  ],

  
];