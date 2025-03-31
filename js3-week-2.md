# Questions

# What are we doing today?

0. Questions (HW, fetch and JSON)
1. Asynchronous JavaScript
1. Callbacks and "callback hell"
1. What is a Promise?
    - Consumption
    - Creation
1. Async/Await
1. Static methods
1. Proper fetch
1. (Optional) Chaining

## HW

1. `response.json()` and `response.text()`
2. Move loading data to a function

# Asynchronous JavaScript

- What does it mean?
- What examples of "asynchronous" actions in JS you know?
- Why do we need it?

Example: (write examples when named)

## Callbacks

Callback -- function passed as an argument to another function (sync or async).

### 🧠 Task: “The Callback Maze”

You’re building a silly escape room simulation in the browser. The player must go through four rooms, each unlocked by
completing an action after a delay or event. All logic must be implemented using only callbacks (no Promises,
async/await, or libraries).

HTML setup:

```html

<button id="start">Start Escape Room</button>
<div id="output"></div>
```

**📋 Instructions**:

Using **setTimeout** and **event listeners**, implement the following sequence using callbacks:

1. Room 1: When the user clicks “Start”, wait 1 second, then print "Entered Room 1" to the #output div.
2. Room 2: After another 1.5 seconds, simulate finding a key with setTimeout, then print "Found a key in Room 2".
3. Room 3: Wait for the user to click the “Start” button again (simulate using the same button to open a door). When
   clicked, wait 2 seconds and then print "Unlocked Room 3".
4. Room 4: After 1 second, automatically trigger a final challenge – ask the user to press any key (using keydown).
   After the key press, print "Escaped the room!".


<details>
<summary>Possible solution</summary>

```javascript
const startButton = document.getElementById('start');
const output = document.getElementById('output');

function log(message) {
const p = document.createElement('p');
p.textContent = message;
output.appendChild(p);
}

startButton.addEventListener('click', function firstClickHandler() {
// Disable button to prevent spam
startButton.disabled = true;

    setTimeout(() => {
        log("Entered Room 1");

        setTimeout(() => {
            log("Found a key in Room 2");

            // Enable button again for Room 3
            startButton.disabled = false;
            log("Click the button again to unlock Room 3");

            startButton.addEventListener('click', function secondClickHandler() {
                startButton.disabled = true;

                setTimeout(() => {
                    log("Unlocked Room 3");

                    setTimeout(() => {
                        log("Final challenge! Press any key to escape...");

                        document.addEventListener('keydown', function keyHandler() {
                            log("Escaped the room!");

                            // Clean up listener
                            document.removeEventListener('keydown', keyHandler);
                        });

                    }, 1000);
                }, 2000);
            }, { once: true });

        }, 1500);
    }, 1000);

}, { once: true });
```
</details>

# Promises

## What is a Promise?

1. **Promise is an object** that represents the eventual completion (or failure) of an asynchronous operation and its
   resulting value.
    - `result` = value, error
    - `status` = pending, fulfilled, rejected
    - `navigator.getBattery` -- promise
    - `fetch` -- promise
    - once have result and status -- can't change

![img_1.png](img_1.png)

Example: console.log a promise

## Getting result from a Promise

- `then` -- method that takes a function as an argument and calls it when the promise is fulfilled
- `catch` -- method that takes a function as an argument and calls it when the promise is rejected
- `finally` -- method that takes a function as an argument and calls it when the promise is either fulfilled or
  rejected

<details>
<summary>Example: using `then` and `catch` with `fetch` if URL is correct and not correct (`https://yesno.wtf/api`)</summary>

```javascript
fetch('https://yesno.wtf/api')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log({ error }))
  .finally(() => console.log('done!'));
```
</details>

### 🧠 Task: “Mood-Based Joke Fetcher”

You’re building a mini web app that fetches a random joke from an API and updates the UI based on the result. But
there’s a twist: the user can be in a good mood or a bad mood, and the app should behave differently depending on that.

When the user clicks the Get Joke button:

1. Fetch a random joke using fetch('https://official-joke-api.appspot.com/jokes/random')
1. Disable the button when the request is in progress
1. Then, in the next .then(), show the punchline, transformed based on mood:
    - If mood is "good" → show punchline as-is
    - If mood is "bad" → show punchline in uppercase
1. If an error happens (like network error or invalid response), display "Oops! Couldn't get a joke." in red
1. Always re-enable the button and log "Done!" in .finally()

```html

<button id="get-joke">Get Joke</button>
<select id="mood">
    <option value="good">Good Mood</option>
    <option value="bad">Bad Mood</option>
</select>
<div id="output"></div>
```

<details>
<summary>Possible solution</summary>

```javascript
const button = document.getElementById('get-joke');
const select = document.getElementById('mood');
const output = document.getElementById('output');

function displayMessage(text, isError = false) {
   output.innerHTML = '';
   const p = document.createElement('p');
   p.textContent = text;
   p.style.color = isError ? 'red' : 'black';
   output.appendChild(p);
}

button.addEventListener('click', (e) => {
   button.disabled = true;

   fetch('https://official-joke-api.appspot.com/jokes/random')
           .then(response => response.json())
           .then(data => {
              const punchline = select.value === 'bad' ? data.punchline.toUpperCase() : data.punchline;

              displayMessage(data.setup + ' ' + punchline);
           })
           .catch(error => {
              displayMessage('Oops! Couldn\'t get a joke.', true);
           })
           .finally(() => {
              button.disabled = false;
              console.log('done!');
           });
});
```
</details>

