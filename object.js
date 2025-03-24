 const football = {
    teamname:'manchester united',
    player:'cristiano ronaldo',
    stadium:'old trafford',
    profession:'football player',
    title:'The Best FIFA Mens Player',
    phonenumber:'555-001',
    address:{
        street:'123 main street',
        city:'manchester',
        state:'england',
    },
    greet(){
        return`hello ${this.address.state}. my name is ${this.player}. i am a professional ${this.profession}`
    },
 };
 console.log(football.greet());
//  in order to add keyvalue
football['age']='25'
football.linkedinid='something'
 console.log(football)
//  for specific value we use the dot notation
    console.log(football.address.state)
    delete football.phonenumber
    console.log(football)
    // object does not save the variable however it save the address of the variable if you are copying the object in a new object and whenyou change the value of variable it will change in the new object as well.
    const socer=football
    socer.player='messi'
    console.log(football)
    const object1={
        name:'john',
    }
const object2=object1;
const object3={
    name:'john',
}
console.log(object1===object2);
console.log(object1===object3);
