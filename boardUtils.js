function setupBoard() {
  var pieces = [];

  pieces.push(new Piece(11, Color.WHITE, Type.ROOK));
  pieces.push(new Piece(21, Color.WHITE, Type.KNIGHT));
  pieces.push(new Piece(31, Color.WHITE, Type.BISHOP));
  pieces.push(new Piece(41, Color.WHITE, Type.QUEEN));
  pieces.push(new Piece(51, Color.WHITE, Type.KING));
  pieces.push(new Piece(61, Color.WHITE, Type.BISHOP));
  pieces.push(new Piece(71, Color.WHITE, Type.KNIGHT));
  pieces.push(new Piece(81, Color.WHITE, Type.ROOK));
  
  pieces.push(new Piece(12, Color.WHITE, Type.PAWN));
  pieces.push(new Piece(22, Color.WHITE, Type.PAWN));
  pieces.push(new Piece(32, Color.WHITE, Type.PAWN));
  pieces.push(new Piece(42, Color.WHITE, Type.PAWN));
  pieces.push(new Piece(52, Color.WHITE, Type.PAWN));
  pieces.push(new Piece(62, Color.WHITE, Type.PAWN));
  pieces.push(new Piece(72, Color.WHITE, Type.PAWN));
  pieces.push(new Piece(82, Color.WHITE, Type.PAWN));

  pieces.push(new Piece(17, Color.BLACK, Type.PAWN));
  pieces.push(new Piece(27, Color.BLACK, Type.PAWN));
  pieces.push(new Piece(37, Color.BLACK, Type.PAWN));
  pieces.push(new Piece(47, Color.BLACK, Type.PAWN));
  pieces.push(new Piece(57, Color.BLACK, Type.PAWN));
  pieces.push(new Piece(67, Color.BLACK, Type.PAWN));
  pieces.push(new Piece(77, Color.BLACK, Type.PAWN));
  pieces.push(new Piece(87, Color.BLACK, Type.PAWN));

  pieces.push(new Piece(18, Color.BLACK, Type.ROOK));
  pieces.push(new Piece(28, Color.BLACK, Type.KNIGHT));
  pieces.push(new Piece(38, Color.BLACK, Type.BISHOP));
  pieces.push(new Piece(48, Color.BLACK, Type.QUEEN));
  pieces.push(new Piece(58, Color.BLACK, Type.KING));
  pieces.push(new Piece(68, Color.BLACK, Type.BISHOP));
  pieces.push(new Piece(78, Color.BLACK, Type.KNIGHT));
  pieces.push(new Piece(88, Color.BLACK, Type.ROOK));

  return pieces;
}
