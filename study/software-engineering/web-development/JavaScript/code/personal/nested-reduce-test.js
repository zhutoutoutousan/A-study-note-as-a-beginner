const reduce1 = (array1,array2) => {
    return array1.reduce((acc1, crv1, cri1, srca1) =>{
        console.log(`Executing array1 reduce INDEX=${cri1} ACC=${acc1} CRV=${crv1} ARR=${srca1[1]}`)
        return acc1 + crv1 + cri1 + srca1[1] + array2.reduce((acc2, crv2, cri2, srca2) => {
            console.log(`Executing array2 reduce INDEX=${cri2} ACC=${acc2} CRV=${crv2} ARR=${srca2[0]}`)
            console.log(`Value in upper level value in nested loop: INDEX=${cri1} ACC=${acc1} CRV=${crv1} `)
            return acc2 + crv2 + cri2 + srca2[0];
        })
    })
}