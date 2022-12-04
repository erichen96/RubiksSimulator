import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { generateMovesPlacement } from './cubestate';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x718072);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(45, 45, 45);

let pointer, raycaster;
raycaster = new THREE.Raycaster();
pointer = new THREE.Vector2();
const objects = [];

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

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
					var gap = 1.05;
					// var gap = 1.50; for testing purposes
					var stickerProjection = 0.10;
					var geometryBox = new THREE.BoxGeometry(_this.pieceSize, _this.pieceSize, _this.pieceSize);
					var geometryFace = new THREE.PlaneGeometry(_this.pieceSize * 0.85, _this.pieceSize * 0.85);

					//Placed Here to allow for new instances of each material.
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


					var x = i * this.pieceSize - this.offset;
					var y = j * this.pieceSize - this.offset;
					var z = k * this.pieceSize - this.offset;

					faceU.position.set(x * gap, y * gap + (_this.pieceSize / 2 + stickerProjection), z * gap);
					faceD.position.set(x * gap, y * gap - (_this.pieceSize / 2 + stickerProjection), z * gap);
					faceB.position.set(x * gap, y * gap, z * gap - (_this.pieceSize / 2 + stickerProjection));
					faceF.position.set(x * gap, y * gap, z * gap + (_this.pieceSize / 2 + stickerProjection));
					faceL.position.set(x * gap - (_this.pieceSize / 2 + stickerProjection), y * gap, z * gap);
					faceR.position.set(x * gap + (_this.pieceSize / 2 + stickerProjection), y * gap, z * gap);
					box.position.set(x * gap, y * gap, z * gap);
					var pieceGroup = new THREE.Object3D();

					if (i == 0 || j == 0 || k == 0 || i == _this.cubeSize - 1 || j == _this.cubeSize - 1 || k == _this.cubeSize - 1) {
						if (i == _this.cubeSize - 1) {
							faceR.name = "R" + ((((_this.cubeSize * _this.cubeSize) - k) - (_this.cubeSize * j)) - 1);
							pieceGroup.add(faceR);
							objects.push(faceR);
						}
						if (i == 0) {
							faceL.name = "L" + ((_this.cubeSize * (_this.cubeSize - 1) + k) - (_this.cubeSize * j));
							pieceGroup.add(faceL);
							objects.push(faceL);
						}
						if (j == _this.cubeSize - 1) {
							faceU.name = "U" + ((_this.cubeSize * k) + i);
							pieceGroup.add(faceU);
							objects.push(faceU);
						}
						if (j == 0) {
							faceD.name = "D" + ((_this.cubeSize * (_this.cubeSize - k - 1)) + i);
							pieceGroup.add(faceD);
							objects.push(faceD);
						}
						if (k == _this.cubeSize - 1) {
							faceF.name = "F" + ((_this.cubeSize * (_this.cubeSize - j - 1)) + i);
							pieceGroup.add(faceF);
							objects.push(faceF);
						}
						if (k == 0) {
							faceB.name = "B" + ((_this.cubeSize * (_this.cubeSize - j) - i) - 1);
							pieceGroup.add(faceB);
							objects.push(faceB);
						}
						pieceGroup.add(box);
						// pieceGroup.position.set(x, y, z);
						pieceGroup.name = '' + i + j + k;
						scene.add(pieceGroup);
						console.log(pieceGroup)
						objects.push(pieceGroup);
						// camera.lookAt(pieceGroup.position);
					}

					//   _this.blocks[i][j][k].piece = pieceGroup;

				}
			}

		}


	}

	this.pieceSize = 10;
	this.offset = 5;
	this.cubeSize = order;
	this.createPieces();
}


var selectedColor = 0xf0e442;
// var cubeSize = 3;
// var cube = new Cube(cubeSize);
// console.log(objects)
createCube(4);
animate();
// onTextInputApplySticker("B");




function onTextInputApplySticker(string){
	console.log("Text Applied")
	let moves = generateMovesPlacement(string);
	// console.log(moves["U1"])
	
	for(var i in moves){
		let stickerLetter = i.replace(/[0-9]/g, '');
		let addColor = scene.getObjectByName(moves[i]);
		// let addColor = scene.getObjectByName(i);
		console.log(addColor)
		switch(stickerLetter){
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




function createCube(cubeSize){
	var cube = new Cube(cubeSize);
	updateControls(cubeSize);
}
//Center rotation on cube center, add axes for visual
function updateControls(cubeSize) {
	var centerPos = (cubeSize - 2) * 5.15;
	controls.target = new THREE.Vector3(centerPos, centerPos, centerPos);
	controls.minDistance = cubeSize * 20;
	controls.maxDistance = cubeSize * 25;
	const axes = new THREE.AxesHelper(100);
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

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}


function onPointerDown(event) {

	// Offset for div elements
	pointer.x = ((event.clientX - renderer.domElement.offsetLeft) / renderer.domElement.clientWidth) * 2 - 1;
	pointer.y = - ((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.clientHeight) * 2 + 1;

	pointer.set((event.clientX / window.innerWidth) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1);

	raycaster.setFromCamera(pointer, camera);

	const intersects = raycaster.intersectObjects(objects, false);

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


$(".dropdown-menu").on('click', '.dropdown-item', function(e) { 
    var menu = $(this).val();
    console.log(menu);
});


$("#applySticker").submit(function(e){
	console.log("applyStickering");
	e.preventDefault(); // Prevents loading page
	var text = document.getElementById("textboxID").value;
	console.log(text);
	onTextInputApplySticker(text);
})
