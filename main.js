import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { generateMovesPlacement, generateCubeState, generateKociembaStateToString, applyState } from './cubestate';
import { userInputToCube } from './cubejs';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x718072);

let pointer, raycaster;
raycaster = new THREE.Raycaster();
pointer = new THREE.Vector2();
let objects = []; //objects to store and remove all objects/meshs for new cube
let stickerObjects = []; //object to store all stickers only

var container = document.getElementById('cubeDisplay');
const renderer = new THREE.WebGLRenderer({ antialias: true });
var w = container.offsetWidth;
var h = container.offsetHeight;
renderer.setSize(w, h);

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.set(45, 45, 45);
document.getElementById("cubeDisplay").appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement)


document.addEventListener('pointerdown', onPointerDown);
window.addEventListener('resize', onWindowResize);



var degree = function degree(rad) {
	return rad * Math.PI / 180;
};



var Cube = function Cube(order) {
	var _this = this;
	this.createPieces = function () {

		//Start from -n/2 to n/2 ?
		for (var i = 0; i < _this.cubeSize; i++) {
			for (var j = 0; j < _this.cubeSize; j++) {
				for (var k = 0; k < _this.cubeSize; k++) {
					// Project sticker outward from cube piece 
					var stickerProjection = 0.10;
					var geometryBox = new THREE.BoxGeometry(_this.pieceSize, _this.pieceSize, _this.pieceSize);
					var geometryFace = new THREE.PlaneGeometry(_this.pieceSize * 0.85, _this.pieceSize * 0.85);

					// Placed Here to allow for new unique instances of each material for each unique sticker.
					var stickerU = new THREE.MeshBasicMaterial({
						color: 0xf0e442,
						side: THREE.DoubleSide
					});

					var stickerD = new THREE.MeshBasicMaterial({
						color: 0xffffff,
						side: THREE.DoubleSide
					});

					var stickerL = new THREE.MeshBasicMaterial({
						color: 0xcc79a7,
						side: THREE.DoubleSide
					});

					var stickerR = new THREE.MeshBasicMaterial({
						color: 0xd55e00,
						side: THREE.DoubleSide
					});

					var stickerF = new THREE.MeshBasicMaterial({
						color: 0x56b4e9,
						side: THREE.DoubleSide
					});

					var stickerB = new THREE.MeshBasicMaterial({
						color: 0x009e73,
						side: THREE.DoubleSide
					});

					var materialBox = new THREE.MeshBasicMaterial({
						color: 0x111111,
						side: THREE.DoubleSide
					})

					// Use for Curved Box Stickering, needs more specific rounding
					// let t = 1; let q = 1; let width = _this.pieceSize; let height = _this.pieceSize; let radius = _this.pieceSize * (20/50)
					// let shape = new THREE.Shape();
					// shape.moveTo(t, q + radius);
					// shape.lineTo(t, q + height - radius);
					// shape.quadraticCurveTo(t, q + height , t + radius, q + height);
					// shape.lineTo(t + width - radius, q + height);
					// shape.quadraticCurveTo(t + width, q + height, t + width, q + height - radius);
					// shape.lineTo(t + width, q + radius);
					// shape.quadraticCurveTo(t + width, q, t + width - radius, q);
					// shape.lineTo(t + radius, q);
					// shape.quadraticCurveTo(t, q, t, q + radius);
					// let geometryFace = new THREE.ShapeBufferGeometry(shape);
					// geometryFace.center();


					var faceU = new THREE.Mesh(geometryFace, stickerU)
					var faceD = new THREE.Mesh(geometryFace, stickerD)
					var faceL = new THREE.Mesh(geometryFace, stickerL)
					var faceR = new THREE.Mesh(geometryFace, stickerR)
					var faceF = new THREE.Mesh(geometryFace, stickerF)
					var faceB = new THREE.Mesh(geometryFace, stickerB)
					var box = new THREE.Mesh(geometryBox, materialBox);

					faceU.rotation.set(degree(90), 0, 0);
					faceD.rotation.set(degree(90), 0, 0);
					faceF.rotation.set(0, 0, degree(90));
					faceB.rotation.set(0, 0, degree(90));
					faceL.rotation.set(0, degree(90), 0);
					faceR.rotation.set(0, degree(90), 0);


					var x = i * this.pieceSize;
					var y = j * this.pieceSize;
					var z = k * this.pieceSize;

					faceU.position.set(x, y + (_this.pieceSize / 2 + stickerProjection), z);
					faceD.position.set(x, y - (_this.pieceSize / 2 + stickerProjection), z);
					faceB.position.set(x, y, z - (_this.pieceSize / 2 + stickerProjection));
					faceF.position.set(x, y, z + (_this.pieceSize / 2 + stickerProjection));
					faceL.position.set(x - (_this.pieceSize / 2 + stickerProjection), y, z);
					faceR.position.set(x + (_this.pieceSize / 2 + stickerProjection), y, z);
					box.position.set(x, y, z);
					var pieceGroup = new THREE.Object3D();

					if (i == 0 || j == 0 || k == 0 || i == _this.cubeSize - 1 || j == _this.cubeSize - 1 || k == _this.cubeSize - 1) {
						if (i == _this.cubeSize - 1) {
							faceR.name = "R" + ((((_this.cubeSize * _this.cubeSize) - k) - (_this.cubeSize * j)) - 1);
							pieceGroup.add(faceR);
							stickerObjects.push(faceR);
						}
						if (i == 0) {
							faceL.name = "L" + ((_this.cubeSize * (_this.cubeSize - 1) + k) - (_this.cubeSize * j));
							pieceGroup.add(faceL);
							stickerObjects.push(faceL);
						}
						if (j == _this.cubeSize - 1) {
							faceU.name = "U" + ((_this.cubeSize * k) + i);
							pieceGroup.add(faceU);
							stickerObjects.push(faceU);
						}
						if (j == 0) {
							faceD.name = "D" + ((_this.cubeSize * (_this.cubeSize - k - 1)) + i);
							pieceGroup.add(faceD);
							stickerObjects.push(faceD);
						}
						if (k == _this.cubeSize - 1) {
							faceF.name = "F" + ((_this.cubeSize * (_this.cubeSize - j - 1)) + i);
							pieceGroup.add(faceF);
							stickerObjects.push(faceF);
						}
						if (k == 0) {
							faceB.name = "B" + ((_this.cubeSize * (_this.cubeSize - j) - i) - 1);
							pieceGroup.add(faceB);
							stickerObjects.push(faceB);
						}
						pieceGroup.add(box);
						// pieceGroup.position.set(x, y, z);
						//Set positions for rotations
						pieceGroup.position.set(i, j, k);

						pieceGroup.name = '' + i + j + k;
						scene.add(pieceGroup);
						// print each pieces
						// console.log(pieceGroup)
						objects.push(pieceGroup);
						// camera.lookAt(pieceGroup.position);
					}


				}
			}

		}


	}

	this.pieceSize = 10;
	this.cubeSize = order;
	this.createPieces();
}

