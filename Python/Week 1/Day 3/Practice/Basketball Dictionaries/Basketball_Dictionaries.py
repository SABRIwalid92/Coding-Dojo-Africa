players = [
    {
        "name": "Kevin Durant",
        "age": 34,
        "position": "small forward",
        "team": "Brooklyn Nets",
    },
    {
        "name": "Jason Tatum",
        "age": 24,
        "position": "small forward",
        "team": "Boston Celtics",
    },
    {
        "name": "Kyrie Irving",
        "age": 32,
        "position": "Point Guard",
        "team": "Brooklyn Nets",
    },
    {
        "name": "Damian Lillard",
        "age": 33,
        "position": "Point Guard",
        "team": "Portland Trailblazers",
    },
    {
        "name": "Joel Embiid",
        "age": 32,
        "position": "Power Foward",
        "team": "Philidelphia 76ers",
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls",
    },
]


class Player:
    def __init__(self, player):
        [name, age, position, team] = player
        self.name = name
        self.age = age
        self.position = position
        self.team = team

    @classmethod
    def get_team(cls, team_list):
        list_of_players = []
        for i in team_list:
            list_of_players.append(Player(i))
        return list_of_players


kevin = {
    "name": "Kevin Durant",
    "age": 34,
    "position": "small forward",
    "team": "Brooklyn Nets",
}
jason = {
    "name": "Jason Tatum",
    "age": 24,
    "position": "small forward",
    "team": "Boston Celtics",
}
kyrie = {
    "name": "Kyrie Irving",
    "age": 32,
    "position": "Point Guard",
    "team": "Brooklyn Nets",
}

# Create your Player instances here!


player_kevin = Player(kevin)
player_jason = Player(jason)
player_kyrie = Player(kyrie)

new_team = []
for i in players:
    new_team.append(i)
print(Player.get_team(players))
