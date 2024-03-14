class Piece {
  constructor(initialLocation, type, color) {
    this.location = initialLocation;
    this.type = type;
    this.color = color;

    // Set the initial piece location on the board
    document.getElementById(this.location).innerHTML = `${
      this.color + this.type
    } <img class='all-pwn' src="assets/${this.color + this.type}.png" alt="">`;
  }

  set location(newLocation) {
    document.getElementById(this.location).innerHTML = "";

    this.location = newLocation;

    // Set the new piece location on the board
    document.getElementById(this.location).innerHTML = `${
      this.color + this.type
    } <img class='all-pwn' src="assets/${this.color + this.type}.png" alt="">`;
  }
}
