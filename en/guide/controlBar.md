---
outline: deep
---

# Bottom Control Bar

## Related Configuration Options

| Property     | Description       | Type     | Default      |
|--------------|-------------------|----------|--------------|
| controlBar   | Bottom control bar | `array` or `boolean` | `boolean` |

## controlBar

We use the `controlBar` option to control whether the bottom control bar appears and what order its items appear in. The logic is:

- Show all control items — default behavior, no need to set
- Hide the entire bar — `controlBar: false`
- Show only specific controls — e.g. `controlBar: ['zoomOut', 'zoomIn', 'help']`

### Available Controls

| key           | Description           | Notes                   |
|---------------|------------------------|--------------------------|
| zoomOut       | Zoom out               | —                        |
| zoomIn        | Zoom in                | —                        |
| rotateLeft    | Rotate left            | —                        |
| customRotate  | Custom rotate          | —                        |
| rotateRight   | Rotate right           | —                        |
| reset         | Reset                  | —                        |
| prev          | Previous image         | Only works when multiple images are enabled |
| next          | Next image             | Only works when multiple images are enabled |
| download      | Download               | —                        |
| help          | Keyboard shortcuts hint| Only active when shortcuts are enabled |

:::tip

The order you list the control items will determine their display order in the UI

:::