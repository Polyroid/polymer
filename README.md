Meteor Polymer
==============

Polymer lets you build encapsulated, re-usable elements that work just like HTML elements, to use in building web applications.

## Installation

```sh
$ meteor add polyroid:polymer
```

## Usage

```html
<head>
    <link rel="import" href="/packages/polyroid_polymer/polymer.html">
</head>

<body>
    <dom-module id="my-simple-namecard">
        <template>
            <div>
                Hi! My name is <span>Jane</span>
            </div>
        </template>
    
        <script>
            Polymer({
                is: 'my-simple-namecard'
            });
        </script>
    </dom-module>
</body>
```

[More info...](https://github.com/Polymer/polymer)
