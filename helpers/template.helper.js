const ejs = require('ejs');

const renderTemplate = async (templateFileName, templateData) => {
    const template = ejs.renderFile(`templates/${templateFileName}`, templateData);
    
    return template;
};

module.exports = {
    renderTemplate
}