function onTextInputApplySticker(string, cubeSize) {
	console.log("Text Applied")
	let moves = generateMovesPlacement(string, cubeSize);
	// console.log(moves["U1"])

	for (var i in moves) {
		let stickerLetter = i.replace(/[0-9]/g, '');
		let addColor = scene.getObjectByName(moves[i]);
		// let addColor = scene.getObjectByName(i);
		// console.log(addColor)
		switch (stickerLetter) {
			case "U":
				addColor.material.color.setHex("0xf0e442")
				break;
			case "D":
				addColor.material.color.setHex("0xffffff")
				break;
			case "L":
				addColor.material.color.setHex("0xcc79a7")
				break;
			case "R":
				addColor.material.color.setHex("0xd55e00")
				break;
			case "F":
				addColor.material.color.setHex("0x56b4e9")
				break;
			case "B":
				addColor.material.color.setHex("0x009e73")
				break;
		}
	}
}

function onTextSolveSticker(string, cubeSize) {
	let moves = applyState(string, cubeSize);
	for (var i in moves) {
		let stickerLetter = i.replace(/[0-9]/g, '');
		let addColor = scene.getObjectByName(moves[i]);
		switch (stickerLetter) {
			case "U":
				addColor.material.color.setHex("0xf0e442")
				break;
			case "D":
				addColor.material.color.setHex("0xffffff")
				break;
			case "L":
				addColor.material.color.setHex("0xcc79a7")
				break;
			case "R":
				addColor.material.color.setHex("0xd55e00")
				break;
			case "F":
				addColor.material.color.setHex("0x56b4e9")
				break;
			case "B":
				addColor.material.color.setHex("0x009e73")
				break;
		}
	}
}


