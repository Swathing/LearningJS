let array = ["book1", "book2", "book3", "book4", "book5"];

array.forEach((item) => {
    console.log(item);
})

array.filter(item => item.charAt(4) !== "5").forEach((item) => {
    console.log(item);
});

array.reverse().forEach((item) => {
    console.log(item);
})

for(let i = 0; i < 100; i++) {
    console.log(array.at(1));
}