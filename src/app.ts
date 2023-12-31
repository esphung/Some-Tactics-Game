// Define characters or units
interface Character {
  name: string;
  health: number;
  damage: number;
}

const player: Character = { name: "Player", health: 100, damage: 20 };
const enemy: Character = { name: "Enemy", health: 100, damage: 15 };

// Variable to track the current turn
let isPlayerTurn: boolean = true;

// Game loop
function gameLoop(): void {
  // Check if the game is still active
  if (player.health > 0 && enemy.health > 0) {
    // Display current turn
    console.log(isPlayerTurn ? "Player's turn" : "Enemy's turn");

    // Perform actions based on the current turn
    if (isPlayerTurn) {
      // Player's turn logic (e.g., attack or special move)
      enemy.health -= player.damage;
      console.log(`Player attacked! Enemy health: ${enemy.health}`);
    } else {
      // Enemy's turn logic (e.g., attack or special move)
      player.health -= enemy.damage;
      console.log(`Enemy attacked! Player health: ${player.health}`);
    }

    // Switch turn for the next round
    isPlayerTurn = !isPlayerTurn;

    // Call the game loop again after a delay (simulating turns)
    setTimeout(gameLoop, 1000);
  } else {
    // Game over
    console.log(player.health > 0 ? "Player wins!" : "Enemy wins!");
  }
}

// Start the game loop
gameLoop();
