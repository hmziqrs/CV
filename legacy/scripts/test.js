// const cmd = require('node-cmd');
// const cp = require('child_process');

const server = require('http-server');

async function run() {
  try {
    console.log(server);
    const s = server.createServer({
      root: 'build'
    })

      s.listen(8080);
    console.log(s);
    // const test = cp.spawn('npm', ['run', 'local'], { shell: true })
    // test.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });

    // test.stderr.on('data', (data) => {
    //   console.error(`stderr: ${data}`);
    // });

    // test.on('close', (code) => {
    //   console.log(`child process exited with code ${code}`);
    // });
  } catch (error) {
    console.error(error);
    console.error('error');
  }
}

run();
