// // console.log("waris has awoken")

// // const getOrangeJuice = (cb) => {
// //     setTimeout(() => {
// //         console.log("make juice")
// //         cb()
// //     }, 1000)
// // }

// // const getMamlateToast = (cb) => {
// //     setTimeout(() => {
// //         console.log("make Toast")
// //         cb()
// //     }, 2000)
// // }


// // getOrangeJuice(() => {
// //     console.log("dakaar!")
// //     getMamlateToast(()=> {
// //         console.log("toast eaten")
// //     })
// // })


// let getOrangeJuicePromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let warisWifesMood = 3;
//             if (warisWifesMood >= 5) {
//                 resolve("orange juice ready")
//             } else {
//                 reject("sorry 1")
//             }
//         }, 1000)
//     })
// }

// let getMamlateToastPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let warisWifesMood = 3;
//             if (warisWifesMood >= 5) {
//                 resolve("mamlate toast is ready")
//             } else {
//                 reject("sorry 2")
//             }
//         }, 1000)
//     })
// }


// // let main = () => {
// //     getOrangeJuicePromise()
// //         .then(() => {
// //             console.log("juice")
// //             console.log("dakar ")
// //             return getMamlateToastPromise()
// //         })
// //         .then(() => {
// //             console.log("toast")
// //         }).catch((x) => {
// //             console.log("rejected")
// //             console.log(x)
// //         })
// // }


// let main2 = async () => {
//     try {
//         let juiceResult = await getOrangeJuicePromise()
//         let toastResult = await getMamlateToastPromise()
//         console.log(juiceResult)
//         console.log(toastResult)
//     }
//     catch (err) {
//         console.log(err)
//     }


// }
// main2()
// // main()



function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promise = job();
promise.then(function () {
    console.log('Success 1');
})

    .then(function () {
        console.log('Success 2');
    })

    .then(function () {
        console.log('Success 3');
    })

    .catch(function () {
        console.log('Error 1');
    })

    .then(function () {
        console.log('Success 4');
    });