function createCube(cubeSize) {
	//Set objects to [] to clear references to previous cube meshes
	objects = [];
	stickerObjects = [];
	//Remove current cube
	renderer.dispose()
	scene.traverse(object => {
		if (!object.isMesh) return
		object.geometry.dispose()

		if (object.material.isMaterial) {
			object.material.dispose()
		} else {
			// an array of materials
			for (const material of object.material) {
				material.dispose()
			}
		}
	})
	scene.remove.apply(scene, scene.children);

	var cube = new Cube(cubeSize);
	updateControls(cubeSize);
	animate();
	// console.log(renderer.info)

}
//Center rotation on cube center, add axes for visual, range of camera from center
function updateControls(cubeSize) {
	var centerPos = (cubeSize - 1.55) * 5.15;
	controls.target = new THREE.Vector3(centerPos, centerPos, centerPos);
	controls.minDistance = cubeSize * 20;
	controls.maxDistance = cubeSize * 25;
	const axes = new THREE.AxesHelper(100);
	var centerPos = (cubeSize - 1) * 5.5;
	axes.position.set(centerPos, centerPos, centerPos);
	scene.add(axes)
	controls.update();

}


function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	// controls.update();
}

function render() {
	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = w / h;
	camera.updateProjectionMatrix();
	renderer.setSize(w, h);
}


