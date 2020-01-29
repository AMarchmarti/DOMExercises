//Exercise 1
//How many links document have?
console.log('links: ', document.links.length)

//How many parragraph does it have?
console.log('parragraph :', document.getElementsByTagName('p').length);

//Penultimate link
console.log('penultimate link:', document.links[document.links.length-2].getAttribute('href'));

//Last link
console.log('last link:', document.links[document.links.length-1].getAttribute('href'));

//how many link are in http://www.jurassicpark.com
function redirectLinks() {
    let count = 0
    for (let i = 0; i < document.links.length; i++){
        if (document.links[i].getAttribute('href') === 'http://www.jurassicpark.com'){
             count++
            }
        }
        console.log('count :', count);
    }
redirectLinks() 
//how many links are in parragraph
function linksInParragraph(){
    let parragraph = document.getElementsByTagName('p')
    let map = []
    let count = 0
    for(let i = 0; i < parragraph.length; i++){
        let links = parragraph[i].getElementsByTagName('a').length
        map.push({
            'parragraph': i,
            'countLinks': links,
        })
        count += links
    }
    console.log('map :', map);
    console.log('count :', count);
}
linksInParragraph()