Package.describe({
  name: 'sclausen:bpg',
  summary: 'Adds the decoder for bpg files.',
  version: '0.1.0',
  git: 'http://github.com/sclausen/meteor-bpg'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('bpgdec.js', 'client');
});
