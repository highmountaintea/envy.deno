# envy

`envy` allows transparent access to both `environment variables` and `.env` file.

## Description

Applications access environment variables differently based on situation:
* During development, an application obtains environment variables via the `.env` file
* In production, an application obtains shell environment variables via `Deno.env`

Ideally, the application code to access environment variables should be the same whether it is via `.env` file or via `Deno.env`.

`envy` makes that possible.

## Usage

```js
import { load } from "https://deno.land/x/envy/mod.ts";

const env = await load();

console.log(env["PORT"]);
```

`envy` loads both the `.env` file and the `Deno.env` object, then combine them into a single object. The application can then access the environment variables transparently. It follows these rules:
* It follows deno convention by using the standard library to load `.env` behind the scene
* If `.env` file does not exist, it simply ignores it and proceeds
* If the same variable exists in multiple places, shell environment variable takes precedence.
* `envy` creates a new object to hold the loaded environment variables, without modifying the `Deno.env` object.
