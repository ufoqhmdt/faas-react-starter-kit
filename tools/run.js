export function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn, options) {
  console.log('UFO::::',options);
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();
  console.info(
    `[${format(start)}] 启动任务 '${task.name}${options
      ? ` (${options})`
      : ''}'...`,
  );
  return task(options).then(resolution => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.info(
      `[${format(end)}] 完成任务 '${task.name}${options
        ? ` (${options})`
        : ''}' after ${time} ms`,
    );
    return resolution;
  });
}

console.log('UFO::::',require.main);
// console.log('UFO::::',require.cache);
console.log('UFO::::',__filename,process.argv);
if (require.main === module && process.argv.length > 2) {
  // eslint-disable-next-line no-underscore-dangle
  delete require.cache[__filename];

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const module = require(`./${process.argv[2]}.js`).default;

  run(module).catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
}

export default run;
