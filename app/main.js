import PlayerController from "./Controllers/PlayerController.js"

class app {
  playerController = new PlayerController()
}

window["app"] = new app();
