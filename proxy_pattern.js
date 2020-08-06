class RealImage {
	constructor(fileName) {
		this.fileName = fileName;
		this.loadFromDisk(fileName);
	}
	
	display() {
		console.log('Displaying ' + this.fileName);
	}
	
	loadFromDisk(fileName) {
		console.log('Loading ' + fileName);
	}
}

class ProxyImage {
	constructor(fileName) {
		this.fileName = fileName;
		this.realImage = null;
	}
	
	display() {
		if(this.realImage == null) {
			this.realImage = new RealImage(this.fileName);
		}
		
		this.realImage.display();
	}
}

const image = new ProxyImage('test_10mb.jpg');

// image will be loaded from disk
image.display();

console.log('');
// image will not be loaded from disk
image.display();