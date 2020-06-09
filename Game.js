class Game{
    constructor(){}
  gatState(){
      var gameStateref = database.ref(
          'gameState'
      )
  gameStateref.on("value",function(data){gamestate = data.val()})
    }
update(state){
    database.ref('/').update({gameState:state})
}
start(){
    if (gamestate===0){
        player=new Player()
        player.getcCount()
    form=new Form()
    form.display()
    }
}
}