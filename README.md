# Text to Speech 
Jednoduchá aplikace převádějící text na řeč vytvořena s pomocí Azure a Reactu. Aplikace je jednoduše expandovatelná na podporu více jazyků. Z aplikace si také můžete vzít pouze modul přímo na převod textu na řeč a následně tento modul využít jinde. 
## Konfigurace
V aplikaci můžete konfigurovat mnoho věcí. Od jazyka, rychlosti řeči až po kvalitu. Tyto věci můžete konfigurovat <a href="https://github.com/MicrosoftSTC/text-to-speech-azure/blob/main/src/TextToSpeech/SpeechSynthesis.js">v tomto souboru.</a>
### Příklad konfigurace
Změna výšky a rychlosti řeči. Změňte tuto část kódu
> <prosody rate="10%" pitch="0%"

Na
> <prosody rate="100%" pitch="100%"

Tímto změníte výšku hlasu a rychlost přehrávání. Všechna nastavení můžete nalézt zde: https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/#features
## Příkazy
> Nainstalujte dependencies
```
npm i
```
> Vytvořte `.env` soubor v rootu projektu a vložte do něj váš Azure klíč v tomto formátu
```
REACT_APP_AZUREKEY=vasazureklic
```
> Spusťte lokální vývojářský server
```
npm run start
```
## Learning
Článek na blogu stc coming soon
