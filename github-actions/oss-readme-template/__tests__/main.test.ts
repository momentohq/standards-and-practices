test('placeholder', () => {
  expect(true).toEqual(true);
});

// This is an example test that came from the github actions template.  It shows
// how to spawn a process that runs our `main` in the way that github will do it.
// might be good to have some tests that cover this, but at present, our main
// unconditionally writes a README.md file on the filesystem, which we don't want
// to do in tests.

// shows how the runner will run a javascript action with env / stdout protocol
// test('test runs', () => {
//   process.env['INPUT_MILLISECONDS'] = '500';
//   const np = process.execPath;
//   const ip = path.join(__dirname, '..', 'lib', 'main.js');
//   const options: cp.ExecFileSyncOptions = {
//     env: process.env,
//   };
//   console.log(cp.execFileSync(np, [ip], options).toString());
// });
