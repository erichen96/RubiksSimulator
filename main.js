import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { generateMovesPlacement, generateCubeState, generateRandomMoves, generateKociembaStateToString, applyState, adjustInnerSlices, generateEdgeSolution, generateNMCenterSolution } from './cubestate';
import { userInputToCube } from './cubejs';
import { TwistyPlayer } from "cubing/twisty";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x718072);

let pointer, raycaster;
raycaster = new THREE.Raycaster();
pointer = new THREE.Vector2();
let objects = []; //objects to store and remove all objects/meshs for new cube
let stickerObjects = []; //object to store all stickers only

var container = document.getElementById('cubeDisplay');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
var w = container.offsetWidth;
var h = container.offsetHeight;
renderer.setSize(w, h);

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.set(45, 45, 45);
document.getElementById("cubeDisplay").appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement)

document.addEventListener('pointerdown', onPointerDown);
window.addEventListener('resize', onWindowResize);


// ------------------------------- Threejs and Util Functions -------------------------------
var degree = function degree(rad) {
	return rad * Math.PI / 180;
};

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	// controls.update();
}

function render() {
	renderer.render(scene, camera);
}

function onWindowResize() {
	w = container.offsetWidth;
	h = container.offsetHeight;
	camera.aspect = w / h;
	camera.updateProjectionMatrix();
	renderer.setSize(w, h);
}

//Center rotation on cube center, add axes for visual, range of camera from center
function updateControls(cubeSize) {
	var centerPos = (cubeSize - 1.55) * 5.15;
	controls.target = new THREE.Vector3(centerPos, centerPos, centerPos);
	controls.minDistance = cubeSize * 25;
	controls.maxDistance = cubeSize * 25;
	// const axes = new THREE.AxesHelper(100);
	// var centerPos = (cubeSize - 1) * 5.5;
	// axes.position.set(centerPos, centerPos, centerPos);
	// scene.add(axes)
	controls.update();

}

// ------------------------------- User Text Functions -------------------------------

// Initial State TextArea
var initialState = document.getElementById('InitialState');
initialState.addEventListener('input', updateInitialInputState);
var explanationTextAreaCCE = document.getElementById("CCEExplanations")
var explanationTextAreaEP = document.getElementById("EPExplanations")
var explanationTextAreaCP = document.getElementById("CPExplanations")

var solutionTextArea = document.getElementById("SolutionState");
var heightLimit = 200; /* Maximum height: 200px */

var solutionArray = [];

initialState.oninput = function () {
	updateTextAreaSize();
};

//Append additional information from minor functions
export function appendInformation(position, movesString, explanation) {
	if(position == 0){
		solutionTextArea.value = solutionTextArea.value + '\n' + movesString;
		explanationTextAreaEP.innerHTML = explanationTextAreaEP.innerHTML + '<br>' + explanation + ": " + movesString;
	}

	if(position == 1){
		solutionTextArea.value = solutionTextArea.value + '\n' + movesString;
		explanationTextAreaCP.innerHTML = explanationTextAreaCP.innerHTML + '<br>' + explanation + ": " + movesString;
	}
	
}

// OnChange Update Cube to new State by User Input
function updateInitialInputState(e) {
	if (e.target.value == "") {
		createCube(cubeSize);
		generateCubeState(cubeSize);
		solutionTextArea.value = "";
		explanationTextAreaCCE.innerHTML = "";
		explanationTextAreaEP.innerHTML = "";
		explanationTextAreaCP.innerHTML = "";

	} else {
		try {
			onTextInputApplySticker(e.target.value, cubeSize);
			solutionTextArea.value = "";
			explanationTextAreaCCE.innerHTML = "";
			explanationTextAreaEP.innerHTML = "";
			explanationTextAreaCP.innerHTML = "";
		} catch (error) {
			// console.log(error);
			solutionTextArea.value = "";
			explanationTextAreaCCE.innerHTML = "";
			explanationTextAreaEP.innerHTML = "";
			explanationTextAreaCP.innerHTML = "";
		}
	}
}

