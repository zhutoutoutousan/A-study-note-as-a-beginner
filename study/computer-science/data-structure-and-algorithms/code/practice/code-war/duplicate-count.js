function duplicateCount(text) {
    let container = {};
    for(i = 0; i < text.length; i++){
        if(container[text[i]]){
            container[text[i]]++;
        }
        else{
            container[text[i]] = 0;
        }
    }
    
}