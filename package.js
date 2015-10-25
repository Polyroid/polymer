Package.describe({
    name: 'polyroid:polymer',
    version: '1.2.0',
    summary: 'Polymer lets you build encapsulated, ' +
    're-usable elements to use in building web applications.',
    git: 'git@github.com:Polyroid/polymer.git'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:webcomponentsjs@0.7.2'
    ], 'client');

    api.addAssets([
        'polymer.html',
        'polymer-mini.html',
        'polymer-micro.html'
    ], 'client');
});
