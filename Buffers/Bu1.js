// const buf1 = Buffer.alloc(10); //allocates 10 memory spaces with 0(beacuse nothing is provided)
// console.log(buf1);

// const buf2 = Buffer.alloc(10, 5); //allocates 10 memory spaces with different value(beacuse 5 is provided as second argument)
// console.log(buf2);

// const buf3 = Buffer.alloc(10, "Vignesh"); //allocates 10 memory spaces with different value(beacuse 5 is provided as second argument)
// console.log(buf3);


//to get how many bytes does buffer using
// str = "Sample";
// console.log(str + ":" + str.length);
// console.log(str + " byte : " + Buffer.byteLength(str) + " bytes");

// let buf = Buffer.from('abc');
// console.log(buf);
// for (a of buf.entries()) {
//     console.log(a)
// };

// let buf1 = Buffer.from('Test');
// let buf2 = Buffer.from(buf1);
// console.log(buf1.toString(), buf2.toString());
// console.log({ buf1, buf2 });
// buf1[2] = 120;
// console.log(buf1.toString(), buf2.toString());
// console.log({ buf1, buf2 });

// let buf1 = Buffer.alloc(100);
// const len = buf1.write("Sample");
// console.log({ len, buf1 });
// buf1.write('M', 2, 1); //1st argument "replace",2nd "index",3rd "till how many index"
// console.log(buf1.toString());

// let buf1 = Buffer.from('Hi');
// console.log(buf1.toString());
// console.log(buf1.toString('hex')); //converting text to hexadecimal value
// console.log(buf1.toString("base64")); //converting text to base64 value

// const buf = Buffer.alloc(10);
// console.log(buf.toJSON());

let buf1 = Buffer.from('Sample');
let json = buf1.toJSON(buf1); //converting text to JSON format
console.log({ buf1, json });
for (a of json.data) {
    // String.fromCharCode = convert ascii to text
    console.log(a, ":", String.fromCharCode(a)); //print ascii value of every character
}