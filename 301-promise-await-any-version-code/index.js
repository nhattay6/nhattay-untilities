function X() {} // promise
function Y() {} // promise

const run1 = async () => {
  const _x = await X()
  const _y = await Y()
}

const run2 = async () => {
  const [_x, _y] = await Promise.all([ X(), Y()])
}

const run3 = async () => {
  const _awaitX = X()
  const _awaitY = Y()

  const _x = await _awaitX;
  const _y = await _awaitY;
}

// run1 khac run3

// run3 tương đương với run2