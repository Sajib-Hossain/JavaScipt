function text(a,b){
    console.log("this function call.......");
    console.log(this);
    console.log(a);
    console.log(b);
}

/** aikhane this print hobe na this print houar jonno
 *(.bind)or (.call) or (.apply) ar maddome first ar this ar data likhe baki gula pass kote hoi*/

text(4,5)

/**call and apply ar modde deferent holo call normali likha jai
 *  bt apply likhle sekhane aurgument a data array ar maddome pass korte hoi */
text.call("sajib",4,5)
text.apply("sajib",[4,5])

var d = text.bind(7);
d(4,5)