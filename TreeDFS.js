class TreeDFS {
    search(node, value) {
        if (node.value === value) {
            return node;
        }

        if (!node.children.length) {
            return false;
        }

        for (let i=0; i < node.children.length; i++) {
            const nodeFound = this.search(node.children[i], value);

            if (nodeFound) {
                return nodeFound;
            }
        }
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
    children: [
        {
            name: 'B', value: 7,
            children: [{name: 'C', value: 9, children: []}]
        },
        {
            name: 'D', value: 11,
            children: [{name: 'E', value: 9, children: []}]
        },
        {name: 'F', value: 55, children: []},
        {
            name: 'G', value: 65,
            children: [
                {name: 'H', value: 21, children: []},
                {name: 'I', value: 33, children: []}
            ]
        }
    ]
};

const tdfs = new TreeDFS();
tdfs.run(tree, 11);
