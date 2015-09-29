var slaying = true;
var youHit = Math.floor(Math.random() * 10);
var damageThisRound = Math.floor(Math.random() * 10 + 2000000);
var totalDamage = 0;

while (slaying) {
    if (youHit > 1) {
        console.log("You hurt the dragon, jerk! and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            console.log("WOW WHAT KIND OF WEAPONS ARE YOU USING");
            console.log("Your hit did so much damage that it backfires and hits you too")
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You died to the dragon? WHAT! absurd");
        slaying = false;
    }
}