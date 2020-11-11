const reactDocs = require('react-docgen');
const path = require('path');
const fs = require('fs');

function generateMarkDown(props) {
  const content = `#### props

  | 属性     | 类型 | 默认值 | 必填  | 描述 |
  | ------- | ------ | ------------------ | ---- | -------------- |
  ${Object.keys(props).map((key) => {
    const { type, required, description } = props[key];
    return `|${key}|${type.name || '-'}|${
      type.value || '-'
    }| ${required}| ${description}|

    `;
  })}
  `;
  return content;
}

/**
 *
 * @param {string} content 文本内容
 */
function generateDocFromText(content, fileName) {
  const targetPath = path.join(fileName, '../README.md');
  const componentInfo = reactDocs.parse(content);
  fs.writeFileSync(targetPath, generateMarkDown(componentInfo.props));
}

module.exports = generateDocFromText;
