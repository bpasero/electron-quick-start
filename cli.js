var cp = require('child_process');

cp.spawn(process.execPath, ['.'], { stdio: 'pipe' });

process.exit(0);