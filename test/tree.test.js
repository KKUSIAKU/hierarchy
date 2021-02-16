
const { expect } = require('chai');
const { Node, Tree } = require('../src/index');
describe('', () => {
  it('Should return an empty tree', () => {
    const t = new Tree();
    expect(t.isEmpty()).to.equal(true)
  })

  it('Shoud not be empty', () => {
    const t = new Tree();
    const n = new Node();
 
    t.setRoot(n);
    expect(t.isEmpty()).to.equal(false) 
  })

  it('Could set twice root node', () => {
    const t = new Tree();
    const n = new Node();
    const m = new Node();
    expect(() => {
      t.setRoot(n);
      t.setRoot(m)
    }).to.throw();
  })

  it('should throw if tree is empty', (done) => {
    const t = new Tree(); 
    const n1 = new Node(); 
    const n2 = new Node();
    expect(() => {
      t.insert(n1, n2)
    }).to.throw()
    done()
  })

  it('should throw if parent node is not provided', (done) => {
    const t = new Tree();
    const r = new Node();
    t.setRoot(r);
    const n1 = new Node(); 
    expect(() => {
      t.insert(n1)
    }).to.throw()
    done()
  })

  it('should throw if parent node is not in the tree', (done) => {
    const r1 = new Node('r1');
    const r1_n1 = new Node('r1_n1')
    const r1_n2 = new Node('r1_n2')
    const r1_n3 = new Node('r1_n3')
    const r1_n11 = new Node('r1_n11')
    const r1_n12 = new Node('r1_n12')
    r1_n1.appendChild(r1_n11);
    r1_n1.appendChild(r1_n12);
    r1.appendChild(r1_n1)
    r1.appendChild(r1_n2);
    r1.appendChild(r1_n3);
    const t = new Tree();
    t.setRoot(r1)

    const r1_n4 = new Node('r1_n4')
    const new_node = new Node('new');

    expect(() => {
      t.insert(new_node, r1_n4)
    }).to.throw()
    done()
  })
// need to test more insertion scenario or case
  it('Should insert node on internal node', (done) => {
    const r1 = new Node('r1');
    const r1_n1 = new Node('r1_n1')
    const r1_n2 = new Node('r1_n2')
    const r1_n3 = new Node('r1_n3')
    const r1_n11 = new Node('r1_n11')
    const r1_n12 = new Node('r1_n12')
    r1_n1.appendChild(r1_n11);
    r1_n1.appendChild(r1_n12);
    r1.appendChild(r1_n1)
    r1.appendChild(r1_n2);
    r1.appendChild(r1_n3);

    const t = new Tree();
    t.setRoot(r1)
    const r1_n4 = new Node('r1_n4')
    expect(r1_n12.children.length).to.equal(0)
    t.insert(r1_n4, r1_n12);
    expect(r1_n12.children.length).to.equal(1)
    expect(r1_n12.children[0]).to.deep.equal(r1_n4)
    done()
  })

  it('Should find node leaf node', (done) => {
    const r1 = new Node('r1');
    const r1_n1 = new Node('r1_n1')
    const r1_n2 = new Node('r1_n2')
    const r1_n3 = new Node('r1_n3')
    const r1_n11 = new Node('r1_n11')
    const r1_n12 = new Node('r1_n12')
    r1_n1.appendChild(r1_n11);
    r1_n1.appendChild(r1_n12);
    r1.appendChild(r1_n1)
    r1.appendChild(r1_n2);
    r1.appendChild(r1_n3);

    const t = new Tree();
    t.setRoot(r1)
    expect(t.find(r1_n11)).to.deep.equal(r1_n11)
    done()
  })
})