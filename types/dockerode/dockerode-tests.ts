import * as Docker from 'dockerode';

// Code samples from Dockerode 'Getting started'
const docker = new Docker();
const docker1 = new Docker({ socketPath: '/var/run/docker.sock' });
const docker2 = new Docker({ host: 'http://192.168.1.10', port: 3000 });
const docker3 = new Docker({ protocol: 'http', host: '127.0.0.1', port: 3000 });
const docker4 = new Docker({ host: '127.0.0.1', port: 3000 });

const docker5 = new Docker({
  host: '192.168.1.10',
  port: process.env.DOCKER_PORT || 2375,
  ca: 'ca',
  cert: 'cert',
  key: 'key'
});

const docker6 = new Docker({
  protocol: 'https', // you can enforce a protocol
  host: '192.168.1.10',
  port: process.env.DOCKER_PORT || 2375,
  ca: 'ca',
  cert: 'cert',
  key: 'key'
});

const docker7 = new Docker({
  Promise
});

async function foo() {
  const containers = await docker7.listContainers();
  for (const container of containers) {
    const foo = await docker7.getContainer(container.Id);
    const inspect = await foo.inspect();
  }

  const images = await docker5.listImages();
  for (const image of images) {
    const foo = await docker5.getImage(image.Id);
    const inspect = await foo.inspect();
    await foo.remove();
  }
}

const container = docker.getContainer('container-id');
container.inspect((err, data) => {
  // NOOP
});

container.start((err, data) => {
  // NOOP
});

container.remove((err, data) => {
  // NOOP
});

docker.listContainers((err, containers) => {
  containers.forEach(container => {
    docker
      .getContainer(container.Id)
      .stop((err, data) => {
        // NOOP
      });
  });
});

docker.listContainers().then(containers => {
  return containers.map(container => docker.getContainer(container.Id));
});

docker.buildImage('archive.tar', { t: 'imageName' }, (err, response) => {
  // NOOP
});

docker.createContainer({ Tty: true }, (err, container) => {
  container.start((err, data) => {
    // NOOP
  });
});

docker.pruneContainers((err, response) => {
  	// NOOP
});

docker.pruneImages((err, response) => {
  // NOOP
});

docker.pruneNetworks((err, response) => {
  // NOOP
});

docker.pruneVolumes((err, response) => {
  // NOOP
});

const plugin = docker.getPlugin('pluginName', 'remoteName');
plugin.configure((err, response) => {
  // NOOP;
});

plugin.disable((err, response) => {
 // NOOP
});

plugin.enable((err, response) => {
  // NOOP
});

plugin.inspect((err, response) => {
  // NOOP
});

plugin.privileges((err, response) => {
  // NOOP
});

plugin.pull({}, (err, response) => {
  // NOOP
});

plugin.push((err, response) => {
  // NOOP
});

plugin.remove((err, response) => {
  // NOOP
});

plugin.upgrade({}, (err, response) => {
  // NOOP
});

const secret = docker.getSecret('secretName');
secret.inspect((err, response) => {
  // NOOP
});

secret.remove((err, response) => {
  // NOOP
});

secret.update((err, response) => {
  // NOOP
});
