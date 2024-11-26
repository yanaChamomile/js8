/*1*/
function copy(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionCopy = obj[key].bind({});
                functions.push({functionCopy, key});
            }
        }
        const copyObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            copyObj[func.key] = func.functionCopy;
        }
        console.log(copyObj);
        return copyObj
    }
    throw new Error('!!!');
}
copy({id:12, name: 'sasa', greeting() {}, foo() {}});
/*2*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course, index) => ({...course, id:  index + 1})));