### 🧠 Task: “Battery Status Reporter”

You’re building a mini dashboard that checks the user’s battery status using the Battery Status API and gives a message
based on the result.

When the user clicks the Check Battery button:

1. Call `navigator.getBattery()` (returns a Promise).
1. Disable the button while waiting for the battery info.
1. Once the battery info is available:
    - Display the current battery level as a percentage.
    - Display whether the device is charging or not.
1. If the level is below 20% and not charging, display a warning:
   “**⚠️ Low battery! Please plug in your device!**”
1. If anything goes wrong (e.g. battery not supported), show an error message.
1. In `.finally()`, log "Battery check complete" and re-enable the button.

```html

<button id="check-battery">Check Battery</button>
<div id="output"></div>
```

## Async/Await

1. Another way to write the same code
2. Specifically for Functions
    - We can use Promise outside the function, but we can't use async/await outside the function
    - This function **ALWAYS** returns a Promise

Example: implement code from examples with async/await.

Example: Show promise return even from sync functions.

### 🧠 Task: “Mood-Based Joke Fetcher” using Async/Await

<details>
<summary>Possible solution</summary>

```javascript
const button = document.getElementById('get-joke');
const select = document.getElementById('mood');
const output = document.getElementById('output');

function displayMessage(text, isError = false) {
   output.innerHTML = '';
   const p = document.createElement('p');
   p.textContent = text;
   p.style.color = isError ? 'red' : 'black';
   output.appendChild(p);
}

button.addEventListener('click', async (e) => {
   button.disabled = true;

   try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();

      const foo = () => select.value === 'bad' ? data.punchline.toUpperCase() : data.punchline;

      const punchline = foo();
      displayMessage(data.setup + ' ' + punchline);
   } catch (error) {
      displayMessage('Oops! Couldn\'t get a joke.', true);
   } finally {
      button.disabled = false;
      console.log('done!');
   }
});
```
</details>

### 🧠 Task: “Battery Status Reporter” using Async/Await

## Proper "Fetch" implementation

```javascript
const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
    .then(response => {
        if (!response.ok) {
            // Response was received but it's an error status (like 404, 500)
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Valid HTTP response, now parse the JSON
        return response.json();
    })
    .then(data => {
        console.log("Success! Here's your data:");
        console.log(data);
        // You can update the UI here
    })
    .catch(error => {
        console.error("Something went wrong during fetch:");
        console.error(error);
        // You can show a user-friendly error message here
    })
    .finally(() => {
        console.log("Fetch attempt complete.");
        // Cleanup actions, re-enabling buttons, etc.
    });
```

### 🧠 Task: Implement proper "fetch" logic using Async/Await

## Promise creation

1. `new Promise` -- constructor
2. No analog in `async/await` :(

Example: create a promise that resolves after 2 seconds and rejects after 3 seconds

### 🧠 Task: “Guess the Secret Number”

You’re building a mini-game where the user tries to guess a secret number between 1 and 5.
The system will simulate checking the guess using a delay (with setTimeout) and respond with success or failure using a
custom Promise.

✅ **Requirements**

1. When the user clicks the **"Guess"** button:
    - Get the number from the input field.
    - Create a **new Promise** that:
        - Waits **1 second** using `setTimeout`
        - Compares the guessed number to a **secret number** (hardcoded in your code, e.g. `3`)
        - If the guess is correct, **resolve** the Promise with a success message.
        - If the guess is wrong, **reject** the Promise with an error message.
2. Use `.then()` to display a success message.
3. Use `.catch()` to display an error message.
4. Use `.finally()` to always show the message: `"➕ Try again!"`

```html
<input type="number" id="guess" placeholder="Enter a number (1-5)" min="1" max="5"/>
<button id="submit">Guess</button>
<div id="output"></div>
```

### 🧠 Task: “The Callback Maze”: Async version

Rewrite the "The Callback Maze" task using Promises.

## [Self-study] Static methods

- How to resolve (and "subscribe" for the result) several promises at once?

### ⚔️ Task: Fast or Fails

You’ve been given 3 fake API functions that simulate real-world async behavior.  
Your job is to coordinate them using different **static Promise methods** and handle their results properly.

Your task is to test these fake APIs using:

- `Promise.all()`
- `Promise.allSettled()`
- `Promise.race()`

Render results in the `div#output`.

```html

<button id="run-test">Run Promise Test</button>
<div id="output"></div>
```

```javascript
function getRandomDelay() {
    return Math.floor(Math.random() * 2000) + 1000; // 1000 to 3000 ms
}

function fetchWeather() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("☀️ Weather: Sunny");
        }, getRandomDelay());
    });
}

function fetchUserInfo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("👤 User: John Doe");
        }, getRandomDelay());
    });
}

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.5; // 50% chance
            if (success) {
                resolve("🗞️ News: Market is up!");
            } else {
                reject("🚫 News failed to load");
            }
        }, getRandomDelay());
    });
}
```
