import store from "../store.js";
import PlayerService from "../Services/PlayerService.js";

/**renders all players to the screen */
function _drawNFL() {
  let template = "";
  let players = store.State.allPlayers;
  players.forEach(p => (template += p.Template))
  document.querySelector("#players").innerHTML = template
}

//Public
export default class PlayerController {
  constructor() {
    store.subscribe("allPlayers", _drawNFL)
  }
}
