
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

  it('Should set twice root node on the tree', (done) => {
    const t = new Tree();
    //   const root = new Node();
    //   t.setRoot(root);
    //   expect(t.root).to.deep.equal(root)
    // })


    // it('Should have size 1', () => {
    //   const t = new Tree();
    //   const root = new Node();
    //   t.setRoot(root);
    //   expect(t.size).to.equal(1)
    // })


    // it('Should set twice root node on the tree', () => {
    //   const t = new Tree();
    //   expect(() => {
    //     t.setRoot()
    //     t.setRoot()
    //   }).to.throw()
    // })
    done()
  })
})