function onPointerDown(event) {

	// Offset for div elements
	pointer.x = ((event.clientX - renderer.domElement.offsetLeft) / renderer.domElement.clientWidth) * 2 - 1;
	pointer.y = - ((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.clientHeight) * 2 + 1;

	pointer.set((event.clientX / w) * 2 - 1, - (event.clientY / h) * 2 + 1);

	raycaster.setFromCamera(pointer, camera);

	const intersects = raycaster.intersectObjects(stickerObjects, false);

	if (intersects.length > 0) {

		const intersect = intersects[0];

		console.log(intersect)
		console.log(intersect.object.name)
		intersect.object.material.color.setHex(selectedColor);
		render();

	}

}


// On ColorPicker click
// Change to new color
$(".button").click(function () {
	selectedColor = $(this).attr('value');
	$(".button").removeAttr("id");
	$(this).attr("id", "activeColor")

})


$(".dropdown-menu").on('click', '.dropdown-item', function (e) {
	var menu = $(this).val();
	createCube(menu);
	generateCubeState(menu);
	cubeSize = menu;
});


$("#applySticker").submit(function (e) {
	console.log("applyStickering");
	e.preventDefault(); // Prevents loading page
	var text = document.getElementById("textboxID").value;
	console.log(text);
	onTextInputApplySticker(text, cubeSize);
	// console.log(userInputToCube(text))
	// onTextInputApplySticker(userInputToCube(text), cubeSize);

	//Append to text box
	moveTextArea.val(moveTextArea.val() + '\n' + text);

})

$("#fixSticker").submit(function (e) {
	console.log("Solution");
	e.preventDefault();
	var text = document.getElementById("textboxID").value;
	var KociembaSolution = userInputToCube(generateKociembaStateToString(text, cubeSize))
	console.log(KociembaSolution)
	onTextSolveSticker(KociembaSolution, cubeSize);

	moveTextArea.val(moveTextArea.val() + '\n' + KociembaSolution);


})

// Handle for user to change colorSelector activeColor
const colorSelector = document.querySelector('.colorSelector')
const handle = colorSelector.querySelector('.handle')
handle.onclick = function () {
	colorSelector.classList.toggle('active');
}

function rotate(face, order){
	console.log("Rotation");
	var pivot = new THREE.Object3D(),
	activeGroup = [];
	var centerPos = (cubeSize - 1) * 5.5;
	pivot.position.set(centerPos, centerPos, centerPos);
	pivot.rotation.set(0,0,0);

	switch(face){
		case 'U':
			objects.forEach(function(cubelet){
				if((cubelet.position.y % 10) == ((cubeSize - 1) - order)){
					activeGroup.push(cubelet);
				}
			})
		
			for (var i in activeGroup){
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.y = -Math.PI/2;
			break;
		case 'D':
			objects.forEach(function(cubelet){
				if((cubelet.position.y % 10) == order){
					activeGroup.push(cubelet);
				}
			})
		
			for (var i in activeGroup){
				pivot.attach(activeGroup[i])
			}
			
			pivot.rotation.y = Math.PI/2;
			break;
		case 'F':
			objects.forEach(function(cubelet){
				if((cubelet.position.z % 10) == ((cubeSize - 1) - order)){
					activeGroup.push(cubelet);
				}
			})
		
			for (var i in activeGroup){
				pivot.attach(activeGroup[i])
			}
			
			pivot.rotation.z = -Math.PI/2;
			break;
		case 'B':
			objects.forEach(function(cubelet){
				if((cubelet.position.z % 10) == order){
					activeGroup.push(cubelet);
				}
			})
		
			for (var i in activeGroup){
				pivot.attach(activeGroup[i])
			}
			
			pivot.rotation.z = Math.PI/2;
			break;
		case 'R':
			objects.forEach(function(cubelet){
				if((cubelet.position.x % 10) == ((cubeSize - 1) - order)){
					activeGroup.push(cubelet);
				}
			})
		
			for (var i in activeGroup){
				pivot.attach(activeGroup[i])
			}
			
			pivot.rotation.x = -Math.PI/2;
			break;
		case 'L':
			objects.forEach(function(cubelet){
				if((cubelet.position.x % 10) == order){
					activeGroup.push(cubelet);
				}
			})
		
			for (var i in activeGroup){
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.x = Math.PI/2;
			break;
	}

	pivot.updateMatrixWorld();
	for(var i in activeGroup){
		scene.attach(activeGroup[i]);
		activeGroup[i].position.copy(activeGroup[i].position.round());
	}
}
$("#rotateButton4").click(function () {
	rotate('L',0); //Assume order always positive
})
$("#rotateButton").click(function () {
	//Test Button
	console.log('rotateButton Pressed');
	var pivot = new THREE.Object3D(),
		activeGroup = [];
	var centerPos = (cubeSize - 1) * 5.5;
	pivot.position.set(centerPos, centerPos, centerPos)
	pivot.rotation.set(0, 0, 0);

	objects.forEach(function (cubelet) {
		let y = cubelet.position.y;
		if ((y % 10) == 0) {
			activeGroup.push(cubelet);
		}
	})
	for (var i in activeGroup) {
		pivot.attach(activeGroup[i])
	}

	pivot.rotation.y = Math.PI / 2;


	pivot.updateMatrixWorld();

	for (var i in activeGroup) {
		scene.attach(activeGroup[i]);
		activeGroup[i].position.copy(activeGroup[i].position.round())

	}
})

$("#rotateButton2").click(function () {
	//Test Button
	console.log('rotateButton Pressed');
	var pivot = new THREE.Object3D(),
		activeGroup = [];
	var centerPos = (cubeSize - 1) * 5.5;
	pivot.position.set(centerPos, centerPos, centerPos)
	pivot.rotation.set(0, 0, 0);

	objects.forEach(function (cubelet) {
		if ((cubelet.position.x % 10) == 0) {
			activeGroup.push(cubelet);
		}
	})

	for (var i in activeGroup) {
		pivot.attach(activeGroup[i])
	}

	pivot.rotation.x = Math.PI / 2;


	pivot.updateMatrixWorld();

	for (var i in activeGroup) {
		scene.attach(activeGroup[i]);
		activeGroup[i].position.copy(activeGroup[i].position.round())

	}
})
$("#rotateButton3").click(function () {
	//Test Button
	console.log('rotateButton Pressed');
	var pivot = new THREE.Object3D(),
		activeGroup = [];
	var centerPos = (cubeSize - 1) * 5.5;
	pivot.position.set(centerPos, centerPos, centerPos)
	pivot.rotation.set(0, 0, 0);

	objects.forEach(function (cubelet) {
		if ((cubelet.position.z % 10) == 4) {
			activeGroup.push(cubelet);
		}
	})

	for (var i in activeGroup) {
		pivot.attach(activeGroup[i])
	}

	pivot.rotation.z = -Math.PI / 2;


	pivot.updateMatrixWorld();

	for (var i in activeGroup) {
		scene.attach(activeGroup[i]);
		activeGroup[i].position.copy(activeGroup[i].position.round())
	}
})
// let fps = 60;
// let tau = 2;
// const step = 1/ (tau * fps);
// const finalAngle = Math.PI/2;
// const angleStep = finalAngle * step;
// let t = 0;

// function animateGroup(t, pivot){
// 	if (t >= 1) return;
// 	t += step;
// 	pivot.rotation.x += angleStep;
// 	requestAnimationFrame(() => animateGroup(t, pivot));
// }



var selectedColor = 0xf0e442;
var cubeSize = 5;
var moveTextArea = $('#textarea');

createCube(cubeSize);
generateCubeState(cubeSize);