# Junior AI Developer

## Opis Aplikacji

Aplikacja służy do przetwarzania artykułu tekstowego, który jest zapisany w pliku artykul.txt, i generowania kodu HTML, który strukturalnie przedstawia ten artykuł. Wygenerowany HTML będzie zawierał odpowiednie tagi semantyczne. Aplikacja wykorzystuje API OpenAI do przetwarzania artykułu na HTML, a także zapisuje wynik w pliku artykul.html.

## Instrukcja uruchomienia

### Instalacja zależności

Przed uruchomieniem aplikacji należy zainstalować wymagane pakiety. Otwórz terminal i przejdź do katalogu, w którym znajduje się aplikacja, a następnie uruchom polecenie:

```bash
npm install
```

### Ustawienie klucza API OpenAI

Aplikacja wymaga klucza API OpenAI. Utwórz plik .env w głównym katalogu aplikacji. W pliku .env dodaj linię:

```bash
OPENAI_API_KEY = twoj_klucz_api
```

Uwaga: Zastąp twoj_klucz_api rzeczywistym kluczem API.

### Uruchomienie aplikacji

Po skonfigurowaniu klucza API i przygotowaniu artykułu, uruchom aplikację za pomocą poniższego polecenia:

```bash
node src/index.js
```

## Działanie aplikacji

Aplikacja:

- Wczyta artykuł z pliku artykul.txt,
- Prześle artykuł do API OpenAI,
- Wygeneruje odpowiedni kod HTML,
- Zapisze wynik w pliku artykul.html.

## Podgląd

Pliki szablon.html oraz podglad.html zostały już wygenerowane:

- szablon.html - zawiera pustą strukturę HTML, która jest gotowa do wklejenia artykułu w sekcji <body>.
- podglad.html - zawiera pełny artykuł, który został przekonwertowany do odpowiedniego formatu HTML. 
