Package.describe({
    name: 'riaan53:blueimp-canvas-to-blob',
    summary: 'Convert canvas elements into Blob objects',
    version: '0.0.1',
    git: 'https://github.com/riaan53/meteor-blueimp-canvas-to-blob'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');

    api.addFiles('lib/JavaScript-Canvas-to-Blob/js/canvas-to-blob.js', 'client');
});
