function getDataFromInput(value){
    const inputValue=document.getElementById(value);
    const inputValueTake=inputValue.value;
    const inputValueTakeFloat=parseFloat(inputValueTake);
     
    if(inputValueTakeFloat<0){
        alert('Please Enter the Positive Number.')
        inputValue.value='';
        return;
    }
    if(isNaN(inputValueTakeFloat)){
        alert('Please,Enter the Number.')
        inputValue.value='';
        return;
    }

    // inputValue.value='';
    return inputValueTakeFloat;
}

function setValueToScreen(Id,value,IdCount){
    const setValue=document.getElementById(Id);
    if(isNaN(value)){
        return;
    }
    else{
        setValue.innerText=value;
    }
}

// set dataByClicking and Count that
function setDataInDisplay(AreaType, Area){
    const SetValueInScreen=document.getElementById('CountSection');

    const count =SetValueInScreen.childElementCount;

    // const SetValueInScreen=document.getElementById('CountSection');
    // const p=document.createElement('p');
    // SetValueInScreen.appendChild(p);

    const p=document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML= `${count+1}.   ${AreaType}   ${Area}cm<sup>2</sup>  <button class="btn btn-success">Convert</button>`;
    
    if(isNaN(Area)){
        return;
    }
    else{
        SetValueInScreen.appendChild(p);
    }

}
// TriangleData
document.getElementById('TriangleBtn').addEventListener('click',function(){
    const TriangleValue1 = getDataFromInput('TriangleValueB');
    const TriangleValue2 = getDataFromInput('TriangleValueH');
    const FinalArea = 0.5 * TriangleValue1 * TriangleValue2;
     
    setValueToScreen('setTriangleValue',FinalArea);
    setDataInDisplay('Triangle',FinalArea);
})


// RectangleData
document.getElementById('RectangleBtn').addEventListener('click',function(){
    const RectangleValue1 = getDataFromInput('RectangleValueW');
    const RectangleValue2 = getDataFromInput('RectangleValueI');
    const FinalArea = RectangleValue1 * RectangleValue2;

    setValueToScreen('RectangleValue',FinalArea);
    setDataInDisplay('Rectangle',FinalArea);
})

// ParallelogramData
document.getElementById('ParallelogramBtn').addEventListener('click',function(){
    const RectangleValue1 = getDataFromInput('ParallelogramValueB');
    const RectangleValue2 = getDataFromInput('ParallelogramValueH');
    const FinalArea = RectangleValue1 * RectangleValue2;

    setValueToScreen('ParallelogramValue',FinalArea);
    setDataInDisplay('Parallelogram',FinalArea);
})
// RhombusData
document.getElementById('RhombusBtn').addEventListener('click',function(){
    const RectangleValue1 = getDataFromInput('RhombusValueD1');
    const RectangleValue2 = getDataFromInput('RhombusValueD2');
    const FinalArea = RectangleValue1 * RectangleValue2;

    setValueToScreen('RhombusValue',FinalArea);
    setDataInDisplay('Rhombus',FinalArea);
})
// PentagonData
document.getElementById('PentagonBtn').addEventListener('click',function(){
    const RectangleValue1 = getDataFromInput('PentagonValueP');
    const RectangleValue2 = getDataFromInput('PentagonValueB');
    const FinalArea = RectangleValue1 * RectangleValue2;

    setValueToScreen('PentagonValue',FinalArea);
    setDataInDisplay('Pentagon',FinalArea);
})
// EllipseData
document.getElementById('EllipseBtn').addEventListener('click',function(){
    const RectangleValue1 = getDataFromInput('EllipseValueA');
    const RectangleValue2 = getDataFromInput('EllipseValueB');
    const FinalArea = RectangleValue1 * RectangleValue2;

    setValueToScreen('EllipseValue',FinalArea);
    setDataInDisplay('Ellipse',FinalArea);
})
