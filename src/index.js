//  box drawing chars
const L = '└';
const T = '├';
const _ = '─'
const I = '│';
const SPACE = ' ';

//  box drawing configuration
const GAP = SPACE.repeat(4);
const INDENT_BEFORE_NAME = SPACE.repeat(1);
const INDENT_AFTER_NAME = SPACE.repeat(1);
const SUFFIX_UNIT = '-';


const repeatTime = 1;

const FIRST = 'first';
const LAST = 'last';

const modifyName = name => {
  return `${INDENT_BEFORE_NAME}${name}${INDENT_AFTER_NAME}`
}

function generateBoxItem(item, type) {
  const { name, children = [] } = item;
  switch (type) {
    case FIRST:
      const current = T + _.repeat(repeatTime) + modifyName(name);
      const child = boxDraw(children);
      if (child) {
        let arr = child.split('\n').map((item) => `${I}${GAP}${item}`);
        return [current, ...arr].join('\n');
      } else {
        return current;
      }
    case LAST:
      const _current = L + _.repeat(repeatTime) + modifyName(name);
      const _child = boxDraw(children);
      if (_child) {
        let arr = _child.split('\n').map((item) => `${GAP}${item}`);
        return [_current, ...arr].join('\n');
      } else {
        return _current;
      }

    default:
      return null;
  }
}

function boxDraw(list, leastShowDash = 0) {
  const resultLines = list
    .map((file, index) => {
      const length = list.length;
      switch (length) {
        case 0:
          return null;
        case 1:
          return generateBoxItem(file, LAST);
        default:
          return generateBoxItem(file, index !== length - 1 ? FIRST : LAST);
      }
    })
    .join('\n');
  if (leastShowDash) {
    const lines = resultLines.split('\n');
    const maxLength = lines.reduce((max, line) => {
      return line.length > max ? line.length : max;
    }, 0);

    const lengthWithComment = maxLength + leastShowDash;
    return lines.map((line) => {
      const length = line.length;
      const gap = lengthWithComment - length;
      return `${line}${SUFFIX_UNIT.repeat(gap)}`;
    }).join('\n');
  }
  return resultLines;
}


module.exports = boxDraw;

