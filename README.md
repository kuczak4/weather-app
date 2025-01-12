Weather App 🌦️
Opis projektu
Weather App to aplikacja webowa typu Single Page Application (SPA) stworzona w technologii React.js. Aplikacja umożliwia użytkownikowi:

Wyszukiwanie aktualnych danych pogodowych dla dowolnego miasta.
Wyświetlanie pogody dla popularnych miast (Nowy Jork, Tokio, Paryż).
Dynamiczne tło i animacje dostosowane do warunków pogodowych.
Aplikacja została stworzona jako projekt zaliczeniowy. Pełny kod źródłowy dostępny jest w repozytorium GitHub:
👉 Weather App - Zaliczenie

Technologie i narzędzia
Technologie:
React.js – framework JavaScript do budowy dynamicznych interfejsów.
Axios – biblioteka do obsługi zapytań HTTP.
HTML5, CSS3 – struktura i stylowanie aplikacji.
JavaScript (ES6) – logika aplikacji.
Narzędzia:
Node.js – środowisko uruchomieniowe JavaScript.
npm – zarządzanie paczkami.
Git i GitHub – kontrola wersji i hosting kodu.
OpenWeather API – źródło danych pogodowych.

Funkcjonalności
Wyszukiwanie pogody:
Użytkownik może wpisać nazwę miasta i uzyskać dane o temperaturze, warunkach pogodowych i inne szczegóły.
Przykład zapytania do API:

javascript
Skopiuj kod
axios.get('https://api.openweathermap.org/data/2.5/weather', {
  params: {
    q: 'London',
    appid: 'TWÓJ_API_KEY',
    units: 'metric',
  },
});

Popularne miasta:
Aplikacja domyślnie wyświetla pogodę dla kilku predefiniowanych miast: Nowy Jork, Tokio, Paryż.

Dynamiczne tło i animacje:

Tło aplikacji zmienia się w zależności od pogody.
Pliki GIF dla warunków pogodowych (np. słonecznie, deszczowo, śnieg) znajdują się w folderze public/gifs.
Responsywność:
Aplikacja działa poprawnie na różnych urządzeniach i ekranach.

Problemy i rozwiązania
1. Niepoprawne dane wejściowe
Problem: Gdy użytkownik wpisuje nieistniejące miasto, API zwraca błąd.
Rozwiązanie: Dodano obsługę błędów i komunikat dla użytkownika:

"City not found. Please try again."

Wykorzystanie OpenWeather API
Aplikacja korzysta z API OpenWeather do pobierania danych pogodowych. Kluczowe elementy:

Endpoint: https://api.openweathermap.org/data/2.5/weather
Parametry:
q: nazwa miasta.
appid: klucz API (wymagany).
units: jednostki metryczne.
Przykładowe dane zwracane przez API:

json
Skopiuj kod
{
  "name": "London",
  "main": {
    "temp": 12.34,
    "humidity": 80
  },
  "weather": [
    {
      "description": "clear sky",
      "icon": "01d"
    }
  ]
}
Autor
Kacper Góras 160533 CW5
GitHub: kuczak4
