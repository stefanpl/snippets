# Gitlab Pipelines

## Ohne dependencies/needs

Alle Jobs innerhalb einer Stage laufen parallel. Stages laufen nacheinandner.

## dependencies/needs

- Job startet nicht, bevor **dependencies** als Artefakte zur Verfügung stehen.
- Job startet unabhängig von stage, sobald **needs** erfüllt sind.
