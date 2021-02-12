const { expect } = require('chai');
const { Node } = require('../src/index');

describe('Node testing', () => {
  it('New node should be leaf when create from the constructor', (done) => {
    const n = new Node();
    expect(n.isLeaf()).to.equal(true)
    done()
  })

  it('Should raise eror when adding twice same node', (done) => {
    const one = new Node('one');
    const two = new Node('two');
    expect(() => {
      one.appendChild(two);
      one.appendChild(two);
    }).to.throw()
    done()
  })

  it('Contains method should return true on appended childnode', () => {
    const p = new Node('parent');
    const one = new Node('one');
    p.appendChild(one);
    expect(p.contains(one)).to.equal(true)
  })

  it('Contains method should return false on node in children list', () => {
    const p = new Node('parent');
    const one = new Node('one');
    const two = new Node('two');
    p.appendChild(one);
    expect(p.contains(two)).to.equal(false)
  })

  it('Removechild shoud slice out the target node', () => {
    const p = new Node('parent');
    const one = new Node('one');
    const two = new Node('two');
    const three = new Node('three');
    p.appendChild(one);
    p.appendChild(two);
    p.appendChild(three);
    expect(p.contains(two)).to.equal(true);
    p.removeChild(two)
    expect(p.contains(two)).to.equal(false);
    expect(p.contains(one)).to.equal(true);
    expect(p.contains(three)).to.equal(true);
  })

  it('Should parent ancestor correlty', () => {
    const p = new Node('parent');
    const one = new Node('one');
    expect(one.parent).to.be.null;
    one.setParent(p);
    expect(one.parent).to.equal(p);
  })
  
  it('Parent method could not be called twice', () => {
    const p = new Node('parent');
    const one = new Node('one');
    expect(() => {
      one.setParent(p);
      one.setParent(p)
    }).to.throw()
  })
})


