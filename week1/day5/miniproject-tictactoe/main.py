def display_board(board):
    """Display the Tic Tac Toe board."""
    print(f"\n{board[0]} | {board[1]} | {board[2]}")
    print("--+---+--")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("--+---+--")
    print(f"{board[6]} | {board[7]} | {board[8]}\n")

def player_input(player, board):
    """Get the position from the player."""
    while True:
        try:
            move = int(input(f"Player {player}, choose your position (1-9): ")) - 1
            if move < 0 or move > 8:
                raise ValueError("Invalid position, please choose a number between 1 and 9.")
            if board[move] != ' ':
                print("This position is already taken! Choose another one.")
            else:
                board[move] = player
                break
        except ValueError as e:
            print(e)

def check_win(board):
    """Check if there is a winner."""
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]  
    ]
    
    for combination in winning_combinations:
        if board[combination[0]] == board[combination[1]] == board[combination[2]] != ' ':
            return True
    return False

def check_tie(board):
    """Check if the game ends in a tie."""
    return ' ' not in board

def play():
    """Main game function."""
    board = [' ' for _ in range(9)]  
    players = ['X', 'O']  
    turn = 0  
    
    while True:
        display_board(board)
        player_input(players[turn % 2], board)  
        
        if check_win(board):
            display_board(board)
            print(f"Player {players[turn % 2]} wins!")
            break
        
        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break
        
        turn += 1  


if __name__ == "__main__":
    play()
