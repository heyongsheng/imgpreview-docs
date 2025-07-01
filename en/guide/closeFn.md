---
outline: deep
---

# Close Event

## Relevant Configuration Options

| Property   | Description                | Type       | Default |
|------------|----------------------------|------------|---------|
| closeFn    | Callback function for closing | `Function` | —       |

## closeFn

The `closeFn` option accepts a callback function that is triggered when the plugin is closed. The returned argument is an object `params`.

### params

| key   | Description      | Notes                                                                 |
|-------|------------------|------------------------------------------------------------------------|
| type  | Action type      | `prev`: previous image<br/>`esc`: closed via the Esc key              |
| way   | Trigger method   | `closeBtn`: close button<br/>`esc`: Esc key<br/>`mask`: clicking the mask |