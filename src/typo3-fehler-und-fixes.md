# Typo3 Fehler und mögliche Fixes

SQL Fehler beim Anlegen neuer Content Elemente:
SQL error: 'Incorrect integer value: '' for column 'tx_gridelements_container' at row 1'
Möglicher Fix: sql strict mode ausschalten:
(https://stackoverflow.com/questions/40881773/how-to-turn-on-off-mysql-strict-mode-in-localhost-xampp)
==============
`set global sql_mode='';`

Seltsame MAC _\_\_ Sonderzeichen ganz oben in der Seite (vor eigentlichem HTML Content):
Möglicher Fix:
_._ Files (Mac Leftovers) aus Projekt Ordner löschen:
`rm -rf \_._`

Unexpected end of input: when inserting scripts via typoscript, be sure to remove all `//` double slashes. As the scripts get inlined, they will comment out all code that follows.

## Typo3 Templates reagieren nicht mehr auf Anpassungen:

- Die Tabelle sys_template speichert im Feld "config" Änderungen an den Templates
- Leider werden dabei Änderungen nicht überschrieben, sondern angehäuft, sodass früher oder später das Feld "voll" ist und einfach abgeschnitten wird
  --> Inhalt von sys_template.config (im entsprechenden Datensatz) rauskopieren, von Duplikaten befreien, letzte fehlerhafte Reihe löschen
