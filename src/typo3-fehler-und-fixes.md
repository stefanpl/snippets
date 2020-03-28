# Typo3 Fehler und mögliche Fixes



SQL Fehler beim Anlegen neuer Content Elemente:
SQL error: 'Incorrect integer value: '' for column 'tx_gridelements_container' at row 1'
Möglicher Fix: sql strict mode ausschalten:
(https://stackoverflow.com/questions/40881773/how-to-turn-on-off-mysql-strict-mode-in-localhost-xampp)
==============
`set global sql_mode='';`


Seltsame MAC ___ Sonderzeichen ganz oben in der Seite (vor eigentlichem HTML Content):
Möglicher Fix:
_.* Files (Mac Leftovers) aus Projekt Ordner löschen:
`rm -rf _.*`


Unexpected end of input: when inserting scripts via typoscript, be sure to remove all `//` double slashes. As the scripts get inlined, they will comment out all code that follows.