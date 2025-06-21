function willyoumarryme(fightscount){
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
            if (fightscount > 100) {
                resolve("Yes, I will marry you!");
            } else {
                reject("No, I won't marry you.");
            }
        },3000)
       
    });
    willyoumarryme(101)
    .then(response => {
        console.log(response); // "Yes, I will marry you!"
    })
    .catch(error => {
        console.log(error); // "No, I won't marry you."
    });

}