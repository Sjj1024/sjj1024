import random


def create_teams(players, team_count=4):
    random.shuffle(players)
    teams = {chr(65 + i): [] for i in range(team_count)}
    for i, player in enumerate(players):
        teams[chr(65 + (i % team_count))].append(player)
    return teams


def simulate_match(team1, team2):
    return random.choice([team1, team2])


def tournament(teams):
    while len(teams) > 1:
        matchups = list(teams.keys())
        random.shuffle(matchups)
        next_round = {}
        print("Matchups:")
        for i in range(0, len(matchups), 2):
            if i + 1 < len(matchups):
                winner = simulate_match(matchups[i], matchups[i + 1])
                print(f"{matchups[i]} vs {matchups[i + 1]} -> Winner: {winner}")
                next_round[winner] = teams[winner]
            else:
                next_round[matchups[i]] = teams[matchups[i]]
                print(f"{matchups[i]} automatically advances to next round")
        teams = next_round
    return list(teams.keys())[0]


if __name__ == "__main__":
    players = [f"Player {i + 1}" for i in range(12)]
    teams = create_teams(players)
    print("Teams:")
    for team, members in teams.items():
        print(f"{team}: {members}")

    winner = tournament(teams)
    print(f"\nChampion Team: {winner}")
