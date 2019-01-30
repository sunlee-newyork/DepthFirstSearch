class BinaryTreeDFS {
	search(node, value) {
		if (!node) {
			return false;
		}

		if (node.value === value) {
			return node;
		}

		const leftFound = this.search(node.left, value);
		if (leftFound) return leftFound;

		const rightFound = this.search(node.right, value);
		if (rightFound) return rightFound;
	}

	run(tree, value) {
		return this.search(tree, value);
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

let tree = {
	name: 'A',
	value: 4,
	left: {
		name: 'B',
		value: 11,
		left: {
			name: 'C',
			value: 3,
			left: null,
		},
		right: null,
	},
	right: {
		name: 'D',
		value: 7,
		left: {
			name: 'E',
			value: 5,
			left: {
				name: 'F',
				value: 9,
				left: null,
				right: null,
			},
			right: {
				name: 'G',
				value: 2,
				left: null,
				right: null,
			},
		},
		right: {
			name: 'H',
			value: 1,
			left: null,
			right: null,
		},
	},
};

const btdfs = new BinaryTreeDFS();
btdfs.run(tree, 9);
