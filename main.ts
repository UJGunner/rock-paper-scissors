function update_score_board () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 score" + Player_1_score)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 score" + player_2_score)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + number_of_ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + number_of_rounds_played)
}
input.onButtonPressed(Button.A, function () {
    Player_1_score += 1
})
input.onButtonPressed(Button.AB, function () {
    number_of_ties += 1
})
input.onButtonPressed(Button.B, function () {
    player_2_score += 1
})
input.onGesture(Gesture.Shake, function () {
    OLED.writeStringNewLine("Game on")
})
let player_2_score = 0
let Player_1_score = 0
let number_of_ties = 0
let number_of_rounds_played = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Game on")
number_of_rounds_played = 0
number_of_ties = 0
Player_1_score = 0
player_2_score = 0
basic.pause(2000)
update_score_board()
