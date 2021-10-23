-- Lab08 - 22 October 2021
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author kvlinden
-- @version Summer, 2015
-- Edited by Kun Kang

-- Get a list of all the games, ordered by date with the most recent game coming first.
SELECT *
  FROM Game
  ORDER BY time DESC
  ;

-- Get all the games that occurred in the past week.
SELECT * 
  FROM Game
  WHERE time >= '2021-10-15'
  ;

-- Get a list of players who have (non-NULL) names.
SELECT *
  FROM Player
 WHERE name IS NOT NULL
 ;

-- Get a list of IDs for players who have some game score larger than 2000.
  SELECT playerID, score
    FROM PlayerGame
    WHERE score > 2000
   ;

-- a list of players who have GMail accounts.
SELECT *
  FROM Player
  WHERE emailAddress LIKE '%gmail%'
  ;


-- 8.2
-- Retrieve all “The King”’s game scores in decreasing order.
SELECT score
FROM Player, PlayerGame
WHERE Player.ID = PlayerGame.playerID
  AND Player.name = 'The King'
ORDER BY score DESC;

-- Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
SELECT name
  FROM Player, PlayerGame, Game
  WHERE playerID = PlayerGame.playerID
    AND PlayerGame.gameID = game.ID
    AND Game.time = timestamp '2006-06-28 13:20:00'
--So what does that P1.ID < P2.ID clause do in the last example query (from SQL Examples)?
  -- It is making sure that you only get results from each one only once

--The query that joined the Player table to itself seems rather contrived. 
--Can you think of a realistic situation in which you’d want to join a table to itself?
    -- In a situation where you would want to compare results of players in the same table