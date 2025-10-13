class Player:
    """Basic player class for storing fantasy football player data"""
    
    def __init__(self, name, position, team):
        self.name = name
        self.position = position
        self.team = team
        self.stats = {}
    
    def add_stat(self, stat_name, value):
        """Add a statistic to the player's record"""
        self.stats[stat_name] = value
    
    def get_overall_score(self):
        """Calculate overall fantasy score - placeholder for now"""
        return sum(self.stats.values()) if self.stats else 0