//Call this function when appending to any textarea to expand with input
function updateTextAreaSize() {
	solutionTextArea.style.height = ""; /* Reset the height*/
	solutionTextArea.style.height = Math.min(solutionTextArea.scrollHeight, heightLimit) + 10 + "px";

	initialState.style.height = ""; /* Reset the height*/
	initialState.style.height = Math.min(initialState.scrollHeight, heightLimit) + 10 + "px";

}

// ------------------------------- Cube Functions -------------------------------
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

// Generate New Cube Visualization
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

// ------------------------------- Sticker Functions -------------------------------
function onTextInputApplySticker(string, cubeSize) {
	let moves = generateMovesPlacement(string, cubeSize);
	moves = moves.perm.perm;
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

export function onTextSolveSticker(string, cubeSize) {
	let moves = applyState(string, cubeSize);
	moves = moves.perm.perm;
	// console.log(moves);
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

// on Click Change Sticker Color to active Color
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
		// intersect.object.material.color.setHex(selectedColor);
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

// ------------------------------- Setting Functions -------------------------------
$(".dropdown-menu").on('click', '.dropdown-item', function (e) {
	var menu = $(this).val();
	document.getElementById("dropdown-menu-value").innerHTML = menu + "x" + menu + "x" + menu;
	createCube(menu);
	generateCubeState(menu);
	cubeSize = menu;
	initialState.value = "";
	solutionTextArea.value = "";
	explanationTextAreaCCE.innerHTML = "";
	explanationTextAreaEP.innerHTML = "";
	explanationTextAreaCP.innerHTML = "";
	if(playerDiv.firstChild){
		playerDiv.removeChild(playerDiv.firstChild)
	}

});


// ------------------------------- User Cube Functions -------------------------------
$("#solveCube").click(function (){
	var text = document.getElementById("InitialState").value;

	//Solve Corners and Center Edges with Kociemba Method by CubeJS
	var Kociemba = generateKociembaStateToString(text, cubeSize);
	var KociembaSolution = userInputToCube(Kociemba[0])
	onTextSolveSticker(KociembaSolution, cubeSize);
	solutionTextArea.value = KociembaSolution
	explanationTextAreaCCE.innerHTML = "";
	explanationTextAreaEP.innerHTML = "[Three Cycle] : Moves";
	explanationTextAreaCP.innerHTML = "[Three Cycle] : Moves";

	explanationTextAreaCCE.innerHTML += ("Parity of Corner and Center Edges: [" + Kociemba[1] + "]");
	explanationTextAreaCCE.innerHTML += "<br>" + KociembaSolution;

	//Adjust parity of inner slices
	let innerslices = Math.floor(cubeSize / 2);
	for (let i = 1; i < innerslices; i++) {
		let fix = adjustInnerSlices(cubeSize, i);
		if (fix[0] == 0) {
			explanationTextAreaCCE.innerHTML = (explanationTextAreaCCE.innerHTML) + '<br>' + "[No Adjustment Needed] Parity of Inner Slice " + i + " was " + fix[1];
		} else {
			onTextSolveSticker(fix[0], cubeSize);
			solutionTextArea.value = (solutionTextArea.value + '\n' + fix[0])
			explanationTextAreaCCE.innerHTML = (explanationTextAreaCCE.innerHTML) + '<br>' + "Parity of Inner Slice " + i + " was [1]: " + fix[0];
		}
	}


	//Solve Edge Stickers
	let solution = generateEdgeSolution(cubeSize);
	solution.forEach(element => {
		solutionTextArea.value = (solutionTextArea.value + '\n' + element[1])
		explanationTextAreaEP.innerHTML = (explanationTextAreaEP.innerHTML + '<br>' + element[0] + ": " + element[1])
		onTextSolveSticker(element[1], cubeSize)
	});

	//Solve Center Stickers
	let centerSolution = generateNMCenterSolution(cubeSize);
	centerSolution.forEach(element => {
		solutionTextArea.value = (solutionTextArea.value + '\n' + element[1])
		explanationTextAreaCP.innerHTML = (explanationTextAreaCP.innerHTML + '<br>' + element[0] + ": " + element[1])
		onTextSolveSticker(element[1], cubeSize)
	});

	//Set up for Range Slider for CubeState Representation
	solutionArray = solutionTextArea.value.split(/\r?\n/);
	let slider = document.getElementById('myRange')
	slider.max = solutionArray.length;
	slider.min = 0;
	slider.value = 0;
	updateTextAreaSize()
})

$("#resetCube").click(function (){
	createCube(cubeSize);
	generateCubeState(cubeSize);
	initialState.value = "";
	solutionTextArea.value = "";
	explanationTextAreaCCE.innerHTML = "";
	explanationTextAreaEP.innerHTML = "";
	explanationTextAreaCP.innerHTML = "";
})

//Generates 3n^2 Turns at random
$("#randomizeCube").click(function (){
	initialState.value = generateRandomMoves(cubeSize);
	let randomInitialState = document.getElementById("InitialState")
	var event = new Event('input')
	randomInitialState.dispatchEvent(event);
})



function rotate(face, order) {
	console.log("Rotation");
	var pivot = new THREE.Object3D(),
		activeGroup = [];
	var centerPos = (cubeSize - 1) * 5.5;
	pivot.position.set(centerPos, centerPos, centerPos);
	pivot.rotation.set(0, 0, 0);

	switch (face) {
		case 'U':
			objects.forEach(function (cubelet) {
				if ((cubelet.position.y % 10) == ((cubeSize - 1) - order)) {
					activeGroup.push(cubelet);
				}
			})

			for (var i in activeGroup) {
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.y = -Math.PI / 2;
			break;
		case 'D':
			objects.forEach(function (cubelet) {
				if ((cubelet.position.y % 10) == order) {
					activeGroup.push(cubelet);
				}
			})

			for (var i in activeGroup) {
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.y = Math.PI / 2;
			break;
		case 'F':
			objects.forEach(function (cubelet) {
				if ((cubelet.position.z % 10) == ((cubeSize - 1) - order)) {
					activeGroup.push(cubelet);
				}
			})

			for (var i in activeGroup) {
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.z = -Math.PI / 2;
			break;
		case 'B':
			objects.forEach(function (cubelet) {
				if ((cubelet.position.z % 10) == order) {
					activeGroup.push(cubelet);
				}
			})

			for (var i in activeGroup) {
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.z = Math.PI / 2;
			break;
		case 'R':
			objects.forEach(function (cubelet) {
				if ((cubelet.position.x % 10) == ((cubeSize - 1) - order)) {
					activeGroup.push(cubelet);
				}
			})

			for (var i in activeGroup) {
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.x = -Math.PI / 2;
			break;
		case 'L':
			objects.forEach(function (cubelet) {
				if ((cubelet.position.x % 10) == order) {
					activeGroup.push(cubelet);
				}
			})

			for (var i in activeGroup) {
				pivot.attach(activeGroup[i])
			}

			pivot.rotation.x = Math.PI / 2;
			break;
	}

	pivot.updateMatrixWorld();
	for (var i in activeGroup) {
		scene.attach(activeGroup[i]);
		activeGroup[i].position.copy(activeGroup[i].position.round());
	}
}
$("#rotateButton4").click(function () {
	rotate('L', 0); //Assume order always positive
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



var selectedColor = 0x808080;
var cubeSize = 5;

createCube(cubeSize);
generateCubeState(cubeSize);

var slide = document.getElementById('myRange');
var playerDiv = document.getElementById('player');

slide.oninput = function() {
	let string = initialState.value;
	let previousString = string;
	for(let i = 0; i < this.value; i++){
		previousString = string;
		string+= " " + solutionArray[i];
	}

	const player = new TwistyPlayer({
		puzzle: cubeSize + "x" + cubeSize + "x" + cubeSize,
		alg: String(solutionArray[this.value - 1]),
		hintFacelets: "none",
		background: "none",
		experimentalSetupAlg: String(previousString),
	})

	if(playerDiv.firstChild){
		playerDiv.removeChild(playerDiv.firstChild)
	}
	player.id = "playerAnimate";
	player.style.width = "100%";
	playerDiv.appendChild(player)
	
	onTextInputApplySticker(string, cubeSize)
	
}

// Enable ToolTips
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  })