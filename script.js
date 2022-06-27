function truncate(text, limit){
    let result = text.slice(0, limit);
    return `${result}...`
}

console.log(truncate('Lorem ipsum dolor sit amet consectetur', 3));