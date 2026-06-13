var scene, camera, renderer;

function init() {

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x08080a);

	camera = new THREE.PerspectiveCamera(
		60,
		window.innerWidth / window.innerHeight,
		0.1,
		100
	);

	camera.position.set(0, 9, 20);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	// ===== SUELO =====

	const floorGeo = new THREE.PlaneGeometry(30, 30, 20, 20);

	const wireMat = new THREE.MeshBasicMaterial({
		color: 0x00f0ff,
		wireframe: true
	});

	const floor = new THREE.Mesh(floorGeo, wireMat);
	floor.rotation.x = -Math.PI / 2;

	scene.add(floor);

	// ===== PARED FONDO =====

	const backWall = new THREE.Mesh(
		new THREE.PlaneGeometry(30, 15, 20, 10),
		wireMat
	);

	backWall.position.set(0, 7.5, -15);

	scene.add(backWall);

	// ===== PARED IZQUIERDA =====

	const leftWall = new THREE.Mesh(
		new THREE.PlaneGeometry(30, 15, 20, 10),
		wireMat
	);

	leftWall.rotation.y = Math.PI / 2;
	leftWall.position.set(-15, 7.5, 0);

	scene.add(leftWall);

	// ===== PARED DERECHA =====

	const rightWall = new THREE.Mesh(
		new THREE.PlaneGeometry(30, 15, 20, 10),
		wireMat
	);

	rightWall.rotation.y = -Math.PI / 2;
	rightWall.position.set(15, 7.5, 0);

	scene.add(rightWall);

	// ===== OBJETOS =====

	const torusKnot = new THREE.Mesh(
		new THREE.TorusKnotGeometry(1.2, 0.4, 64, 12),
		wireMat
	);

	torusKnot.position.set(0, 2.5, 0);
	scene.add(torusKnot);

	const box = new THREE.Mesh(
		new THREE.BoxGeometry(1.6, 1.6, 1.6),
		wireMat
	);

	box.position.set(0, 2, -7);
	scene.add(box);

	const torus = new THREE.Mesh(
		new THREE.TorusGeometry(1.0, 0.35, 12, 24),
		wireMat
	);

	torus.position.set(-6, 2, 5);
	scene.add(torus);

	const cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry(0.8, 0.8, 2.2, 12),
		wireMat
	);

	cylinder.position.set(6, 2, 5);
	scene.add(cylinder);

	const cone = new THREE.Mesh(
		new THREE.ConeGeometry(0.9, 2.2, 12),
		wireMat
	);

	cone.position.set(-6, 2.2, -5);
	scene.add(cone);

	const sphere = new THREE.Mesh(
		new THREE.SphereGeometry(1.1, 12, 12),
		wireMat
	);

	sphere.position.set(6, 2.1, -5);
	scene.add(sphere);

	const dodecahedron = new THREE.Mesh(
		new THREE.DodecahedronGeometry(1.1),
		wireMat
	);

	dodecahedron.position.set(0, 1.8, 6);
	scene.add(dodecahedron);

	// ===== ANIMACIÓN =====

	this.update = function (event) {

		const time = event.time * 0.001;

		torusKnot.rotation.x = time * 0.7;
		torusKnot.rotation.y = time;

		torus.rotation.y = time;

		cylinder.position.y =
			2 + Math.sin(time * 1.5) * 0.45;

		cone.position.y =
			2.2 + Math.sin(time * 1.2) * 0.45;

		sphere.rotation.x = time * 0.6;
		sphere.rotation.y = time * 0.8;
		sphere.position.y =
			2.1 + Math.sin(time * 1.7) * 0.45;

		dodecahedron.rotation.y = time * 0.8;
	};

}