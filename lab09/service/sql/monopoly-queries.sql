--
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author kvlinden
-- @version Summer, 2015
--
-- get the top score for specific player
SELECT MAX(score)
FROM Player, PlayerGame
WHERE Player.ID = PlayerGame.playerID
AND Player.ID = 3 --3 is just an ex
GROUP BY Player.ID, PlayerGame.playerID

-- this is another way of doing the same thing
-- SELECT score
-- FROM Player, PlayerGame
-- WHERE Player.ID = PlayerGame.playerID
--   AND Player.ID = 3
--   ORDER BY score DESC
--   LIMIT 1
--   ;